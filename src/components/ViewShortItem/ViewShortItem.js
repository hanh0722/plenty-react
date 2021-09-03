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
const ViewShortItem = () => {
  const [valueItem, setValueItem] = useState(null);
  const [quantityItem, setQuantityItem] = useState(1);
  const itemId = useSelector((state) => state.product.idProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!itemId) {
      setValueItem(null);
      return;
    }
    setTimeout(() => {
      const value = DUMMY_DATA.find((item) => item.id === itemId);
      setValueItem(value);
    }, 500);
    // find in DB and fetch from server
    // mongoDB: find(_id: new mongodb.objectId(id))
  }, [itemId]);
  const changeQuantityHandler = event => {
      setQuantityItem(event.target.value);
  }
  return (
    //   problem with animation because <div> render nothing in here
    <>
      <div>
        <CSSTransition
          in={valueItem !== null}
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
                  <div>
                    <Link to="/">{valueItem.name}</Link>
                    <p>Price: ${valueItem.price}</p>
                    <p className={styles.content}>
                      The Iconic Silhouette he garments labelled as Committed
                      are products that have been produced
                    </p>
                    <p className={styles.type}>Style: {valueItem.type}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className={`${styles.quantity} d-flex justify-content-center align-items-center`}
                    >
                      <div>-</div>
                      <input onChange={changeQuantityHandler} value={quantityItem} type="number" min="1" max="100" />
                      <div>+</div>
                    </div>
                    <Button onClick={() => dispatch(ProductActions.removeProduct())} variant="contained">Add To Cart</Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
        {valueItem &&
          ReactDOM.createPortal(
            <Overlay onClick={() => dispatch(ProductActions.removeProduct())} style={{ zIndex: "20" }} />,
            document.getElementById("product__bg")
          )}
      </div>
    </>
  );
};

export default React.memo(ViewShortItem);
