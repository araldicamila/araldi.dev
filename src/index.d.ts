import "styled-components";
import { Theme } from "./assets/styles/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
