import React from "react";
import styles from "./ContentUser.module.scss";
const ContentUser = ({email}) => {
  return (
    <div className={styles.container}>
      <p>
        We sent an email to <span>{email}</span> with an{" "}
        <span>OTP 4 numbers</span>
      </p>
      <p>
        Please check the link after email and enter OTP to activate your
        account!
      </p>
      <p className={styles.note}>Note: If you don't find the OTP, click all mail or spam/promotion to get OTP</p>
    </div>
  );
};

export default ContentUser;
