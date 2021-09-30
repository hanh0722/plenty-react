import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Row } from "react-bootstrap";
import Container from "../layout/container/Container";
import ShopPage from "../ShopPage/ShopPage";
import HeaderPage from "../HeaderPage/HeaderPage";
const Shop = () => {
  const route = useRouteMatch();
  return (
    <>
      <HeaderPage
        title="Products"
        paths={[
          {
            link: route.path,
            name: "Products",
          },
        ]}
      />
      <Container>
        <Row>
          <ShopPage />
        </Row>
      </Container>
    </>
  );
};

export default Shop;
