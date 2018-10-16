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
//const MountainPasses = ({text}) => <div><img src={mountain} alt="mtnPass"/>{text}</div>;

class Map extends Component {

    state = {
        fatalOne: {
            lat: 39.6290176,
            lng: -105.0920324
        },
        fatalTwo: {
            lat: 39.516111,
            lng: -104.833889
        },
        fatalThree: {
            lat: 39.46,
            lng: -105.663333
        },
        fatalFour: {
            lat: 39.41,
            lng: -107.21
        },
        fatalFive: {
            lat: 40.267223,
            lng: -105.154167
        },
        fatalSix: {
            lat: 38.8625,
            lng: -106.156944
        },
        fatalSeven: {
            lat: 37.822223,
            lng: -106.906111
        },
        fatalEight: {
            lat: 38.495,
            lng: -102.29
        },
        fatalNine: {
            lat: 39.1175,
            lng: -104.718334
        },
        fatalTen: {
            lat: 40.052222,
            lng: -108.278611
        },
        fatalEleven: {
            lat: 38.830834,
            lng: -104.718334
        }
    };

    static defaultProps = {
        center: {
            lat: 39.00,
            lng: -105.15
        },
        zoom: 7
    };

    handleAccidents = () => {
        this.setState(prevState => ({
            fatalOne: {
                ...prevState.fatalOne,
                lat: null,
                ...prevState.fatalOne,
                lng: null
            },
            fatalTwo: {
                ...prevState.fatalTwo,
                lat: null,
                ...prevState.fatalTwo,
                lng: null
            },
            fatalThree: {
                ...prevState.fatalThree,
                lat: null,
                ...prevState.fatalThree,
                lng: null
            },
            fatalFour: {
                ...prevState.fatalFour,
                lat: null,
                ...prevState.fatalFour,
                lng: null
            },
            fatalFive: {
                ...prevState.fatalFive,
                lat: null,
                ...prevState.fatalFive,
                lng: null
            },
            fatalSix: {
                ...prevState.fatalSix,
                lat: null,
                ...prevState.fatalSix,
                lng: null
            },
            fatalSeven: {
                ...prevState.fatalSeven,
                lat: null,
                ...prevState.fatalSeven,
                lng: null
            },
            fatalEight: {
                ...prevState.fatalEight,
                lat: null,
                ...prevState.fatalEight,
                lng: null
            },
            fatalNine: {
                ...prevState.fatalNine,
                lat: null,
                ...prevState.fatalNine,
                lng: null
            },
            fatalTen: {
                ...prevState.fatalTen,
                lat: null,
                ...prevState.fatalTen,
                lng: null
            },
            fatalEleven: {
                ...prevState.fatalEleven,
                lat: null,
                ...prevState.fatalEleven,
                lng: null
            }
        }));
    };

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
                    <input onClick={this.handleAccidents} name="Fatal Accidents" value="true" type="checkbox"/>
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

                    <FatalAccidents lat={this.state.fatalOne.lat} lng={this.state.fatalOne.lng}/>
                    <FatalAccidents lat={this.state.fatalTwo.lat} lng={this.state.fatalTwo.lng}/>
                    <FatalAccidents lat={this.state.fatalThree.lat} lng={this.state.fatalThree.lng}/>
                    <FatalAccidents lat={this.state.fatalFour.lat} lng={this.state.fatalFour.lng}/>
                    <FatalAccidents lat={this.state.fatalFive.lat} lng={this.state.fatalFive.lng}/>
                    <FatalAccidents lat={this.state.fatalSix.lat} lng={this.state.fatalSix.lng}/>
                    <FatalAccidents lat={this.state.fatalSeven.lat} lng={this.state.fatalSeven.lng}/>
                    <FatalAccidents lat={this.state.fatalEight.lat} lng={this.state.fatalEight.lng}/>
                    <FatalAccidents lat={this.state.fatalNine.lat} lng={this.state.fatalNine.lng}/>
                    <FatalAccidents lat={this.state.fatalTen.lat} lng={this.state.fatalTen.lng}/>
                    <FatalAccidents lat={this.state.fatalEleven.lat} lng={this.state.fatalEleven.lng}/>

                </GoogleMapReact>
            </div>
        </div>);
    }
}

export default Map;
