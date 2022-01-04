import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="banner"></div>
      <h2 className="homeHeading">FEATURED PRODUCTS</h2>
      <div className="container" id="container"></div>
    </Fragment>
  );
};

export default Home;
