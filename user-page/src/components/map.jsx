import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import "./style.css"
//import Markers from "./accidents"

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";
import banner from "../images/mountain_ja.JPG";

//const AnyReactComponent
//conts have to be uppercase
const FatalAccidents = ({text}) => <div><img src={plane} alt="plane"/>{text}</div>;
const MountainPasses = ({text}) => <div><img src={mountain} alt="mtnPass"/>{text}</div>;

class Map extends Component {
    static defaultProps = {
        accidents: {
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

        passes: {
            one: {
                lat: 39.798383,
                lng: -105.777125
            },
            two: {
                lat: 40.520833,
                lng: -105.8925
            },
            three: {
                lat: 38.163007,
                lng: -106.600192
            },
            four: {
                lat: 39.530278,
                lng: -107.058889
            },
            five: {
                lat: 38.826666,
                lng: -106.408611
            }
        },

        center: {
            lat: 39.00,
            lng: -105.15
        },
        zoom: 7
    };

    handleAccidents() {
        console.log("Accident filter on");
    }

    render() {
        return (
        // Important! Always set the container height explicitly
        <div className="backGround">
            <center className="banner">
                <a href="http://coloradopilots.org/">
                    <img src={banner} alt="banner"></img>
                </a>
            </center>
            <center>
                <span className="filterBoxes">
                    <input onClick={this.handleAccidents} name="Fatal Accidents" type="checkbox"/>
                    <img src={plane} alt="plane" width="15" height="15"></img>Show Fatal Accidents
                </span>
                <span className="filterBoxes">
                    <input name="CDOT Mountain AWOS" type="checkbox"/>
                    <img src={awos} alt="awos" width="15" height="15"></img>Show CDOT Mountain AWOS
                </span>
                <span className="filterBoxes">
                    <input name="Mountain Passes" type="checkbox"/>
                    <img src={mountain} alt="mountain" width="15" height="15"></img>Show Mountain Passes
                </span>
            </center>

            <div className="mapStyle">

                <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

                    <FatalAccidents lat={this.props.accidents.one.lat} lng={this.props.accidents.one.lng}/>
                    <FatalAccidents lat={this.props.accidents.two.lat} lng={this.props.accidents.two.lng}/>
                    <FatalAccidents lat={this.props.accidents.three.lat} lng={this.props.accidents.three.lng}/>
                    <FatalAccidents lat={this.props.accidents.four.lat} lng={this.props.accidents.four.lng}/>
                    <FatalAccidents lat={this.props.accidents.five.lat} lng={this.props.accidents.five.lng}/>
                    <FatalAccidents lat={this.props.accidents.six.lat} lng={this.props.accidents.six.lng}/>
                    <FatalAccidents lat={this.props.accidents.seven.lat} lng={this.props.accidents.seven.lng}/>
                    <FatalAccidents lat={this.props.accidents.eight.lat} lng={this.props.accidents.eight.lng}/>
                    <FatalAccidents lat={this.props.accidents.nine.lat} lng={this.props.accidents.nine.lng}/>
                    <FatalAccidents lat={this.props.accidents.ten.lat} lng={this.props.accidents.ten.lng}/>
                    <FatalAccidents lat={this.props.accidents.eleven.lat} lng={this.props.accidents.eleven.lng}/>

                    <MountainPasses lat={null} lng={null}/>
                    <MountainPasses lat={this.props.passes.one.lat} lng={this.props.passes.one.lng}/>
                    <MountainPasses lat={this.props.passes.two.lat} lng={this.props.passes.two.lng}/>
                    <MountainPasses lat={this.props.passes.three.lat} lng={this.props.passes.three.lng}/>
                    <MountainPasses lat={this.props.passes.four.lat} lng={this.props.passes.four.lng}/>
                    <MountainPasses lat={this.props.passes.five.lat} lng={this.props.passes.five.lng}/>

                </GoogleMapReact>
            </div>
        </div>);
    }
}

export default Map;
