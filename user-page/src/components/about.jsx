import React, { Component } from "react";
import "../style/map.css";

class About extends Component {
  render() {
    return (
      <div className="tooltip aboutStyle">
        <center>
          <span className="about">About</span>
          <span className="tooltiptext">
            <span>This page created by: </span>
            <a
              href="https://github.com/CS3250-Team5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Team 5<br />
            </a>
            <span>
              Members: <br />
            </span>
            <a
              href="https://github.com/beavelar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brian Avelar
              <br />
            </a>
            <a
              href="https://github.com/devond5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devon Despain
              <br />
            </a>
            <a
              href="https://github.com/Monce32"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monce Romero
              <br />
            </a>
            <a
              href="https://github.com/Fduranji"
              target="_blank"
              rel="noopener noreferrer"
            >
              Francisco Duran
              <br />
            </a>
            <a
              href="https://github.com/MuchoE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angel Cecena
              <br />
            </a>
            <i />
          </span>
        </center>
      </div>
    );
  }
}

export default About;
