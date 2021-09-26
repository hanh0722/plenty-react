import React from "react";
import Grid from "../UI/Grid/Grid";
import Container from "../layout/container/Container";
import Product from "../Product/Product";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import nonAccentVietnamese from "../removeUnicode/removeUnicode";
import { SHOP } from "../link/link";
const ProductsPage = () => {
  return (
    <Container>
      <Grid>
        {DUMMY_DATA.map((item) => {
          return (
            <Product
              key={item.id}
              imageUrl={item.imageUrl}
              price={item.price}
              name={item.name}
              link={`${SHOP}/${nonAccentVietnamese(item.name)}`}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
