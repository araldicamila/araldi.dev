import { DefaultTheme } from "styled-components";

export const darkTheme = {
  background: "#423F45",
  color: "#FEFEFE",
};

export const lightTheme = {
  background: "#FEFEFE",
  color: "#423F45",
};

export type Theme = {
  background: string;
  color: string;
};
