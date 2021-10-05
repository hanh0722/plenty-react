import { useState, useEffect } from "react";

const useScroll = (defaultValue) => {
  const [getToggle, setGetToggle] = useState(false);
  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;
    const getScrollHandler = () => {
      newValue = window.pageYOffset;
      if (oldValue < newValue && newValue > defaultValue) {
        setGetToggle(true);
      } else {
        setGetToggle(false);
      }
      oldValue = newValue;
    };
    window.addEventListener("scroll", getScrollHandler);
  }, [defaultValue]);
  return getToggle;
};

export default useScroll;
