import React from "react";
import styles from "../../SignInAsset/LoginForm/Form.module.scss";
import InputUser from "../InputUser/InputUser";
import classes from "./FormPersonal.module.scss";
import { checkInputIsEmpty } from "../../../util";
const FormPersonal = ({ user, setDataUser }) => {
  return (
    <div className={`${styles.form} ${classes.form}`} autoComplete="off">
      <InputUser
        input={{
          type: "text",
          required: true,
          autoComplete: "off",
          id: "name",
          label: "Name",
          placeholder: "Name...",
        }}
        error='Name is empty!'
        initialValue={user?.name || ""}
        checkCondition={(value) => checkInputIsEmpty(value, 0)}
        onChange={setDataUser.setName}
      />
      <InputUser
        input={{
          type: "email",
          required: true,
          autoComplete: "off",
          id: "email",
          label: "Email",
          placeholder: "Email...",
        }}
        error='Email is not valid!'
        checkCondition={(value) =>
          checkInputIsEmpty(value, 0) && value.includes("@")
        }
        initialValue={user?.email}
        onChange={setDataUser.setEmail}
      />
      <InputUser
        input={{
          type: "text",
          required: true,
          autoComplete: "off",
          id: "phone",
          label: "Mobile Phone",
          placeholder: "Mobile phone...",
        }}
        onChange={setDataUser.setPhone}
        initialValue={user?.phone}
        error='Mobile phone is not valid!'
        checkCondition={(value) => checkInputIsEmpty(value, 9)}
      />
      <InputUser input={{
        type: 'text',
        required: true,
        autoComplete: 'off',
        id: "address",
        label: "Address",
        placeholder: "Address"
      }}
      onChange={setDataUser.setAddress}
      error="Address is not valid"
      checkCondition={value => checkInputIsEmpty(value, 0)}
      />
      <div className={classes.note}>
        <textarea onChange={event => setDataUser.setNote(event.target.value)} rows="4" placeholder="Note..." />
      </div>
    </div>
  );
};

export default FormPersonal;
