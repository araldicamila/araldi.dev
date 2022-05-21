import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, value: any) => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return value;
    }
  });

  useEffect(() => {
    localStorage.setItem("GET_THEME", JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
