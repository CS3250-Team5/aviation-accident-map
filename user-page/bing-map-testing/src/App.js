import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible : true,
      bingmapKey: /*API KEY HERE*/,
      pushPins : [
        {
          "location":[39.7392, 104.9903], "option":{ color: 'green' }, "addHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      infoboxesWithPushPins: [
        {
          "location":[39.7392, 104.9903],
          "addHandler":"mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Infobox Title', description: 'Infobox' },
          "pushPinOption":{ title: 'Pushpin Title', description: 'Pushpin' },
          "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
          "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        }
      ],
      searchInput: "",
      getLocationHandledData: "",
    }
  }

  handleSubmit(event){
    if(this.state.searchInput !== null && this.state.searchInput !== ""){
      this.setState({
        boundary: {
          "search" : this.state.searchInput,
          "polygonStyle" :{
            fillColor: 'rgba(161,224,255,0.4)',
            strokeColor: '#a495b2',
            strokeThickness: 2
          },
          "option":{
            entityType: 'PopulatedPlace'
          }
        }
      })
    }
    event.preventDefault();
  }
  GetLocationHandled(location){
    this.setState({
      getLocationHandledData: JSON.stringify(location)
    });
  }
  GetEventHandled(callbackData){
    console.log(callbackData);
  }
  render() {
    return (
      <div>
        {this.state.isVisible && (<div>
          <div className = "map-one">
          <u>Bingmaps with Pushpin (experimental)</u>
            <ReactBingmaps
              id = "two"
              className = "customClass"
              bingmapKey = {this.state.bingmapKey}
              center = {[0, 0]}
              mapTypeId = {"aerial"}
              pushPins = { this.state.pushPins }
            >
            </ReactBingmaps>
          </div>

          <div className = "map-two">
          <u>Bingmaps with Infobox and Pushpin (experimental)</u>
            <ReactBingmaps
              id = "four"
              center = {[0, 0]}
              className = "customClass"
              bingmapKey = {this.state.bingmapKey}
              infoboxesWithPushPins = {this.state.infoboxesWithPushPins}
            >
            </ReactBingmaps>
          </div>
        </div>)}
        <br />
      </div>
    );
  }
}

export default App;
