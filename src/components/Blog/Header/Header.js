import React from "react";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOME_PAGE, BLOG_PAGE } from "../../link/link";
import { Link } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <BreadCrumb>
        <h2>Blogs</h2>
        <Link to={HOME_PAGE}>
          Home <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to={BLOG_PAGE}>
          Blog <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </BreadCrumb>
    </>
  );
};

export default Header;
