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
void function p0t1(){
  p0s = 'none'
}
var p0s = 'block'


class App extends Component {
  constructor(){
    super();
  this.state =
  {p0:'block',
  p1:'none',
  p2:'none',
  p3:'none',
  p4:'none',
  pf:'none'
  
  }

  }


  
p0t1 =() =>{
  console.log(this.state.display);
  this.setState({p0:'none',
p1:'block'});
}

p1t2 =() =>{
  console.log(this.state.display);
  this.setState({p1:'none',
p2:'block'});
}
p2t3 =() =>{
  console.log(this.state.display);
  this.setState({p2:'none',
p3:'block'});
}
p3t4 =() =>{
  console.log(this.state.display);
  this.setState({p3:'none',
p4:'block'});
}
p4tf =() =>{
  console.log(this.state.display);
  this.setState({p4:'none',
pf:'block'});
}

  render() {
    return (

      


      <div className="App">

      <div className="background">
      <div className="clouds">
      </div>
      </div>
      


      <div className ="allpannels">
      <div className="p0cont" style={{display: this.state.p0 }} >
      <div className="pannel0">
      <h3 className="text0">Welcome Admin</h3>
      <p className="text0h">Get Started!</p>
      <button className="button0" onClick= {this.p0t1} >Update Accident Map</button>
      </div>
      </div>
     
      <div className="p1cont" style={{display:this.state.p1}}>
      <div className="pannel1">
      <h3 className="text1">Step 1:</h3>
      <p className="text1h">Download Data from NTSB</p>
      <button className="button1" onClick= {this.p1t2}>Download</button>
      </div>
      </div>
      
      <div className="p2cont" style={{display:this.state.p2}}>
      <div className="pannel2">
      <h3 className="text2">Step 2:</h3>
      <p className="text2h">Choose State:
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
            </select>	</p>
      <button className="button2" onClick= {this.p2t3}>Next</button>
      </div>
      </div>
      
      <div className="p3cont" style={{display:this.state.p3}}>
      <div className="pannel3">
      <h3 className="text3">Step 3:</h3>
      <p className="text3h">Filtering Results...</p>
      <button className="button3"onClick= {this.p3t4}>Next</button>
      </div>
      </div>

       <div className="p4cont" style={{display:this.state.p4}}>
      <div className="pannel4">
      <h3 className="text4">Step 4:</h3>
      <p className="text4h">Upload Data</p>
      <button className="button4"onClick= {this.p4tf}>Finish</button>
      </div>
      </div>
      

       <div className="pfcont" style={{display:this.state.pf}}>
      <div className="pannelf">
      <h3 className="textf">!(Congradulations your data is updated)</h3>
      <div className="circle"><p className="textfh">Done!</p></div>
      
      </div>
      </div>
      

















      </div>
      {/*<div className="App">
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

*/}
      </div>
    );
  }
}

export default App;
