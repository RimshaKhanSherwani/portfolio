import React, { Suspense } from "react";
import App from "./pages";

const MainApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
};

export default MainApp;
