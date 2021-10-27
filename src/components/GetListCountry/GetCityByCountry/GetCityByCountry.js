import React, { forwardRef, useEffect, useState } from "react";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import useAxios from "../../../hook/use-axios";
import { postCountryByName } from "../../../config/url";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import useToggle from "../../../hook/use-toggle";
const GetCityByCountry = forwardRef(({ initialCity }, ref) => {
  const { fetchDataFromServer, data, isLoading, error } = useAxios();
  const country = useSelector((state) => state.city.country);
  const [state, setState] = useState(null);
  const { toggle, changeToggleHandler } = useToggle(false);
  useEffect(() => {
    if (!country) {
      return;
    }
    fetchDataFromServer({
      url: postCountryByName,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        country: country,
      },
    });
  }, [country, fetchDataFromServer]);
  const setStateToState = (state) => {
    setState(state);
    changeToggleHandler();
  };
  return (
    <Container
      onClick={changeToggleHandler}
      toggle={toggle}
      isLoading={isLoading}
      error={error}
      value={state ? `${state.name} - ${state.state_code}` : null}
      title="City"
      icon={faCity}
      initialValue={initialCity}
    >
      {!data && (
        <li
          ref={ref}
          className={`text-center h-100 d-flex justify-content-center align-items-center error__text`}
        >
          Please choose country first!
        </li>
      )}
      {data?.data?.data?.states?.map((state) => {
        return (
          <li onClick={() => setStateToState(state)} key={state.name}>
            {state.name} - {state.state_code}
          </li>
        );
      })}
    </Container>
  );
});

export default GetCityByCountry;
