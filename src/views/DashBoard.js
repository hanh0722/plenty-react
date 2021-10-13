import React from 'react';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { DASHBOARD } from '../components/link/link';
import DashboardMaterial from '../components/DashBoard/DashBoard';
import Container from '../components/DashBoard/layout/Container';
const DashBoardBasic = () => {
    return(
        <>
            <HeaderPage title='Dashboard' paths={[
                {
                    link: DASHBOARD,
                    name: "Dashboard"
                }
            ]}/>
            <Container/>
            <DashboardMaterial/>
        </>
    )
}

export default DashBoardBasic;