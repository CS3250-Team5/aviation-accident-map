import React, { Component } from "react";
import Logo from "../images/coloAviation.png";
import "../style/banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="logo">
          <a href="http://coloradopilots.org/">
            <img src={Logo} height="25%" width="30%" alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
