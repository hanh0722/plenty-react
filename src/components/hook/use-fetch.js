import { useReducer, useCallback } from "react";
import { Type } from "./Type/Type";

const initialState = {
  loading: false,
  error: null,
  data: null,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case Type.LOADING:
      return {
        ...state,
        loading: true,
      };
    case Type.ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case Type.SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};
const useFetch = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const getDataFromServerHandler = useCallback(async (routeConfig) => {
    dispatch({
      type: Type.LOADING,
    });
    try {
      const response = await fetch(routeConfig.url, {
        ...routeConfig.options,
      });
      if (!response.ok) {
        let message = 'Something went wrong, please try again';
        if(routeConfig.message){
          message = routeConfig.message;
        }
        throw new Error(message);
      }
      const data = await response.json();
      dispatch({
        type: Type.SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: Type.ERROR,
        payload: err.message,
      });
    }
  }, []);

  return {
      isLoading: state.loading,
      error: state.error,
      data: state.data,
      getDataFromServerHandler: getDataFromServerHandler
  }
};

export default useFetch;
