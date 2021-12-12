import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MapImg from "../../../Assets/Icons/maps.png";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: grey;
  border-radius: 5px;
`;

const Map = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return <Container ref={ref}></Container>;
};

export default Map;
