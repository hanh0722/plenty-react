import React from "react";
import { Link } from "react-router-dom";
import styles from './InvoiceLayout.module.scss';
const InvoiceLayout = ({total, url, date}) => {
  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.container}`}>
      <p>{new Date().toLocaleDateString("vi-vn")}</p>
      <p>${total}</p>
      <a href={url} target={"_blank"} rel="noreferrer">PDF</a>
    </div>
  );
};

export default InvoiceLayout;
