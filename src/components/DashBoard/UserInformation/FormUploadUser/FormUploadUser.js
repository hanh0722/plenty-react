import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FormUser from "../FormUser/FormUser";
import DataForm from "../FormUser/DataForm/DataForm";
import { useSelector } from "react-redux";
const FormUploadUser = () => {
  const user = useSelector((state) => state.user.user?.user);
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const [avatar, setAvatar] = useState(null);
  const updateUserHandler = (event) => {
    console.log(event);
    event.preventDefault();
  };
  return (
    <form onSubmit={updateUserHandler}>
      <Row>
        <Col xs={12} sm={12} md={5} lg={5}>
          <FormUser user={user} setAvatar={setAvatar} />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <DataForm
            forwardAllRef={{
              nameRef: nameRef,
              phoneRef: phoneRef,
              addressRef: addressRef,
              cityRef: cityRef,
              countryRef: countryRef,
            }}
            onSubmit={updateUserHandler}
          />
        </Col>
      </Row>
    </form>
  );
};

export default FormUploadUser;
