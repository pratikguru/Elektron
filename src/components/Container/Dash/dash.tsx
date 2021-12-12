import React, { lazy } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "../../Views/Profile/profile";
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
  width: 90%;
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
    if (mode) {
      setBattery(40);
    } else {
      setBattery(20);
    }
  }, [mode]);

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
        {show ? (
          <Splash />
        ) : (
          <InterfaceContainer>
            <BottomBar />
            <Routes>
              <Route
                path="/"
                element={
                  <AnimatePresence>
                    <ControlsContainer>
                      <Map />
                    </ControlsContainer>
                    {
                      <ControlsContainer
                        style={{
                          position: "fixed",
                          width: "25%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {/* <Stats
                          mode={mode}
                          toggleMode={() => setMode(!mode)}
                          battery={battery}
                        /> */}
                        <ProgressBar battery={battery} />
                      </ControlsContainer>
                    }
                    <Outlet />
                  </AnimatePresence>
                }
              ></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="*" element={<Profile />}></Route>
            </Routes>
          </InterfaceContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Dash;
