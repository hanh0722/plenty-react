import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ViewShortItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import { CSSTransition } from "react-transition-group";
import Overlay from "../overlay/Overlay";
import ReactDOM from "react-dom";
import "../CSSTransition/CSSTransition.scss";
import { ProductActions } from "../store/Product";
import { CartActions } from "../store/cart";
const ViewShortItem = () => {
  const [valueItem, setValueItem] = useState(null);
  const [quantityItem, setQuantityItem] = useState(1);
  const itemId = useSelector((state) => state.product.idProduct);
  const showModel = useSelector(state => state.product.showModel);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!itemId) {
      setValueItem(null);
      return;
    }
    setTimeout(() => {
      const value = DUMMY_DATA.find((item) => item.id === itemId);
      setValueItem(value);
      setQuantityItem(1);
    }, 500);
    // find in DB and fetch from server
    // mongoDB: find(_id: new mongodb.objectId(id))
  }, [itemId]);
  const changeQuantityHandler = (event) => {
    setQuantityItem(event.target.value);
  };
  const decreseItemHandler = () => {
    if (quantityItem === 1) {
      return;
    }
    setQuantityItem((prevState) => prevState - 1);
  };
  const addItemToCartHandler = event => {
    event.preventDefault();
    dispatch(CartActions.addToCartHandler({
      ...valueItem,
      quantity: quantityItem
    }))
    dispatch(CartActions.showCartHandler())
    resetHandler();
  }
  const resetHandler = () => {
    dispatch(ProductActions.setShowModalHandler())
    setTimeout(() => {
      dispatch(ProductActions.removeProduct())
    }, 500)
  }
  return (
    //   problem with animation because <div> render nothing in here
    <>
      <form onSubmit={addItemToCartHandler}>
        <CSSTransition
          in={showModel}
          timeout={500}
          unmountOnExit
          mountOnEnter
          classNames={"view"}
        >
          <div className={styles.view}>
            {valueItem && (
              <>
                <div className={styles.image}>
                  <img src={valueItem.imageUrl} alt="" />
                </div>
                <div
                  className={`${styles["product__info"]} d-flex flex-column justify-content-between`}
                >
                  <div className={styles["content__product"]}>
                    <Link to="/">{valueItem.name}</Link>
                    <p>Price: ${valueItem.price}</p>
                    <p className={styles.content}>
                      The Iconic Silhouette he garments labelled as Committed
                      are products that have been produced
                    </p>
                    <p className={styles.type}>Style: {valueItem.type}</p>
                  </div>
                  <div
                    className={`d-flex justify-content-between align-items-center ${styles.row}`}
                  >
                    <div
                      className={`${styles.quantity} d-flex justify-content-center align-items-center`}
                    >
                      <div onClick={decreseItemHandler}>-</div>
                      <input
                        onChange={changeQuantityHandler}
                        value={quantityItem}
                        type="number"
                        min="1"
                        max="100"
                      />
                      <div
                        onClick={() =>
                          setQuantityItem((prevState) => prevState + 1)
                        }
                      >
                        +
                      </div>
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
        {showModel &&
          ReactDOM.createPortal(
            <Overlay
              onClick={resetHandler}
              style={{ zIndex: "20" }}
            />,
            document.getElementById("product__bg")
          )}
      </form>
    </>
  );
};

export default React.memo(ViewShortItem);
