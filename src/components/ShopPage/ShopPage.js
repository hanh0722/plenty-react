import React from "react";
import { useRouteMatch } from "react-router-dom";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import Product from "../Product/Product";
import { Col } from "react-bootstrap";
import nonAccentVietnamese from "../removeUnicode/removeUnicode";

const ShopPage = () => {
  const route = useRouteMatch();
  return DUMMY_DATA.map((product) => {
      const path = nonAccentVietnamese(product.name);
    return (
      <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product
          imageUrl={product.imageUrl}
          price={product.price}
          name={product.name}
          id={product.id}
          link={`${route.path}/${path}`}
        />
      </Col>
    );
  });
};

export default ShopPage;
