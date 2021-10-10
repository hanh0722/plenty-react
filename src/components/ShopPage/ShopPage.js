import React from "react";
import { useRouteMatch } from "react-router-dom";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import Product from "../Product/Product";
import nonAccentVietnamese from "../removeUnicode/removeUnicode";

const ShopPage = () => {
  const route = useRouteMatch();
  return DUMMY_DATA.map((product) => {
      const path = nonAccentVietnamese(product.name);
    return (
        <Product
          key={product.id}
          imageUrl={product.imageUrl}
          price={product.price}
          name={product.name}
          id={product.id}
          link={`${route.path}/${path}`}
        />
    );
  });
};

export default ShopPage;
