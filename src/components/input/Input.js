import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Input.module.scss';
const Input = forwardRef((props, ref) => {
    return (
        <div className={`${props.className}`}>
            <div className={styles.search}>
                <input {...props.input} ref={ref}/>
                <FontAwesomeIcon icon={faSearch}/>
                {props.hasValue && <FontAwesomeIcon onClick={props.setValueHandler} className={styles.close} icon={faTimes}/>}
            </div>
        </div>
    )
})

export default Input;