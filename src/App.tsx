import React, { lazy, Suspense } from "react";
import SplashScreen from "./components/Views/Splash/splash";

const Dash = lazy(() => import("./components/Container/Dash/dash"));

const App = (): any => {
  return (
    <Suspense fallback={<div></div>}>
      <Dash></Dash>
    </Suspense>
  );
};

export default App;
