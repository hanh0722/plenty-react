import React, { useRef, useState } from "react";
import BoxContainer from "../../UI/BoxContainer/BoxContainer";
import ImageUser from "./Upload/ImageUser";
import Input from "./Upload/Input";
import styles from "./FormUser.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import useAxios from "../../../../hook/use-axios";
import { uploadSingleImageApi } from "../../../../config/url";
import { key_multer } from "../../../../util/key-server";
import axios from "axios";
const FormUser = () => {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(0);
  const {isLoading, error, data, fetchDataFromServer, percentDownload, percentLoading} = useAxios();
  console.log(percentLoading, percentDownload);
  const inputRef = useRef();
  const inputUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append(key_multer, file);
    setUrl(URL.createObjectURL(file));
    // temporary URL
    axios.post(uploadSingleImageApi, formData, {

    })
  };
  console.log(data, error);
  const accessFileUpload = () => {
    inputRef.current.click();
  };
  console.log(loading);
  return (
    <BoxContainer
      className={`d-flex flex-column justify-content-center align-items-center ${styles.container}`}
    >
      <div className={styles.image}>
        <ImageUser src={url}/>
        <div
          onClick={accessFileUpload}
          className={`${styles.upload} d-flex justify-content-center align-items-center flex-column`}
        >
          <FontAwesomeIcon icon={faCameraRetro} />
          <span>Update photo</span>
        </div>
      </div>
      <div className={styles.infor}>
        <p>
          Allowed <sup>*</sup> jpeg, <sup>*</sup> jpg, <sup>*</sup>png,{" "}
          <sup>*</sup>heic
        </p>
      </div>
      <Input onChange={inputUpload} ref={inputRef} />
    </BoxContainer>
  );
};

export default FormUser;
