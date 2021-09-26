import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link, useRouteMatch } from "react-router-dom";
import { HOME_PAGE } from "../link/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import Container from "../layout/container/Container";
import ShopPage from "../ShopPage/ShopPage";
const Shop = () => {
  const route = useRouteMatch();
  return (
    <>
      <BreadCrumb>
        <h2>Products</h2>
        <Link to={HOME_PAGE}>
          Home <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to={route.path}>Products</Link>
      </BreadCrumb>
      <Container>
        <Row>
          <ShopPage />
        </Row>
      </Container>
    </>
  );
};

export default Shop;
