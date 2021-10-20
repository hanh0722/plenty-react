import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/DashBoard/layout/Container";
import Form from "../../components/DashBoard/Product/Form/Form";
import Grid from "../../components/DashBoard/UI/Grid/Grid";
import ProductOptions from "../../components/DashBoard/Product/ProductOptions/ProductOptions";
const Product = () => {
  const stateProduct = useSelector((state) => state.upload);
  const [getFile, setFiles] = useState([]);
  const uploadProductHandler = (event) => {
    event.preventDefault();
    const dataProduct = {
      ...stateProduct,
      image: getFile
    };
    console.log(dataProduct);
  };
  const setFileHandler = useCallback((data) => {
    setFiles(data);
  }, []);
  console.log(getFile, stateProduct);
  return (
    <Container>
      <form onSubmit={uploadProductHandler}>
        <Grid>
          <Form setFileHandler={setFileHandler} />
          <ProductOptions onSubmit={uploadProductHandler} />
        </Grid>
      </form>
    </Container>
  );
};

export default Product;
