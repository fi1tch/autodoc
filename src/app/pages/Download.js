import React from "react";
import Download from "../components/Download/Download.js";

const styles = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    background: "#F2F2F2",
    weight: "100vh",
    height: "100vh",
};

const Downloading = () => (
  <main style={styles}>
      <Download/>
  </main>

);

export default Downloading;
