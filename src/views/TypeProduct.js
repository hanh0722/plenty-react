import React from "react";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import { useParams, useRouteMatch } from "react-router-dom";
import ProductsPage from "../components/TypeProduct/TypeProduct";
const TypeProduct = () => {
    const params = useParams();
    const route = useRouteMatch();
  return (
    <>
        <HeaderPage title={`${params.type} Collection`} paths={[
            {
                name: params.type,
                link: route.url
            }
        ]}/>
        <ProductsPage/>
    </>
  );
};

export default TypeProduct;
