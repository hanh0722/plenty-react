import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FormUser from "../FormUser/FormUser";
import DataForm from "../FormUser/DataForm/DataForm";
import { useSelector } from "react-redux";
import useAxios from "../../../../hook/use-axios";
import { updateUserInformation } from "../../../../config/url";
const FormUploadUser = () => {
  const user = useSelector((state) => state.user.user?.user);
  const token = useSelector(state => state.isAuth.token);
  const { isLoading, error, data, fetchDataFromServer, percentDownload, percentLoading } = useAxios();
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const [avatar, setAvatar] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (user) {
      setCountry(user?.basic_information.country);
      setCity(user?.basic_information.city);
    }
  }, [user]);
  const updateUserHandler = (event) => {
    if(!user){
      return;
    }
    event.preventDefault();
    fetchDataFromServer({
      url: updateUserInformation,
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      data: {
        avatar: avatar,
        name: nameRef.current.value,
        phone_number: phoneRef.current.value,
        country: country?.country,
        address: addressRef.current.value,
        email: user.email,
        city: city?.name,
        flag: country?.flag,
        city_code: city?.state_code
      }
    })
  };
  console.log(user);
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
            }}
            setCountry={setCountry}
            setCity={setCity}
            city={city}
            onSubmit={updateUserHandler}
          />
        </Col>
      </Row>
    </form>
  );
};

export default FormUploadUser;
