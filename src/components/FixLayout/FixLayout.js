import React from 'react';
import styles from './FixLayout.module.scss';
const FixLayout = props => {
    return(
        <div className={styles.fixed}>
            {props.children}
        </div>
    )
}

export default FixLayout;