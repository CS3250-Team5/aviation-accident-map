import React, { Component } from "react";
import Logo from "../images/cpa_logo2.jpg";
import "../style/banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <a href="http://coloradopilots.org/">
          <img src={Logo} alt="Logo" height="55%" width="55%" />
        </a>
      </div>
    );
  }
}

export default Banner;
