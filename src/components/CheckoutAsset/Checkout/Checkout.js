import React, { useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {Col, Row } from "react-bootstrap";
import Container from "../../layout/container/Container";
import Cart from "../Cart/Cart";
import FormPersonal from "../FormPersonal/FormPersonal";
import styles from "./Checkout.module.scss";
import { useSelector } from "react-redux";
import useInterval from "../../../hook/use-interval";
import { CSSTransition } from "react-transition-group";
import FixLayout from "../../FixLayout/FixLayout";
import { SHOP } from "../../link/link";
import ReactDOM from "react-dom";
import Overlay from "../../overlay/Overlay";
import queryString from 'query-string';
import {Button} from '@material-ui/core';
import useMedia from '../../../hook/use-media';
const Checkout = () => {
  const isAuth = useSelector(state => state.isAuth);
  const user = useSelector((state) => state.user.user?.user);
  const isMobile = useMedia('(max-width: 768px)');
  const cart = useSelector((state) => state.cart);
  const isLoadingCart = useSelector(state => state.cart.isLoading);
  const { time } = useInterval(5, cart.length === 0);
  const history = useHistory();
  const location = useLocation();
  const parseString = useMemo(() => {
    const search = location.search;
    const parse = queryString.parse(search);
    return parse;
  }, [location.search]);
  useEffect(() => {
    if (cart.length > 0) {
      return;
    }
    // if (time === 0) {
    //   history.push(SHOP);
    // }
  }, [cart, history]);
  const _renderMessageError = () => {
    setTimeout(() => {
      return (
        <CSSTransition
          in={cart.length === 0 && time > 0 && !isLoadingCart}
          unmountOnExit
          mountOnEnter
          classNames="scale-fix"
          timeout={750}
        >
          <>
            <FixLayout>
              <div className="text-center">
                <p>Sorry, we can't checkout, your cart is empty</p>
                <p>You will be redirect to shop after {time} seconds</p>
              </div>
            </FixLayout>
            {ReactDOM.createPortal(
              <Overlay />,
              document.getElementById("portal__pd")
            )}
          </>
        </CSSTransition>
      )
    }, 500);
    // setTimeout to ignore error of loading cart
  };

  return (
    <Container>
      <form>
        <Row className={`${styles["user--infor"]}`}>
          <Col xs={12} sm={12} md={6} lg={6} className={styles.person}>
            <h3 className="text-center">Personal Information</h3>
            <FormPersonal />
            {isMobile && <Button variant="contained" className={`w-100 ${styles.button}`}>Checkout</Button>}
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3 className="text-center">Your Cart</h3>
            {/* {_renderMessageError()} */}
            <Cart cart={cart} isLoadingCart={isLoadingCart}/>
            {!isMobile && <Button variant="contained" className={`w-100 ${styles.button}`}>Checkout</Button>}
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Checkout;
