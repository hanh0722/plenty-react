import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link, useRouteMatch } from "react-router-dom";
import { HOME_PAGE } from "../link/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Product from "../Product/Product";
import { Col, Row } from "react-bootstrap";
import Container from "../layout/container/Container";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import nonAccentVietnamese from "../removeUnicode/removeUnicode";
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
          {DUMMY_DATA.map((item) => {
            return (
              <Col xs={6} sm={6} md={4} lg={3} key={item.id}>
                <Product
                  imageUrl={item.imageUrl}
                  price={item.price}
                  name={item.name}
                  id={item.id}
                  link={nonAccentVietnamese(item.name)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
