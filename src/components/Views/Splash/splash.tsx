import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Splash from "../../../Assets/Icons/splash.png";

const Container = styled(motion.div)`
  width: -webkit-fill-available;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SplashImage = styled(motion.img)`
  width: 30%;
`;

const SplashScreen = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      animate={{
        display: "flex",
        opacity: [0, 1, 0],
      }}
      transition={{ duration: 3.5, delay: 0.1, ease: "easeIn" }}
    >
      <SplashImage src={Splash} alt="" />
    </Container>
  );
};

export default SplashScreen;
