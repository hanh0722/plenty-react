import React, { forwardRef } from "react";
import NormalInput from "../../input/NormalInput/NorInput";
import styles from "../LoginForm/Form.module.scss";
import useInput from "../../../hook/use-input";
import Thumb from "../../Thumb/Thumb";
import { CSSTransition } from "react-transition-group";
const Input = forwardRef((props, ref) => {
  const {
    changeInputHandler,
    value,
    valid,
    isTouched,
    touchedInputHandler,
    isFocused,
    focusInputHandler,
  } = useInput((value) => props.functionCondition(value));
  const changeInputHandlerFn = (event) => {
    changeInputHandler(event);
    if(props.input.onChange){
      props.input.onChange(event);
    }
  }
  return (
    <>
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <div className={styles.box}>
          {props.thumbcontent && (
            <Thumb
              className={`${styles.thumb} ${
                isFocused && value.trim().length === 0 && styles["thumb--back"]
              }`}
            >
              {props.input.thumbcontent}
            </Thumb>
          )}
          {props.children}
          <NormalInput
            ref={ref}
            input={{
              ...props.input,
              value: value,
              onChange: changeInputHandlerFn,
              onBlur: touchedInputHandler,
              onFocus: focusInputHandler,
            }}
            className={!valid && isTouched ? "error__input" : ""}
          />
        </div>
        <CSSTransition
          in={!valid && isTouched}
          mountOnEnter
          unmountOnExit
          classNames="scale"
          timeout={500}
        >
          <p className="error__text pt-3" style={{ fontSize: "12px" }}>
            {props.error}
          </p>
        </CSSTransition>
      </div>
    </>
  );
});

export default React.memo(Input);
