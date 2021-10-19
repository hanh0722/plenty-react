import React, { useState, useMemo } from "react";
import BoxContainer from "../../UI/BoxContainer/BoxContainer";
import useToggle from "../../../../hook/use-toggle";
import ToggleButton from "../../../UI/ToggleButton/ToggleButton";
import styles from "./ProductOptions.module.scss";
import CategorySelect from "../../../UI/CategorySelect/CategorySelect";
import NormalInput from "../../../input/NormalInput/NorInput";
import Input from "../../../SignInAsset/Input/Input";
import { Button } from "@material-ui/core";
const ProductOptions = () => {
  const { toggle, changeToggleHandler } = useToggle(false);
  const { toggle: selectToggle, changeToggleHandler: selectChangeToggle } =
    useToggle(false);
  const [valueInput, setValueInput] = useState("");
  const [percent, setPercent] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const listItems = useMemo(() => {
    return ["Indoor", "Outdoor", "Herb", "Veggies"];
  }, []);
  const [list, setList] = useState(listItems);
  const getValueFromInput = (event) => {
    setValueInput(event.target.value);
    const filterFromList = listItems.filter((name) => {
      return name.includes(event.target.value);
    });
    setList(filterFromList);
  };

  const setValueToInput = (name) => {
    setValueInput(name);
    selectChangeToggle();
  };

  const changePercentHandler = (event) => {
    setPercent(event.target.value);
  };
  const getPercentOfInput = useMemo(() => {
    const calculatePrice = +percent * +regularPrice;
    return calculatePrice.toFixed(2);
  }, [percent, regularPrice]);
  return (
    <BoxContainer className={styles.container}>
      <div className={`d-flex align-items-center ${styles.toggle}`}>
        <ToggleButton isClicked={toggle} onClicked={changeToggleHandler} />
        <span className={styles.title}>In stock</span>
      </div>
      <NormalInput
        input={{
          type: "text",
          autoComplete: "off",
          placeholder: "Choose Type",
          onClick: selectChangeToggle,
          value: valueInput,
          required: true,
          onChange: getValueFromInput,
        }}
        className={styles.input}
      />
      <CategorySelect isShowed={selectToggle}>
        {list.length === 0 && <li>No results</li>}
        {list.length > 0 &&
          list.map((item) => {
            return (
              <li onClick={setValueToInput.bind(null, item)} key={item}>
                {item}
              </li>
            );
          })}
      </CategorySelect>
      <Input
        functionCondition={(value) => value.trim().length > 0}
        input={{
          id: "regular-price",
          type: "number",
          autoComplete: "off",
          required: true,
          placeholder: "Regular Price",
          onChange: (event) => setRegularPrice(event.target.value),
        }}
        label="Regular Price"
        className={styles.input}
        error="Price is required"
      />
      <div className={styles.sale}>
        <label htmlFor="sale-percent">Sale Percent (Not required)</label>
        <NormalInput
          input={{
            id: "sale-percent",
            type: "number",
            autoComplete: "off",
            placeholder: "Percent",
            onChange: changePercentHandler,
            value: percent,
          }}
          className={styles.input}
        />
      </div>
      <div className={styles.sale}>
        <label>Price (Last Price)</label>
        <NormalInput
          input={{
            type: "text",
            autoComplete: "off",
            value: getPercentOfInput,
            readOnly: true,
          }}
          className={styles.input}
        />
      </div>
      <Button className={styles.button} type="submit" variant="contained">
        Create Product
      </Button>
    </BoxContainer>
  );
};

export default ProductOptions;
