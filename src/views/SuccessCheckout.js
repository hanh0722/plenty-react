import React from "react";
import Container from "../components/layout/container/Container";
import styles from '../styles/SuccessCheckout.module.scss';
import { Button } from '@material-ui/core';
import { useSelector } from "react-redux";
const SuccessCheckout = () => {
    const state = useSelector(state => state.orderURL?.url);
    return (
        <Container>
            <div className={`text-center ${styles.container}`}>
                <img src={'/success.png'} alt="" />
                <p>Checkout successfully, we will deliver after 3-5 days processing</p>
                <p className="pt-3">Thank you for choosing us!</p>
                {state && <div className="pt-3"><a href={state} target={"_blank"} rel="noreferrer"><Button variant="outlined">Your bill</Button></a></div>}
            </div>
        </Container>
    )
}

export default SuccessCheckout;