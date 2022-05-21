import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;

  column-gap: 3rem;

  a {
    color: ${(props) => props.theme.color};
  }
`;
