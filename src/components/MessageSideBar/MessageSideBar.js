import React from 'react';
import styles from './MessageSideBar.module.scss';
import { useSelector } from 'react-redux';
const MessageSideBar = props => {
    const isShowed = useSelector(state => state.notifyMessage);
    return(
        <div className={`${styles.message} ${isShowed.showed && styles['back--message']}`}>
            {isShowed.message}
            {props.children}
        </div>
    )
}

export default MessageSideBar;