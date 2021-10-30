import React from "react";
import styles from "./CategoriesBlog.module.scss";
import { Link } from "react-router-dom";
const CategoriesBlog = () => {
  return (
    <div className={styles.category}>
      <h5>Categories</h5>
      <ul>
        <li>
          <Link to="/">All Products</Link>
        </li>
        <li>
          <Link to="/">All Products</Link>
        </li>
        <li>
          <Link to="/">All Products</Link>
        </li>
        <li>
          <Link to="/">All Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesBlog;
