import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import NoBattery from "../../../Assets/Icons/no-battery.png";

const Container = styled(motion.div)`
  width: 35%;
  height: -webkit-fill-available;
  flex-direction: row;
  display: flex;
  position: fixed;
  border-radius: 20px;
  align-items: flex-end;
  padding-bottom: 20%;
  justify-content: center;
  gap: 10px;
  left: 0;
`;

const ProgressContainer = styled(motion.div)`
  width: 30px;
  height: 90%;
  display: flex;
  background-color: #ffffff6b;
  border-radius: 20px;
  align-items: flex-end;
`;

const Progress = styled(motion.div)`
  width: 100%;
  height: 40%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5fffc5;
  border-radius: 20px;
`;

const BatteryContainer = styled(motion.div)`
  background-color: #ff000054;
  padding: 5px;
  width: 35px;
  border-radius: 5px;
`;

const BatteryIcon = styled(motion.img)`
  height: 20px;
  width: 20px;

  display: flex;
`;

interface ProgressProps {
  battery: number;
}

const ProgressBar = ({ battery }: ProgressProps) => {
  const [warning, setWarning] = React.useState(false);
  const getBGColor = (battery: number) => {
    if (battery <= 20) {
      return "#f44f4f";
    } else if (battery > 20 && battery <= 60) {
      return "#e3f44f";
    } else {
      return "#4ff44f";
    }
  };

  React.useEffect(() => {
    if (battery <= 20) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [battery]);

  return (
    <Container>
      <ProgressContainer>
        <Progress
          animate={{
            height: `${battery}%`,
            backgroundColor: getBGColor(battery),
          }}
        >{`${battery}%`}</Progress>
      </ProgressContainer>

      <BatteryContainer
        animate={{
          backgroundColor: battery <= 20 ? "red" : "#ff000054",
          scale: warning ? [1, 0.89, 1, 0.89, 1, 0.89] : 1,
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {battery}%
        <BatteryIcon src={NoBattery} alt="" />
      </BatteryContainer>
    </Container>
  );
};

export default ProgressBar;
