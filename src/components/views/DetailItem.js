import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { HOME_PAGE } from "../link/link";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import { Col, Container, Row } from "react-bootstrap";
//
import p1 from "../image/indoor-1.jpeg";
import p2 from "../image/indoor-2.jpeg";
import p3 from "../image/indoor-3.jpeg";
import p4 from "../image/indoor-4.jpeg";
// fake image data
import styles from "../styles/DetailItem.module.scss";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart";
import ReactDOM from "react-dom";
import Overlay from "../overlay/Overlay";
import { CSSTransition } from "react-transition-group";
import FixLayout from "../FixLayout/FixLayout";
import BoxInput from "../FixLayout/BoxInput/BoxInput";
import FormContact from "../FormContact/FormContact";
import Methods from "../Detail/Methods/Methods";
import Delivery from "../Detail/LayoutDelivery/Delivery";
import MoreDetail from "../Detail/MoreDetail/MoreDetail";
import ListImage from "../ListImage/ListImage";
import LinkCheckOut from "../ListImage/LinkCheckout/LinkCheckout";
import useScroll from "../hook/use-scroll";
import useQuantity from "../hook/use-quantity";
const DetailItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [changeLayout, setChangeLayout] = useState(false);
  const [product, setProduct] = useState({});
  const [content, setContent] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const route = useRouteMatch();
  const inputRef = useRef();
  const isValid = useScroll(100);
  const { incrementHandler, decrementHandler, quantity, setQuantity } =
    useQuantity(1);
  useEffect(() => {
    const transformParams = params.name.split("-");
    const nameProduct = transformParams.join(" ");
    setTimeout(() => {
      const getDataDummy = DUMMY_DATA.find((item) => {
        return item.name.toLowerCase().toString() === nameProduct.toString();
      });
      setProduct(getDataDummy);
    }, 500);
  }, [params.name]);
  useEffect(() => {
    // update the value of copyboard
  }, []);
  const addCartHandler = () => {
    dispatch(CartActions.showCartHandler());
    dispatch(
      CartActions.addToCartHandler({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        quantity: quantity,
        price: product.price,
      })
    );
  };
  const changeLayoutHandler = () => {
    setChangeLayout(false);
  };
  const getCopyHandler = () => {
    navigator.clipboard.writeText(inputRef.current.value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <>
      <BreadCrumb>
        <Link to={HOME_PAGE}>
          Home <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to={`/products/${product.type}`}>
          {product.type} <FontAwesomeIcon icon={faAngleRight} />
        </Link>
        <Link to={route.url}>{product.name}</Link>
      </BreadCrumb>
      <Container className={styles.container}>
        <Row className={`${styles.row} justify-content-around`}>
          <Col xs={12} sm={12} md={6} lg={5} className={styles.image}>
            <ListImage images={[p1, p2, p3, p4]} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={`${styles["col__content"]}`}
          >
            <div
              className={`${styles.title} d-flex justify-content-between align-items-center`}
            >
              <h4>{product.name}</h4>
              <div
                className={`${styles.wishlist} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <p className={styles.price}>Price: $16.00</p>
            <p className={styles["quantity__title"]}>Quantity: {quantity}</p>
            <p className={styles["quantity__title"]}>Type: {product.type}</p>
            <div
              className={`${styles["add__to__cart"]} d-flex justify-content-between align-items-center`}
            >
              <div
                className={`${styles.quantity} d-flex justify-content-center align-items-center`}
              >
                <div onClick={decrementHandler} className={styles.btn}>
                  -
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(event) => setQuantity(+event.target.value)}
                  />
                </div>
                <div onClick={incrementHandler} className={styles.btn}>
                  +
                </div>
              </div>
              <div className={styles["btn__add"]}>
                <Button onClick={addCartHandler} variant="outlined">
                  Add To Cart
                </Button>
              </div>
            </div>
            <div className={`${styles.space} w-100`}>
              <Link to="/">
                <Button className="w-100" variant="contained">
                  Buy it now!
                </Button>
              </Link>
            </div>
            <Methods
              setContent={setContent}
              setChangeLayout={setChangeLayout}
            />
            <Delivery />
          </Col>
        </Row>
        <MoreDetail />
      </Container>
      <CSSTransition
        timeout={700}
        classNames="go-up"
        unmountOnExit
        mountOnEnter
        in={isValid}
      >
        <LinkCheckOut url={p1} />
      </CSSTransition>
      <CSSTransition
        in={changeLayout}
        unmountOnExit
        mountOnEnter
        timeout={800}
        classNames="fade__box"
      >
        <>
          <FixLayout>
            {content === "share" && (
              <BoxInput
                onClick={changeLayoutHandler}
                input={{
                  type: "text",
                  defaultValue: window.location.href,
                }}
                ref={inputRef}
                copyBoard={getCopyHandler}
                isCopied={isCopied}
              />
            )}
            {content === "ask" && <FormContact onClick={changeLayoutHandler} />}
          </FixLayout>
          {ReactDOM.createPortal(
            <Overlay
              onClick={() => {
                changeLayoutHandler();
                setIsCopied(false);
              }}
              style={{ zIndex: "20" }}
            />,
            document.getElementById("portal__pd")
          )}
        </>
      </CSSTransition>
    </>
  );
};

export default DetailItem;
