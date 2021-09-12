import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: 80px;
  height: 80px;
  display: flex;
  border-radius: 10px;
  background-color: #3a3838;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  text-selection: none;
  -webkit-tap-highlight-color: transparent;
`;

const RoundedButton = () => {
  return <Container whileTap={{ scale: 0.89 }}></Container>;
};

export default RoundedButton;
