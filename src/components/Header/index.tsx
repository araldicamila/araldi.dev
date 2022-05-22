import React from "react";
import { HeaderContainer } from "./styles";

interface HeaderProps {
  setTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ setTheme }) => {
  return (
    <HeaderContainer>
      <a>About me</a>
      <a>Projects</a>
      <a>Contact me</a>

      <button onClick={setTheme}>Theme</button>
    </HeaderContainer>
  );
};
