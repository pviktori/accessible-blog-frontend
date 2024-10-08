import { useEffect, useState } from "react";

export const useDebounce = (inputValue: string, time: number) => {
  const [value, setValue] = useState(inputValue);
  let timer: any;

  useEffect(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setValue(inputValue);
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, timer]);

  return value;
};
