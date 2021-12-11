import React, { useEffect } from "react";
import Input from "../input/Input";
import styles from "./SearchBar.module.scss";
import useInput from "../../hook/use-input";
import CloseButton from "../UI/CloseButton";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { hamburgerActions } from "../store/hamburgerSlice";
import Overlay from "../overlay/Overlay";
import ReactDOM from "react-dom";
import SearchItems from "../SearchItems/SearchItems";
import { Container } from "react-bootstrap";
import { Button } from "@material-ui/core";
import useAxios from "../../hook/use-axios";
import { getProductByKeyword } from "../../config/product";
import RenderSkeletonProduct from "../../util/RenderSkeletonProduct";
import Grid from "../UI/Grid/Grid";
import { useState } from "react";
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
  const { isLoading, data, error, fetchDataFromServer } = useAxios();
  const [isTyping, setIsTyping] = useState(false);
  const changeLayoutHandler = () => {
    dispatch(hamburgerActions.searchSlide());
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
      fetchDataFromServer({
        url: getProductByKeyword,
        params: {
          search: value,
          limit: 5
        }
      });
    }, 1000);
    return () => {
      clearTimeout(timeout);
      setIsTyping(true);
    }
  }, [fetchDataFromServer, value]);
  useEffect(() => {
    if (isShowed) {
      document.body.setAttribute('data-sp', 'open');
    } else {
      document.body.removeAttribute('data-sp');
    }
  }, [isShowed]);
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
          <Container className={styles["grid__layout"]} fluid>
            <div className={`${styles["line__box"]} w-100 p-20`}>
              <div
                className={`d-flex justify-content-between align-items-center ${styles.row}`}
              >
                <p>Search our store...!</p>
                <CloseButton
                  onClick={() => {
                    changeLayoutHandler();
                    resetHandler();
                  }}
                />
              </div>
              <Input
                input={{
                  placeholder: "Search Products...",
                  onChange: changeInputHandler,
                  onBlur: touchedInputHandler,
                  value: value,
                  className: !valid && isTouched ? "error__input" : "",
                }}
                hasValue={value.trim().length > 0}
                setValueHandler={resetHandler}
              />
              {!isLoading && error && <p className="error__text text-center">Cannot get data</p>}
              {!isLoading && data && !isTyping && data?.data?.results?.length === 0 && (
                <p className="error__text text-center">
                  No result for <span>"{value}"</span>
                </p>
              )}
            </div>
            <div className={styles["flow__items"]}>

              <div className={`${styles.items}`}>
                <Grid>
                  {(isLoading || isTyping) && RenderSkeletonProduct(5)}
                  {data && !isLoading && !isTyping && data?.data?.results?.length > 0 &&
                    data?.data?.results?.map((product, index) => {
                      if (index <= 5) {
                        return (
                          <SearchItems
                            key={product._id}
                            type={product?.type_product}
                            price={product?.last_price}
                            name={product?.title}
                            imageUrl={product?.images?.urls[0]}
                            id={product._id}
                            resetHandler={resetHandler}
                          />
                        );
                      }
                      return "";
                    })}
                </Grid>
              </div>
              {!isLoading && !isTyping && data && data?.data?.matched_products > 5 && (
                <div className={`text-center pt-4`}>
                  <Button
                    className="button"
                    variant="contained"
                  >
                    More Results!
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </form>
        {ReactDOM.createPortal(
          <Overlay
            onClick={() => {
              changeLayoutHandler();
              resetHandler();
            }}
          />,
          document.getElementById("bg__ol")
        )}
      </>
    </CSSTransition>
  );
};

export default SearchBar;
