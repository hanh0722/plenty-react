import React from 'react';
import styles from './LayoutList.module.scss';
const LayoutList = props =>{
    return (
        <div className={`${props.className} ${styles.layout} ${props.isClicked && styles.back}`}>
            {props.children}
        </div>
    )
}

export default LayoutList;