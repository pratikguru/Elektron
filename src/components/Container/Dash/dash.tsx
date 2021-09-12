import React, { Suspense, lazy } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
const Splash = lazy(() => import("../../Views/Splash/splash"));
const Map = lazy(() => import("../../Views/Map/map"));
const ProgressBar = lazy(() => import("../../Views/ProgressBar/progressBar"));
const Stats = lazy(() => import("../../Views/Stats/stats"));
const BottomBar = lazy(() => import("../../Views/BottomBar/bottomBar"));

const Container = styled(motion.div)`
  background-color: #3a3838;
  width: -webkit-fill-available;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: hidden;
`;

const InterfaceContainer = styled(Container)`
  width: -webkit-fill-available;
  height: 100vh;
  display: flex;
  background-color: #3a3838;
  justify-content: space-evenly;
  align-items: center;
`;

const ControlsContainer = styled(motion.div)`
  width: 73%;
  height: 95%;
  border-radius: 20px;

  flex-direction: column;
  display: inline-flex;
  position: relative;
`;

const Dash = () => {
  const [show, setShow] = React.useState<boolean>(true);
  const [mode, setMode] = React.useState<boolean>(false);
  const [battery, setBattery] = React.useState<number>(20);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <AnimatePresence>
        <InterfaceContainer>
          <ControlsContainer>
            <Map />
            <BottomBar />
          </ControlsContainer>
          <ControlsContainer
            style={{
              width: "25%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stats
              mode={mode}
              toggleMode={() => setMode(!mode)}
              battery={battery}
            />
            <ProgressBar battery={battery} />
          </ControlsContainer>
        </InterfaceContainer>
      </AnimatePresence>
    </Container>
  );
};

export default Dash;
