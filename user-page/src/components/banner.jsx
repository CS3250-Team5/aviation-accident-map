import React, { Component } from "react";
import Logo from "../img/coloAviation.png";
import "../style/banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div>
          <a href="http://coloradopilots.org/">
            <img className="logo" src={Logo} alt="Logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
