import React, { Component } from "react";


class Footer extends Component {
  render() {


    const footerStyle = {
      background: "#C4C4C4",
      position: "fixed",
      top: "1430px",
      font_family: "Courier Cyrillic",
      font_size: "24px",
      text_align: "center",
      color: "#333333",
      width: "100%",
        height: "40px",
      padding: "10px 0 10px 0",
      display: "fixed",
      
      alignItems: "center",


    };





    return (
      <footer style={footerStyle}>
        <div id="footer-container" >

              <div>
                  ©2018 AutoDoc Team. v.1.0.1.
              </div>

          </div>


      </footer>
    );
  }
}

export default Footer;
