import React from "react";
import RightSide from "../RightSide/RightSide";
import SideBar from "../Sidebar/Sidebar";
import styles from './Container.module.scss';

const Container = props => {
    return(
        <div className={styles.container}>
            <SideBar/>
            <RightSide>
                {props.children}
            </RightSide>
        </div>
    )
}

export default Container;