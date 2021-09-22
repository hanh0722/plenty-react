import React from "react";
import LineCart from "./LineCart/LineCart";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faCarrot,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout/Layout";
import useToggle from "../../hook/use-toggle";
import { CSSTransition } from "react-transition-group";
import "./Transition.scss";
import { Button } from "@material-ui/core";
import Voucher from "./Voucher/Voucher";
import NorInput from "../../input/NormalInput/NorInput";
import useInput from "../../hook/use-input";
const Cart = () => {
  const { toggle, changeToggleHandler } = useToggle();
  const { value, valid, isTouched, changeInputHandler, touchedInputHandler } =
    useInput((value) => value.trim().length > 0);
  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.line}`}
      >
        <p className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCartArrowDown} />
          <span>Show your cart</span>
          <FontAwesomeIcon icon={faCarrot} />
        </p>
        <p>$50.00</p>
      </div>
      <div className={styles.Cart}>
        <LineCart />
      </div>
      <Layout>
        <span>Subtotal:</span>
        <span>$50.00</span>
      </Layout>
      <Layout>
        <span>Voucher:</span>
        {!toggle && (
          <Button
            onClick={changeToggleHandler}
            variant="contained"
            className={styles.btn}
          >
            Apply Voucher
          </Button>
        )}
        <CSSTransition
          in={toggle}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames="open--voucher"
        >
          <Layout>
            <div className={styles.invalid}>
              <NorInput
                input={{
                  type: "text",
                  value: value,
                  onChange: changeInputHandler,
                  onBlur: touchedInputHandler,
                  autoComplete: "off",
                  placeholder: "Voucher...",
                }}
                className={`${styles.voucher} ${
                  !valid && isTouched && "error__input"
                }`}
              >
                <div
                  className={`${styles["accept--btn"]} d-flex justify-content-center align-items-center`}
                >
                  <FontAwesomeIcon icon={faTag} />
                </div>
              </NorInput>
              {!valid && isTouched && (
                <p className={`${styles.error} error__text`}>Voucher is empty!</p>
              )}
            </div>
          </Layout>
        </CSSTransition>
        {/* {toggle && <span>20%</span>} */}
      </Layout>
      <Layout>
        <span>Total:</span>
        <span>$40.00</span>
      </Layout>
    </>
  );
};

export default React.memo(Cart);
