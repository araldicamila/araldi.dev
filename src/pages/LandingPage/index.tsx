import React from "react";
import { ContainerLanding } from "./styles";

export const LandingPage: React.FC = () => {
  return (
    <ContainerLanding>
      <div>
        <h1>
          Hello, my name is{" "}
          <b>
            Camila<strong>.</strong>
          </b>
        </h1>
        <p>
          I am a <b>front-end</b> developer from Santa Catarina, Brazil.
        </p>
      </div>
      <div />
    </ContainerLanding>
  );
};
