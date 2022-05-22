import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;

  width: 100%;

  column-gap: 3rem;
  padding: 2.5rem;

  a {
    color: ${(props) => props.theme.color};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #5dd2dc;
    }
  }
`;
