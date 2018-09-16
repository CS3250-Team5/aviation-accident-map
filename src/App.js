import React, { Component } from 'react';
import aircraft from './aircraft.png';
import upload from './upload.png';
import './App.css';



const from = {
    fontSize: '5vh',
    marginLeft: '5%',
    marginTop: '5%',
    paddingBottom: '5%'
  

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={aircraft} className="aircraft" alt="aircraft" />
          <h1 className="title">Aviation Aircraft Accident Map Admin Page</h1>
        </header>

        
        <button  type="button"class="my-float">Apply Changes</button>
        
        <div>
        <p className="text">Upload new data: <img src={upload} className="upload" alt="upload" /></p>
        </div>
        <hr></hr>
        <div>
          <p className="text">Choose state: 
          <select className="dropdown">
          <option value=""></option>
            	<option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>			
           </p>
        </div>
        <hr></hr>
        <div>

        </div>
<p className="text">Date Range:  <span style={from}>From(</span>
<input type="text" className="dates" placeholder="mm/dd/yyy" ></input>) To (
<input type="text"className="dates" placeholder="mm/dd/yyy"></input>) 
</p>
        <hr></hr>

        <p className="text">Filters on map:   
            <input type="checkbox" className="check" id="airports" 
                   name="airports" value="airports"  />
            <label className="checktext"for="airports">Airports</label>
            <input type="checkbox" className="check" id="MountainPasses" 
                   name="MountainPasses" value="MountainPasses"  />
            <label className="checktext"for="MountainPasses">Mountain Passes</label>

         </p>
         <hr></hr>
         <p className="text">Accident type:   
            <input type="checkbox" className="check" id="fatal" 
                   name="fatial" value="fatal"  />
            <label className="checktext"for="fatal">Fatal</label>
            <input type="checkbox" className="check" id="severe" 
                   name="severe" value="severe"  />
            <label className="checktext"for="severe">Severe</label>

         </p>


      </div>
    );
  }
}

export default App;
