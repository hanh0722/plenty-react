import React from "react";
import usePagination from "../../hook/use-pagination";
import { Link } from "react-router-dom";
import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, perPage, totalPage, className }) => {
  const {
    goToNextPage,
    goToPrevPage,
    hasNextPage,
    hasPrevPage,
    renderPagination,
    curPage,
  } = usePagination(currentPage, perPage, totalPage);
  return (
    <ul
      className={`d-flex justify-content-center align-items-center ${styles.pagination} ${className}`}
    >
      <li
        onClick={goToPrevPage}
        className={`${styles.prev} ${!hasPrevPage && styles.disabled}`}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-double-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-chevron-double-left fa-w-14 fa-3x"
        >
          <path
            fill="currentColor"
            d="M390.3 473.9L180.9 264.5c-4.7-4.7-4.7-12.3 0-17L390.3 38.1c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L246.4 256l180.7 181.1c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0zm-143 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L86.4 256 267.1 74.9c4.7-4.7 4.7-12.3 0-17l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L20.9 247.5c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0z"
            className=""
          ></path>
        </svg>
      </li>
      {renderPagination.map((item) => {
        return (
          <li className={curPage === item ? styles.active : ""} key={item}>
            <Link to={`?page=${item}`}>{item}</Link>
          </li>
        );
      })}
      <li
        onClick={goToNextPage}
        className={`${styles.next} ${!hasNextPage && styles.disabled}`}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-chevron-double-right fa-w-14 fa-3x"
        >
          <path
            fill="currentColor"
            d="M57.7 38.1l209.4 209.4c4.7 4.7 4.7 12.3 0 17L57.7 473.9c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L201.6 256 20.9 74.9c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0zm143 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L361.6 256 180.9 437.1c-4.7 4.7-4.7 12.3 0 17l19.8 19.8c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17L217.7 38.1c-4.7-4.7-12.3-4.7-17 0z"
            className=""
          ></path>
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
