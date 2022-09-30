import React from "react";
import Navbar from "../components/Navbar";
import News from "../components/News";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <News />
      <div className="homeContent">
        <div className="home-left">
          <div className="hl-content">
            <h1>
              Welcome to <span className="logoTextP3">FCIT</span>.
              <span className="logoTextP1">info</span>
            </h1>
            <p>
              It is a platform that is designed for the ease of pioneers aka{" "}
              <span className="highlight">pucitians</span> and the ones seeking
              for admission in this prestigious IT institute.
            </p>
          </div>
        </div>
        <div className="home-right">
          <div className="hr-content">
            <div className="rect-1">
              <span></span>
            </div>
            <div className="rect-2">
              <span></span>
            </div>
            <div className="rect-3">
              <span>
                <img src="images/pu.png" className="head-img" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
