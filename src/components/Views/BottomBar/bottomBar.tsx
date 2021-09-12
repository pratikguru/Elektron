import React from "react";
import styled from "styled-components";

import RoundedButton from "../RoundedButton/roundedButton";

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: #bac2eb40;
  border-radius: 20px;
`;

const BottomBar = () => {
  return (
    <Container>
      <RoundedButton></RoundedButton>
      <RoundedButton></RoundedButton>
    </Container>
  );
};

export default BottomBar;
