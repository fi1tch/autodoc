import React from "react";

import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <header className="head">

      <Link to="/">
          <h1>Autodoc.</h1>
      </Link>

  </header>
);

export default Navbar;
