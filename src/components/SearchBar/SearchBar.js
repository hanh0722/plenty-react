import React from "react";
import Input from "../input/Input";
import styles from "./SearchBar.module.scss";
import useInput from "../hook/use-input";
import CloseButton from "../UI/CloseButton";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { hamburgerActions } from "../store/hamburgerSlice";
import Overlay from "../overlay/Overlay";
import ReactDOM from "react-dom";
import SearchItems from "../SearchItems/SearchItems";
import { Container } from "react-bootstrap";
const SearchBar = ({ isShowed }) => {
  const {
    valid,
    value,
    changeInputHandler,
    touchedInputHandler,
    isTouched,
    resetHandler,
  } = useInput((value) => value.trim().length > 0);
  const dispatch = useDispatch();
  const changeLayoutHandler = () => {
    dispatch(hamburgerActions.searchSlide());
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <CSSTransition
      in={isShowed}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="slide"
    >
      <>
        <form onSubmit={submitHandler} className={styles.container}>
          <Container>
            <div className={`${styles["line__box"]} w-100 p-20`}>
              <div
                className={`d-flex justify-content-between align-items-center ${styles.row}`}
              >
                <p>Search our store...!</p>
                <CloseButton onClick={changeLayoutHandler} />
              </div>
              <Input
                input={{
                  placeholder: "Search Products...",
                  onChange: changeInputHandler,
                  onBlur: touchedInputHandler,
                  value: value,
                }}
                hasValue={value.trim().length > 0}
                setValueHandler={resetHandler}
              />
              {!valid && isTouched && (
                <p className="error__text">Searching box is empty!</p>
              )}
            </div>
            <SearchItems />
          </Container>
        </form>
        {ReactDOM.createPortal(<Overlay />, document.getElementById("bg__ol"))}
      </>
    </CSSTransition>
  );
};

export default SearchBar;
