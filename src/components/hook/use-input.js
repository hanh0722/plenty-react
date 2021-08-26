import {useReducer} from 'react';

const typeInput = {
    CHANGE_HANDLER: 'CHANGE_INPUT',
    TOUCHED_HANDLER: 'TOUCHED_INPUT',
    RESET_INPUT: 'RESET_INPUT'
}
const initialState = {
    isTouched: false,
    value: ''
}
const reducerInputFn = (state, action) =>{
    switch(action.type){
        case typeInput.CHANGE_HANDLER: {
            return {
                ...state,
                value: action.payload,
            }
        }
        case typeInput.TOUCHED_HANDLER: {
            return {
                ...state,
                isTouched: true
            }
        }
        case typeInput.RESET_INPUT: {
            return {
                isTouched: false,
                value: ''
            }
        }
        default:
            return state;
    }
}
const useInput = (validHandler) =>{
    const [state, dispatch] = useReducer(reducerInputFn, initialState);

    const valid = validHandler(state.value);
    const changeInputHandler = event =>{
        dispatch({
            type: typeInput.CHANGE_HANDLER,
            payload: event.target.value
        })
    }
    const touchedInputHandler = () =>{
        dispatch({
            type: typeInput.TOUCHED_HANDLER
        })
    }
    const resetHandler = () =>{
        dispatch({
            type: typeInput.RESET_INPUT
        })
    }
    return {
        isTouched: state.isTouched,
        value: state.value,
        changeInputHandler,
        valid,
        touchedInputHandler,
        resetHandler
    }
}

export default useInput;