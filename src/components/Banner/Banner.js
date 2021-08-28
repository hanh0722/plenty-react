import React from 'react';
import banner from '../image/banner.jpeg';
import styles from './Banner.module.scss';
import { Col } from 'react-bootstrap';
const Banner = () => {
    return(
        <Col className={styles.container} xs={12} sm={12} md={6} lg={6}>
            <div className={styles.banner}>
                <img src={banner} alt='banner'/>
            </div>
        </Col>
    )
}

export default Banner;