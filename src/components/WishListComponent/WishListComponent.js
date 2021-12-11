import React from 'react';
import styles from './WishListComponent.module.scss';
import Product from '../Product/Product';
const WishListComponent = ({imageUrl, url, price, name, id, isWishList}) => {
    return(
        <div className={styles.product}>
           <Product isWishList={isWishList} imageUrl={imageUrl} id={id} link={url} name={name} price={price} />
        </div>
    )
}

export default WishListComponent;