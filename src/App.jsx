import React from "react";
import GPA from "./sections/gpacalculator/GPA";
// import GoogleLogin_ from "./components/GoogleLogin";
// import About from "./sections/About";
import Home from "./sections/Home";

function app() {
  const [currSection, setCurrSection] = React.useState("home");
  return (
    <React.StrictMode>
      <div>
        {/* {currSection === 'home' && <Home/>} */}
        <GPA />
      </div>
    </React.StrictMode>
  );
}

export default app;
