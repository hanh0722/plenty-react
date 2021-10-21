import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/DashBoard/layout/Container";
import Form from "../../components/DashBoard/Product/Form/Form";
import Grid from "../../components/DashBoard/UI/Grid/Grid";
import ProductOptions from "../../components/DashBoard/Product/ProductOptions/ProductOptions";
import useFetch from "../../hook/use-fetch";
import { uploadProductApi } from "../../config/url";
import { key_multer } from "../../util/key-server";
const Product = () => {
  const stateProduct = useSelector((state) => state.upload);
  const token = useSelector((state) => state.isAuth.token);
  const { getDataFromServerHandler, error, isLoading, data } = useFetch();
  const [getFile, setFiles] = useState([]);
  const uploadProductHandler = (event) => {
    event.preventDefault();
    const product = {
      title: stateProduct.title,
      description: stateProduct.description,
      inStock: stateProduct.inStock,
      type_product: stateProduct.type,
      regular_price: +stateProduct.regularPrice,
      sale_percent: +stateProduct.salePercent,
      last_price: +stateProduct.lastPrice,
    };
    const formData = new FormData();
    getFile.forEach((file) => {
      formData.append(key_multer, file);
    });
    const turnProductToEntries = Object.entries(product);
    turnProductToEntries.forEach(([key_pair, value]) => {
      formData.append(key_pair, value);
      // destructuring array of object entries
    });
    getDataFromServerHandler({
      url: uploadProductApi,
      options: {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      },
    });
  };
  const setFileHandler = useCallback((data) => {
    setFiles(data);
  }, []);
  console.log(error, isLoading, data);
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
