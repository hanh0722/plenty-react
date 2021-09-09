import React from "react";
import styles from "./MoreDetail.module.scss";
import p1 from "../../image/indoor-1.jpeg";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { styleDetailActions } from "../../store/style-detail";
import Delivery from '../LayoutDelivery/Delivery';
const MoreDetail = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.detail.content);
  return (
    <div>
      <div
        className={`${styles.content} d-flex justify-content-center align-items-center`}
      >
        <p
          onClick={() => dispatch(styleDetailActions.getIntroduction())}
          className={!content ? styles.active : ''}
        >
          Product Description
        </p>
        <p
          onClick={() => dispatch(styleDetailActions.getShippingAndReturn())}
          className={content ? styles.active : ''}
        >
          Shipping & Returns
        </p>
      </div>
      <Row className={styles.introduce}>
        <Col xs={12} sm={12} md={4} lg={4} className={styles.image}>
          <img src={p1} alt="" />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          className={styles["content__product"]}
        >
          {!content ? (
            <>
              <h4>The Iconic Silhouette</h4>
              <p>
                he garments labelled as Committed are products that have been
                produced using sustainable fibers or processes, reducing their
                environmental impact. Mango's goal is to support the
                implementation of practices more committed to the environment,
                and therefore increase the number of sustainable garments in the
                collection.
              </p>
              <div className={styles["more__detail"]}>
                <ul>
                  <li>Fit for home</li>
                  <li>Reasonable price</li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <p>
                So beautiful you’ll want to show it off, so comfortable you’ll
                forget it’s there. Our 24/7™ Lace Contour Plunge Bra combines
                gorgeous floral lace with sheer overlay straps that hold you in
                and eliminates gaping. Removable pads let you customize you
              </p>
              <Delivery className='none'/>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MoreDetail;
