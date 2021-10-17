import React from "react";
import Container from "../../components/DashBoard/layout/Container";
import Form from "../../components/DashBoard/Product/Form/Form";
import Grid from "../../components/DashBoard/UI/Grid/Grid";
import ProductOptions from "../../components/DashBoard/Product/ProductOptions/ProductOptions";
const Product = () => {
  return (
    <Container>
      <Grid>
        <Form />
        <ProductOptions/>
      </Grid>
    </Container>
  );
};

export default Product;
