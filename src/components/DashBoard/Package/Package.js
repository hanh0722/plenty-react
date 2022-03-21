import React from "react";
import CardPackage from './CardPackage/CardPackage';
import Grid from "../UI/Grid/Grid";
import styles from './Package.module.scss';
const Package = () => {
    return (
        <>
            <Grid className={styles.grid}>
                <CardPackage />
            </Grid>
        </>
    )
}

export default Package;