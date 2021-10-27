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
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import GetListCountry from "../../../../GetListCountry/GetListCountry";
import { useDispatch, useSelector } from "react-redux";
import { cityActions } from "../../../../store/GetCity/get-city";
import GetCityByCountry from "../../../../GetListCountry/GetCityByCountry/GetCityByCountry";
import { Button } from "@material-ui/core";
import Skeleton from "../../../../UI/LoadingSkeleton/Skeleton";
const DataForm = ({ onSubmit, forwardAllRef }) => {
  const dispatch = useDispatch();
  const getCityFromList = (city) => {
    dispatch(cityActions.changeCountry(city));
  };

  const user = useSelector((state) => state.user.user?.user);
  return (
    <BoxContainer>
      <div className={`${styles.form} ${classes.form}`}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            {!user && <Skeleton times={25} containerSkeleton={classes['skeleton-container']} />}
            {user && (
              <>
                <Input
                  ref={forwardAllRef.nameRef}
                  functionCondition={(value) => value.trim().length >= 0}
                  input={{
                    id: "name",
                    autoComplete: "off",
                    placeholder: "Name",
                  }}
                  initialValue={user.name}
                  label={"Name"}
                  error={"Name is not allowed to be emptied"}
                >
                  <FontAwesomeIcon icon={faSignature} />
                </Input>
                <Input
                  ref={forwardAllRef.phoneRef}
                  functionCondition={(value) => value.trim().length >= 0}
                  input={{
                    id: "phone",
                    autoComplete: "off",
                    placeholder: "Mobile Phone",
                    minLength: 10,
                    maxLength: 11,
                  }}
                  label="Phone Number"
                  initialValue={user.phone}
                  error="Mobile phone must be at least 10 numbers"
                >
                  <FontAwesomeIcon icon={faMobileAlt}/>
                </Input>
                <GetListCountry getCityHandler={getCityFromList} initialCountry={user.basic_information.country}/>
              </>
            )}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            {!user && <Skeleton times={25} containerSkeleton={classes['skeleton-container']}/>}
            {user && (
              <>
                <Input
                  ref={forwardAllRef.addressRef}
                  className={styles.address}
                  functionCondition={(value) => value.trim().length >= 0}
                  input={{
                    id: "Address",
                    autoComplete: "off",
                    placeholder: "Address",
                  }}
                  label={"Address"}
                  initialValue={user.basic_information.address}
                >
                  <FontAwesomeIcon icon={faMap} />
                </Input>
                <Input
                  functionCondition={(value) => value.trim().length >= 0}
                  input={{
                    id: "email",
                    autoComplete: "off",
                    placeholder: "Email",
                    readOnly: true,
                  }}
                  label="Email"
                  initialValue={user.email}
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </Input>
                <GetCityByCountry initialCity={user.basic_information.city}/>
              </>
            )}
          </Col>
        </Row>
        {user && (
          <Button
            onClick={onSubmit}
            variant="contained"
            className={`w-100 mt-5 ${classes["btn-save"]}`}
          >
            Save Information
          </Button>
        )}
      </div>
    </BoxContainer>
  );
};

export default DataForm;
