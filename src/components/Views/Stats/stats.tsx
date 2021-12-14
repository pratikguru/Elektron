import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  transform: scale(0.8);
  height: 100%;
  flex-direction: row;
  display: flex;
  border-radius: 20px;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  right: 0;
  width: 40%;
  top: 1px;
`;

const StatSpeed = styled(motion.div)`
  width: 120px;
  height: 70px;
  display: flex;
  padding: 5px;
  background-color: #545454;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  font-family: Montserrat;
  color: white;
  flex-direction: column;
`;

const Header = styled.div`
  font-family: Montserrat;
  padding: 5px;
  color: white;
  height: fit-content;
  font-weight: 400;
`;

const Info = styled.div`
  font-family: Montserrat;
  padding: 5px;
  color: white;
  height-fit: fit-content;
  font-weight: 500;
  padding-left: 20px;
  font-size: 18px;
`;

const Unit = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const StatEfficiency = styled(motion.div)`
  display: flex;
  width: fit-content;
  font-family: Montserrat;
  font-style: italic;
  font-size: 20px;
  margin-left: 10px;
`;

const Battery = styled(motion.div)`
  display: flex;
  width: -webkit-fill-available;
  padding: 10px;
  height: auto;
  font-size: 50px;
  font-family: "Montserrat";
  color: white;
  font-style: italic;
  justify-content: center;
  align-items: center;
`;

interface StatProps {
  battery: number;
  toggleMode: () => void;
  mode: boolean;
}

const Stats = ({ battery, toggleMode, mode }: StatProps) => {
  return (
    <Container>
      <StatSpeed>
        <Header>Range</Header>
        <Info>
          20 <Unit>Km</Unit>
        </Info>
      </StatSpeed>
      <StatSpeed>
        <Header>Speed</Header>
        <Info>
          50 <Unit>Kmph</Unit>
        </Info>
      </StatSpeed>
      <StatSpeed
        onClick={() => toggleMode()}
        style={{
          display: "center",
          height: "auto",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <StatEfficiency
          style={{ color: "#24d524" }}
          animate={{
            fontWeight: mode ? 600 : 450,
            fontSize: mode ? "20px" : "10px",
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
        >
          ECO
        </StatEfficiency>
        <StatEfficiency
          style={{ color: "#0cbaff" }}
          animate={{
            fontWeight: mode === false ? 600 : 450,
            fontSize: mode === false ? "20px" : "10px",
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
        >
          SPORT
        </StatEfficiency>
      </StatSpeed>
      <Battery>
        {battery}
        <Unit style={{ marginLeft: "2px" }}>%</Unit>
      </Battery>
    </Container>
  );
};

export default Stats;
