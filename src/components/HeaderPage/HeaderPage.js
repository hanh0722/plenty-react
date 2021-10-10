import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
const HeaderPage = ({title, paths}) => {
  return (
    <BreadCrumb>
      <h2>{title}</h2>
      <Link to="/">
        Home <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      {paths.map((path, index) => {
        return (
          <Link key={index} to={path.link}>
            {path.name}
            {paths.length - 1 !== index && (
              <FontAwesomeIcon icon={faAngleRight} />
            )}
          </Link>
        );
      })}
    </BreadCrumb>
  );
};

export default React.memo(HeaderPage);
