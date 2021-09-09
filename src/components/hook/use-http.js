import { useCallback, useReducer } from "react";

const initialState = {
    items: [],
    status: 'pending',
    error: null,
}
const type = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR'
}
const reducerFn = (state, action) => {
    switch(action.type){
        case type.PENDING:
            return {
                ...state,
                status: 'pending'
            }
        case type.COMPLETED: {
            return {
                ...state,
                status: 'completed',
                items: action.payload
            }
        }
        case type.ERROR: {
            return {
                ...state,
                status: 'error'
            }
        }
        default:
            return state;
    }
}
const useHttp = () => {
    const [state, dispatch] = useReducer(reducerFn, initialState);

    const fetchItemHandler = useCallback(async (fetchConfig) => {
        dispatch({
            type: type.PENDING
        })
        try{
            const response = await fetch(fetchConfig.url, {
                method: fetchConfig.method ? fetchConfig.method : 'GET',
                headers: fetchConfig.headers ? fetchConfig.headers : {},
                body: fetchConfig.body ? fetchConfig.body : null
            })
            if(!response.ok){
                throw new Error('Error!');
            }
            const parseData = await response.json();
            dispatch({
                type: type.COMPLETED,
                payload: parseData
            })
        } catch(err){
            dispatch({
                type: type.ERROR
            })
        }
    }, []);
    return {
        data: state.items,
        status: state.status,
        error: state.error,
        fetchItemHandler
    }
};

export default useHttp;