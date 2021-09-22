import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
const HeaderPage = (props) => {
  return (
    <BreadCrumb>
      <h2>{props.title}</h2>
      <Link to="/">
        Home <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      {props.paths.map((path, index) => {
        return (
          <Link key={path} to={path.link}>
            {path.name}
            {props.paths.length - 1 !== index && (
              <FontAwesomeIcon icon={faAngleRight} />
            )}
          </Link>
        );
      })}
    </BreadCrumb>
  );
};

export default HeaderPage;
