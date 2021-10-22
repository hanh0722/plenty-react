import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouteMatch, Redirect, useLocation } from "react-router-dom";
import Product from "../Product/Product";
import nonAccentVietnamese from "../removeUnicode/removeUnicode";
import useAxios from "../../hook/use-axios";
import { getAllProductsFromServer } from "../../config/product";
import { NOT_FOUND } from "../link/link";
import Grid from "../UI/Grid/Grid";
const ShopPage = () => {
  const { isLoading, fetchDataFromServer, error, data } = useAxios();
  const [perPage, setPerPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const location = useLocation();
  const getCurrentPage = useMemo(() => {
    const url = new URLSearchParams(location.search);
    const page = +url.get("page") || 1;
    return page;
  }, [location.search]);
  const route = useRouteMatch();
  useEffect(() => {
    fetchDataFromServer({
      url: getAllProductsFromServer,
      params: {
        page: getCurrentPage,
        perPage: perPage,
      },
    });
  }, [fetchDataFromServer, getCurrentPage, perPage]);
  const _renderLoadingSkeleton = useCallback((number) => {
    const arrayRender = [];
    for (let i = 0; i < number; i++) {
      arrayRender.push(<Product key={i} isLoading={true} />);
    }
    return arrayRender;
  }, []);
  useEffect(() => {
    if (!data) {
      return;
    }
    setTotalPage(data.data.total_product);
  }, [data]);
  return (
    <>
      {!isLoading && error && <Redirect to={NOT_FOUND} />}
      <Grid>
        {isLoading && _renderLoadingSkeleton(perPage)}
        {!isLoading && data && (
          <>
            {data.data.products.map((product) => {
              const path = nonAccentVietnamese(product.title);
              return (
                <Product
                  key={product._id}
                  imageUrl={product.images.urls[0]}
                  price={product.last_price}
                  name={product.title}
                  id={product._id}
                  link={`${route.path}/${path}?id=${product._id}`}
                />
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
};

export default ShopPage;
