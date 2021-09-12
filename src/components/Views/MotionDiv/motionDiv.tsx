import React from "react";
import styled from "styled-components";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView, InViewHookResponse } from "react-intersection-observer";

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  hieght: 100vh;
  width: -webkit-fill-available;
`;

interface MotionDivProps {
  style?: Object;
  controls: AnimationControls;
  ref: any;
  component: any;
}

const MotionDiv = ({ style, controls, ref, component }: MotionDivProps) => {
  return (
    <Container
      style={style}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,

          transition: {
            delay: 0.2,
            duration: 0.2,
            ease: "easeIn",
            delayChildren: 1,
          },
        },
        hidden: { opacity: 0 },
      }}
    >
      {component}
    </Container>
  );
};

export default MotionDiv;
