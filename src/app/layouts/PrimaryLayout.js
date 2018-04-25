import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import LandingPage from "../pages/LandingPage";
import Generate from "../pages/Generate";
import Download from "../pages/Download"
import Footer from "../components/Footer/Footer";


const styles = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
};


const PrimaryLayout = () => (
  <div style={styles}>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/generating" component={Generate} />
      <Route path="/last_page" component={Download} />
    </Switch>
      <Footer/>

  </div>
);

export default PrimaryLayout;
