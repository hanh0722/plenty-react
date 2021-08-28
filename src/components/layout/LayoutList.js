import React from 'react';
import styles from './LayoutList.module.scss';
const LayoutList = props =>{
    return (
        <div className={`${props.className} ${styles.layout} ${props.isClicked && styles.back}`}>
            <p onClick={props.setBack} className={styles.icon}><i className="fal fa-arrow-left"></i> Back</p>
            {props.children}
        </div>
    )
}

export default LayoutList;