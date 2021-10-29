import React, { useEffect, useState } from "react";
import BlogDashBoard from "../../components/DashBoard/Blog/Blog";
import Container from "../../components/DashBoard/layout/Container";
import { Row, Col } from "react-bootstrap";
import Options from "../../components/DashBoard/Blog/Options/Options";
import { checkInputIsEmpty } from "../../util";
import { key_multer } from "../../util/key-server";
import useAxios from "../../hook/use-axios";
import { createPostApi } from "../../config/post";
import { useSelector, useDispatch } from "react-redux";
import { NotifyActions } from "../../components/store/NotifyAfterLogin/NotifyAfterLogin";
const Blog = () => {
  const token = useSelector(state => state.isAuth.token);
  const [getValueEditor, setGetValueEditor] = useState("");
  const [description, setDescription] = useState("");
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [category, setCategory] = useState(undefined);
  const dispatch = useDispatch();
  const { fetchDataFromServer, data, isLoading, error } = useAxios();
  const submitBlogHandler = (event) => {
    if (
      !checkInputIsEmpty(title) ||
      !checkInputIsEmpty(getValueEditor) ||
      !checkInputIsEmpty(description)
    ) {
      return;
    }
    event.preventDefault();
    const blogObjectMatchServer = {
      title: title,
      category: category ? category : undefined,
      content: getValueEditor,
      short_description: description,
      is_public: isPublic,
    };
    const formData = new FormData();
    formData.append(key_multer, images[0]);
    const convertObjectToArray = Object.entries(blogObjectMatchServer);
    convertObjectToArray.forEach((field) => {
      formData.append(field[0], field[1]);
    });
    fetchDataFromServer({
      url: createPostApi,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: formData
    });
  };
  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const setDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const getFileOfDropzone = (files) => {
    setImages(files);
  };
  useEffect(() => {
    if(!isLoading && data){
      dispatch(NotifyActions.showedNotify({
        message: 'Created Blog Successfully',
        code: 200
      }))
    }
    if(!isLoading && error){
      dispatch(NotifyActions.showedNotify({
        message: error.message || 'Please try again!, error',
        code: error.code || 500
      }))
    }
  }, [error, dispatch, isLoading, data]);
  return (
    <>
      <Container>
        <form onSubmit={submitBlogHandler}>
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <BlogDashBoard
                setTitleHandler={setTitleHandler}
                setGetValueEditor={setGetValueEditor}
                setDescriptionHandler={setDescriptionHandler}
                getFileOfDropzone={getFileOfDropzone}
                setImageIsLoading={setImageIsLoading}
              />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Options
                editorIsLoading={imageIsLoading}
                isSubmit={submitBlogHandler}
                setIsPublic={setIsPublic}
                setCategory={setCategory}
                category={category ? category : ""}
              />
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Blog;
