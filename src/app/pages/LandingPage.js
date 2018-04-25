import React from "react";
import "../styles/cta-buttons.css";
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
import SlideHeader from "../components/SlideHeader/SlideHeader";

const styles = {
    display: "fixed",
    justifyContent: "space-around",
    flexDirection: "column",
    background: "#EBEBEB",
    height: "auto",

};


const LandingPage = () => (
  <main style={styles}>
    <SlideHeader />
    <HowItWorks/>
  </main>
);



export default LandingPage;
