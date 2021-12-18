import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "../../layout/container/Container";
import Cart from "../Cart/Cart";
import FormPersonal from "../FormPersonal/FormPersonal";
import styles from "./Checkout.module.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@material-ui/core';
import useMedia from '../../../hook/use-media';
import useAxios from "../../../hook/use-axios";
import { useState } from "react";
import { useEffect } from "react";
import { checkInputIsEmpty } from "../../../util";
import { postCheckoutApi } from "../../../config/checkout";
import { NotifyActions } from "../../store/NotifyAfterLogin/NotifyAfterLogin";
import queryString from 'query-string';
import { SUCCESS_CHECKOUT } from "../../link/link";
import { orderActions } from "../../store/OrderSlice/OrderSlice";
const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, data, error, fetchDataFromServer } = useAxios();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [address, setAddress] = useState('');
  const { isLoggedIn, token } = useSelector(state => state.isAuth);
  const user = useSelector((state) => state.user?.user);
  const isMobile = useMedia('(max-width: 768px)');
  const cart = useSelector((state) => state.cart);
  const isLoadingCart = useSelector(state => state.cart.isLoading);
  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setPhone(user?.phone);
    }
  }, [user]);
  const submitFormHandler = event => {
    event.preventDefault();
    if (!user || !isLoggedIn || !token) {
      return;
    }
    if (!checkInputIsEmpty(name, 0) || !checkInputIsEmpty(email, 0) || !checkInputIsEmpty(phone, 0) || !email.includes('@') || !checkInputIsEmpty(address, 0)) {
      return;
    }
    fetchDataFromServer({
      url: postCheckoutApi,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        note: note
      }
    });
  }
  useEffect(() => {
    if (isLoading) {
      return;
    };
    if (!isLoading && error) {
      dispatch(NotifyActions.showedNotify({
        message: error?.message || "Cannot checkout, please try again",
        code: error?.code || 500
      }))
    }
    if (!isLoading && data) {
      dispatch(orderActions.removeURL());
      const { orderId, url_order } = data.data;
      const query = queryString.stringify({
        order: orderId,
        redirect: true,
        success: true
      });
      dispatch(orderActions.setURL(url_order));
      history.push(`${SUCCESS_CHECKOUT}?${query}`);
    }
  }, [isLoading, error, dispatch, data, history]);
  return (
    <Container>
      <form onSubmit={submitFormHandler} autoComplete="off">
        <Row className={`${styles["user--infor"]}`}>
          <Col xs={12} sm={12} md={6} lg={6} className={styles.person}>
            <h3 className="text-center">Personal Information</h3>
            <FormPersonal user={user} setDataUser={{
              setName,
              setPhone,
              setNote,
              setEmail,
              setAddress
            }} />
            {isMobile && <Button disabled={isLoading} type="submit" variant="contained" className={`w-100 ${styles.button} ${isLoading && styles.disabled}`}>
              {isLoading ? "Solving" : "Checkout"}
            </Button>}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3 className="text-center">Your Cart</h3>
            {/* {_renderMessageError()} */}
            <Cart cart={cart} isLoadingCart={isLoadingCart} />
            {!isMobile && <Button disabled={isLoading} type="submit" variant="contained" className={`w-100 ${styles.button} ${isLoading && styles.disabled}`}>
              {isLoading ? "Solving" : "Checkout"}
            </Button>}
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Checkout;
