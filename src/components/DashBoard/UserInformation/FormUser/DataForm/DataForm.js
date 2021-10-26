import React from "react";
import BoxContainer from "../../../UI/BoxContainer/BoxContainer";
import Input from "../../../../SignInAsset/Input/Input";
import styles from "../../../../SignInAsset/LoginForm/Form.module.scss";
import classes from "./DataForm.module.scss";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignature,
  faMobileAlt,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import GetListCountry from "../../../../GetListCountry/GetListCountry";
import { useDispatch } from "react-redux";
import { cityActions } from "../../../../store/GetCity/get-city";
const DataForm = () => {
  const dispatch = useDispatch();
  const getCityFromList = (city) => {
    dispatch(cityActions.changeCountry(city));
  };
  return (
    <BoxContainer>
      <div className={`${styles.form} ${classes.form}`}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Input
              functionCondition={(value) => value.trim().length > 0}
              input={{
                id: "name",
                autoComplete: "off",
                placeholder: "Name",
              }}
              label={"Name"}
              error={"Name is not allowed to be emptied"}
            >
              <FontAwesomeIcon icon={faSignature} />
            </Input>
            <Input
              functionCondition={(value) =>
                value.trim().length >= 10 && value.trim().length <= 11
              }
              input={{
                id: "phone",
                autoComplete: "off",
                placeholder: "Mobile Phone",
              }}
              label="Phone Number"
              error="Mobile phone must be at least 10 numbers"
            >
              <FontAwesomeIcon icon={faMobileAlt} />
            </Input>
            <GetListCountry getCityHandler={getCityFromList} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Input
              className={styles.address}
              functionCondition={(value) => value.trim().length >= 0}
              input={{
                id: "Address",
                autoComplete: "off",
                placeholder: "Address",
              }}
              label={"Address"}
            >
              <FontAwesomeIcon icon={faMap} />
            </Input>
            <Input
              functionCondition={(value) => value.trim().length >= 0}
              input={{
                id: "City",
                autoComplete: "off",
                placeholder: "City",
              }}
              label="City"
            >
              <FontAwesomeIcon icon={faCity} />
            </Input>
          </Col>
        </Row>
      </div>
    </BoxContainer>
  );
};

export default DataForm;
