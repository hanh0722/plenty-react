import axios from "axios";
import { useReducer, useCallback } from "react";

const type = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  PROGRESS: "PROGRESS",
  RESET: "RESET",
};
const initialState = {
  isLoading: false,
  percentLoading: 0,
  error: null,
  data: null,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case type.SUCCESS: {
      return {
        ...state,
        error: null,
        data: action.payload,
        isLoading: false,
      };
    }
    case type.ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case type.PROGRESS: {
      return {
        ...state,
        percentLoading: action.payload,
      };
    }
    case type.RESET: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
const useAxios = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const fetchDataFromServer = useCallback(
    async ({ method, url, headers, data }) => {
      try {
        dispatch({
          type: type.RESET,
        });
        dispatch({
          type: type.LOADING,
        });
        const response = await axios({
          method: method ? method : "GET",
          url: url,
          headers: {
            ...headers,
          },
          data: data,
          onUploadProgress: (progressEvent) => {
            console.log(progressEvent.loaded);
            let completePercent = Math.floor(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(completePercent);
            dispatch({
              type: type.PROGRESS,
              payload: completePercent,
            });
          },
        });
        if (response.status >= 400) {
          const error = response || "Cannot fetch data";
          error.statusCode = response.status || 500;
          throw error;
        }
        dispatch({
          type: type.SUCCESS,
          payload: response
        })
      } catch (err) {
        const message = err.message;
        const code = err.statusCode || 500;
        dispatch({
          type: type.ERROR,
          payload: {
            message: message,
            code: code,
          },
        });
      }
    },
    []
  );
  return {
    isLoading: state.isLoading,
    percentLoading: state.percentLoading,
    error: state.error,
    data: state.data,
    fetchDataFromServer: fetchDataFromServer,
  };
};

export default useAxios;
