import React from "react";
import { ThemeProviderComponent } from "styled-components";
import { HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <a>About me</a>
      <a>Projects</a>
      <a>Contact me</a>
    </HeaderContainer>
  );
};
