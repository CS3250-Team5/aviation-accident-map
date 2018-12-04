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
                    <a href="https://github.com/CS3250-Team5" target="_blank">Team 5<br/></a>
                    <a href="https://github.com/beavelar" target="_blank">Brian Avelar<br/></a>
                    <a href="https://github.com/devond5" target="_blank">Devon Despain<br/></a>
                    <a href="https://github.com/Monce32" target="_blank">Monce Romero<br/></a>
                    <a href="https://github.com/Fduranji" target="_blank">Francisco Duran<br/></a>
                    <a href="https://github.com/MuchoE" target="_blank">Angel Cecena<br/></a>
                    <i />
                </span>
            </center>
        </div>
    );
  }
}

export default About;
