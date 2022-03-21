import React, { useEffect } from "react";
import Welcome from "../../components/DashBoard/Basic/Welcome/Welcome";
import Container from "../../components/DashBoard/layout/Container";
import Grid from "../../components/DashBoard/UI/Grid/Grid";
import { useSelector } from "react-redux";
import SwiperBlog from "../../components/DashBoard/Basic/SwiperBlog/SwiperBlog";
import UserChart from "../../components/DashBoard/UserChart/UserChart";
import useAxios from "../../hook/use-axios";
import { getBillsOfUser } from "../../config/url";
const Basic = () => {
  const { user, isLoading } = useSelector(state => state.user);
  const token = useSelector(state => state.isAuth.token);
  const { isLoading: isLoadingChart, data, error, fetchDataFromServer } = useAxios();
  useEffect(() => {
    if (!token) {
      return;
    }
    fetchDataFromServer({
      url: getBillsOfUser,
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }, [fetchDataFromServer, token]);
  return (
    <Container>
      <Grid>
        <Welcome user={user} isLoading={isLoading} />
        <SwiperBlog />
      </Grid>
      {!isLoadingChart && data && <UserChart data={data?.data?.invoices}/>}
    </Container>
  );
};

export default Basic;
