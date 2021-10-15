import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserIsAuth } from "../../store/IsAuth/is-auth";
import RightSide from "../RightSide/RightSide";
import SideBar from "../Sidebar/Sidebar";
import styles from "./Container.module.scss";
import useFetch from "../../../hook/use-fetch";
import { getUserApi } from "../../../config/url";
import { NOT_FOUND } from "../../link/link";
const Container = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.isAuth.token);
  const { getDataFromServerHandler, data, error, isLoading } =
    useFetch();
  useEffect(() => {
    dispatch(checkUserIsAuth());
  }, [dispatch]);
  useEffect(() => {
    getDataFromServerHandler({
      url: getUserApi,
      options: {
        headers: {
          Authorization: `Bearer ${token || ""}`,
        },
      },
    });
  }, [getDataFromServerHandler, token]);
  return (
    <>
      {!isLoading && error && <Redirect to={NOT_FOUND} />}
      <div className={styles.container}>
        <SideBar isLoading={isLoading} data={data}/>
        <RightSide>{props.children}</RightSide>
      </div>
    </>
  );
};

export default Container;
