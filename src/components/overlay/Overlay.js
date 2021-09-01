import React from 'react';
import styles from './Overlay.module.scss';
const Overlay = (props) =>{
    return(
        <div {...props} className={styles.overlay} style={props.style}></div>
    )
}

export default Overlay;