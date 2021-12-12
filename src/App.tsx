import React, { lazy, Suspense, ReactElement } from "react";

const Dash = lazy(() => import("./components/Container/Dash/dash"));

const App: React.FC<any> = () => {
  window.scrollTo(0, 1);
  return (
    <Suspense fallback={null}>
      <Dash></Dash>
    </Suspense>
  );
};

export default App;
