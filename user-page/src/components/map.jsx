import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";
import banner from "../images/mountain_ja.JPG";

//const AnyReactComponent
//conts have to be uppercase
const FatalAccidents = ({ text }) => <div><img src={plane}/>{text}</div>;

class Map extends Component {
  static defaultProps = {
      markers: {
        one: {
          lat: 39.6290176,
          lng: -105.0920324
        },
        two: {
          lat: 39.516111,
          lng: -104.833889
        },
        three: {
          lat: 39.46,
          lng: -105.663333
        },
        four: {
          lat: 39.41,
          lng: -107.21
        },
        five: {
          lat: 40.267223,
          lng: -105.154167
        },
        six: {
          lat: 38.8625,
          lng: -106.156944
        },
        seven: {
          lat: 37.822223,
          lng: -106.906111
        },
        eight: {
          lat: 38.495,
          lng: -102.29
        },
        nine: {
          lat: 39.1175,
          lng: -104.718334
        },
        ten: {
          lat: 40.052222,
          lng: -108.278611
        },
        eleven: {
          lat: 38.830834,
          lng: -104.718334
        }
    },
    center: {
      lat: 39.73,
      lng: -104.99
    },
    zoom: 6.5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
    <div
        style={{
            backgroundColor: "#8C75DE",
        }}
        >
        <center
            style={{
                padding: "15px 0 20px 0",
            }}>
            <a href="http://coloradopilots.org/">
                <img src={banner}></img>
            </a>
        </center>
        <center>
            <span
                style={{
                    padding: "0 10px 0 0",
                }}>
                <input name="Fatal Accidents" type="checkbox"/><img src={plane} width="15" height="15"></img>Show Fatal Accidents
            </span>
            <span
                style={{
                    padding: "0 10px 0 0",
                }}
                >
                <input name="CDOT Mountain AWOS" type="checkbox"/><img src={awos} width="15" height="15"></img>Show CDOT Mountain AWOS
            </span>
            <span
                style={{
                    padding: "0 10px 0 0",
                }}
                >
                <input name="Mountain Passes" type="checkbox"/><img src={mountain} width="15" height="15"></img>Show Mountain Passes
            </span>
        </center>

      <div
        style={{
          height: "50vh",
          width: "60%",
          margin: "0 auto",
          padding: "50px 0 0 0"
        }}
      >

        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        <FatalAccidents
          lat={this.props.markers.one.lat}
          lng={this.props.markers.one.lng}
        />
        <FatalAccidents
          lat={this.props.markers.two.lat}
          lng={this.props.markers.two.lng}
        />
        <FatalAccidents
          lat={this.props.markers.three.lat}
          lng={this.props.markers.three.lng}
        />
        <FatalAccidents
          lat={this.props.markers.four.lat}
          lng={this.props.markers.four.lng}
        />
        <FatalAccidents
          lat={this.props.markers.five.lat}
          lng={this.props.markers.five.lng}
        />
        <FatalAccidents
          lat={this.props.markers.six.lat}
          lng={this.props.markers.six.lng}
        />
        <FatalAccidents
          lat={this.props.markers.seven.lat}
          lng={this.props.markers.seven.lng}
        />
        <FatalAccidents
          lat={this.props.markers.eight.lat}
          lng={this.props.markers.eight.lng}
        />
        <FatalAccidents
          lat={this.props.markers.nine.lat}
          lng={this.props.markers.nine.lng}
        />
        <FatalAccidents
          lat={this.props.markers.ten.lat}
          lng={this.props.markers.ten.lng}
        />
        <FatalAccidents
          lat={this.props.markers.eleven.lat}
          lng={this.props.markers.eleven.lng}
        />

        </GoogleMapReact>
      </div>
    </div>
    );
  }
}

export default Map;
