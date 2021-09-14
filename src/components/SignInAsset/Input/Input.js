import React from "react";
import NormalInput from "../../input/NormalInput/NorInput";
import styles from "../LoginForm/Form.module.scss";
import useInput from "../../hook/use-input";
const Input = (props) => {
  const { changeInputHandler, value, valid, isTouched, touchedInputHandler } =
    useInput((value) => props.functionCondition(value));
  return (
    <>
      <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <div className={styles.box}>
          {props.children}
          <NormalInput
            input={{
              ...props.input,
              value: value,
              onChange: changeInputHandler,
              onBlur: touchedInputHandler,
            }}
          />
        </div>
        {!valid && isTouched && (
        <p className="error__text pt-1" style={{fontSize: '12px'}}>
          {props.error}
        </p>
      )}
      </div>
    </>
  );
};

export default React.memo(Input);
