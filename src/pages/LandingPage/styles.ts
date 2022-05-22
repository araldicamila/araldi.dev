import styled from "styled-components";

export const ContainerLanding = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;

  div:first-child {
    max-width: 390px;
  }

  div:nth-child(2) {
    background-color: #d7317d;
    width: 17rem;
    height: 17rem;

    border-radius: 1000px;
  }

  p,
  h1 {
    color: ${(props) => props.theme.color};
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  h1 {
    font-weight: normal;
    font-size: 3rem;

    b {
      font-weight: 700;
    }

    strong {
      color: #d7317d;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3rem;

    div:first-child {
      max-width: 100%;
      padding: 0 2.5rem;

      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      transition: 0.3s;
      font-size: 2.5rem;
    }

    p {
      transition: 0.3s;
      font-size: 1.2rem;
    }
  }
`;
