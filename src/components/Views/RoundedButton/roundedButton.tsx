import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 2px;
  background-color: #3a3838;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  text-selection: none;
  -webkit-tap-highlight-color: transparent;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-selection: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;

interface ButtonProps {
  icon?: JSX.Element;
  handleClick?: (nav: string) => void;
  to: string;
}

const RoundedButton = ({ icon, to }: ButtonProps) => {
  return (
    <StyledLink to={to}>
      <Container whileTap={{ scale: 0.89 }}>{icon}</Container>
    </StyledLink>
  );
};

export default RoundedButton;
