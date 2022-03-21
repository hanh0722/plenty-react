import React from "react";
import styles from './CardPackage.module.scss';
import { Link } from "react-router-dom";

const CardPackage = () => {
    return (
        <Link className={styles.links} to={"/"}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="/logo512.png" alt="" />
                </div>
                <div className={styles.information}>
                    <p className={styles.title}>Name Product</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Type: </p>
                        <div className={styles.price}>
                            <span className={styles.discount}>$50</span>
                            <span className={styles.total}>$40</span>
                        </div>
                    </div>
                </div>
                <span className={styles.time}>
                    Sale
                </span>
            </div>
        </Link>
    )
}

export default CardPackage;