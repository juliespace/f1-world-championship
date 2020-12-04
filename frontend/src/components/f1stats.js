import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import TopDriverStatRow from './TopDriverStatRow';
import MostPointsDriverRow from './MostPointsDriverRow';
import LeastLapTimeConstructorRow from './LeastLapTimeConstructorRow';
import MostPointsConstructorsRow from './MostPointsConstructorsRow';

class F1stats extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
      // Q1
      driverTop: 5,
      driverSeason: "",
      topDriverStats:[],
      //Q2
      numberOfDrivers: "",
      driverStartSeason: "",
      driverEndSeason: "",
      mostPointsDrivers: [],
      // Constructor with Least Lap Time
      constructorStartSeason: "",
      constructorEndSeason:"",
      leastLapTimeConstructors:[],

      constructorTopNumber: "",
      constructorPointsStartSeason: "",
      constructorPointsEndSeason: "",
      mostPointsConstructors: []
    };

    this.handleTopDriverChange = this.handleTopDriverChange.bind(this);
    this.handleDriverSeasonChange = this.handleDriverSeasonChange.bind(this);
    this.submitDriverSeason = this.submitDriverSeason.bind(this);

    this.handleNumberOfDriversChange = this.handleNumberOfDriversChange.bind(this);
    this.handleDriverStartSeasonChange = this.handleDriverStartSeasonChange.bind(this);
    this.handleDriverEndSeasonChange = this.handleDriverEndSeasonChange.bind(this);
    this.submitDriverSeasonRange = this.submitDriverSeasonRange.bind(this);

    this.handleConstructorStartSeasonChange = this.handleConstructorStartSeasonChange.bind(this);
    this.handleConstructorEndSeasonChange = this.handleConstructorEndSeasonChange.bind(this);
    this.submitConstructorsSeasonRange = this.submitConstructorsSeasonRange.bind(this);

    this.handleConstructorTopNumber = this.handleConstructorTopNumber.bind(this);
    this.handleConstructorPointsStartSeasonChange = this.handleConstructorPointsStartSeasonChange.bind(this);
    this.handleConstructorPointsEndSeasonChange = this.handleConstructorPointsEndSeasonChange.bind(this);
    this.submitConstructorParaForMostPoints = this.submitConstructorParaForMostPoints.bind(this);
  }
  //activeTab is the tab to switch from DRIVERS to CONSTUCTORS

 //Top 10 Drivers Used the Least Average Lap Time
  handleTopDriverChange(e) {
      this.setState({
        driverTop: e.target.value
      });
  }

  handleDriverSeasonChange(e) {
      this.setState({
        driverSeason: e.target.value
      });
  }

  submitDriverSeason() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "http://localhost:8000/f1/driver/laptime?number=10&season=" + this.state.driverSeason;
    fetch(targetUrl, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
    })
    .then(res => {
      // Convert the response data to JSON
      return res.json();
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(topDriverData => {
      if (!topDriverData) return;
      console.log(topDriverData); //displays your JSON object in the console
      let topDriverStatsList = topDriverData.data;
      let topDriverStatsDivs = topDriverStatsList.map((topDriverStatObj, i) =>
        <TopDriverStatRow forename={topDriverStatObj.forename} surname={topDriverStatObj.surname} milliseconds={topDriverStatObj.milliseconds}/>
      );
      this.setState({
        topDriverStats: topDriverStatsDivs
      });

    });
  }

  //The driver that gets the most points in  history

  handleDriverStartSeasonChange(e) {
      this.setState({
        driverStartSeason: e.target.value
      });
  }

  handleDriverEndSeasonChange(e) {
      this.setState({
        driverEndSeason: e.target.value
      });
  }

  handleNumberOfDriversChange(e) {
      this.setState({
        numberOfDrivers: e.target.value
      });
  }


  submitDriverSeasonRange() {
    var num = this.state.numberOfDrivers;
    var start = this.state.driverStartSeason;
    var end = this.state.driverEndSeason;
    var targetUrl = "http://localhost:8000/f1/driver/points?number=" + num + "&start_year=" + start + "&end_year=" + end;
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json();
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(mostPointsDriversData => {
      if (!mostPointsDriversData) return;
      console.log(mostPointsDriversData);
      let mostPointsDriversList = mostPointsDriversData.data;
      let mostPointsDriversDivs = mostPointsDriversList.map((MostPointsDriversObj, i) =>
        <MostPointsDriverRow forename={MostPointsDriversObj.forename} surname={MostPointsDriversObj.surname} points={MostPointsDriversObj.points}/>
      );
      this.setState({
        mostPointsDrivers: mostPointsDriversDivs
      });
    }, err => {
      // Print the error if there is one.
        console.log(err);
    });
  }

  //Constructors Having the Least Average Lap Time

  handleConstructorStartSeasonChange(e) {
      this.setState({
        constructorStartSeason: e.target.value
      });
  }

  handleConstructorEndSeasonChange(e) {
      this.setState({
        constructorEndSeason: e.target.value
      });
  }

  submitConstructorsSeasonRange() {
    var start = this.state.constructorStartSeason;
    var end = this.state.constructorEndSeason;
    var targetUrl = "http://localhost:8000/f1/constructor/laptime?number=10&start_year=" + start + "&end_year=" + end;
    // http://localhost:8000/f1/constructor/points?number=10&start_year=1990&end_year=2000
    console.log(targetUrl);
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json();
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(leastLapTimeConstructorData => {
      if (!leastLapTimeConstructorData) return;
      console.log(leastLapTimeConstructorData);
      let leastLapTimeConstructorList = leastLapTimeConstructorData.data;
      let leastLapTimeConstructorDivs = leastLapTimeConstructorList.map((leastLapTimeConstructorObj, i) =>
        <LeastLapTimeConstructorRow constructorName={leastLapTimeConstructorObj.constructorName} averageLapTime={leastLapTimeConstructorObj.averageLapTime}/>
      );
      this.setState({
        leastLapTimeConstructors: leastLapTimeConstructorDivs
      });
    }, err => {
      // Print the error if there is one.
        console.log(err);
    });
  }



  // Constructor with the most points

  handleConstructorTopNumber(e){
      this.setState({
        constructorTopNumber: e.target.value
      });
  }

  handleConstructorPointsStartSeasonChange(e) {
      this.setState({
        constructorPointsStartSeason: e.target.value
      });
  }

  handleConstructorPointsEndSeasonChange(e) {
      this.setState({
        constructorPointsEndSeason: e.target.value
      });
  }

  submitConstructorParaForMostPoints() {
    var topNumber = this.state.constructorTopNumber;
    var start = this.state.constructorPointsStartSeason;
    var end = this.state.constructorPointsEndSeason;
    var targetUrl = "http://localhost:8000/f1/constructor/points?number=" + topNumber + "&start_year=" + start + "&end_year=" + end;
    console.log(targetUrl);
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json();
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(mostPointsConstructorsData => {
      if (!mostPointsConstructorsData) return;
      console.log(mostPointsConstructorsData); //displays your JSON object in the console
      let mostPointsConstructorsList = mostPointsConstructorsData.data;
      let mostPointsConstructorsDivs = mostPointsConstructorsList.map((MostPointsConstructorsRowObj, i) =>
        <MostPointsConstructorsRow constructorName={MostPointsConstructorsRowObj.constructorName} points={MostPointsConstructorsRowObj.points} />
      );
      this.setState({
        mostPointsConstructors: mostPointsConstructorsDivs
      });
    }, err => {
      // Print the error if there is one.
        console.log(err);
    });
  }


  render(){
    return(
      <div style={{width: '100%', margin: 0}}>
        {/*Image with Title*/}
        <Card shadow={0} style={{width: '100%', height: '600px', background: 'url(https://images7.alphacoders.com/613/613535.jpg) center / cover', margin: 'auto'}}>
          <div className="center-text">RACE STATISTICS</div>
        </Card>

        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Drivers w/ Least Lap Time</Tab>
          <Tab>Drivers w/ Most Points</Tab>
          <Tab>Constuctors w/ Least Lap Time</Tab>
          <Tab>Constuctors w/ Most Points</Tab>
        </Tabs>
        <section>
            <div className="content">{this.toggleCategories()}</div>
        </section>
      </div>
    )
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      {/*First Driver Query*/}
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '5px'}} class="question-text">Top 10 Drivers Used the Least Average Lap Time</div>
          <div class="example-text">example: The top 10 drivers that used the least average lap time in the 2019.</div>
          <br></br>
          <div className="input-container">
            <input type='text' placeholder="Enter Season i.e. 2019" value={this.state.driverSeason} onChange={this.handleDriverSeasonChange} id="driverSeason"/>
            <button id="submitDriverSeasonBtn" onClick={this.submitDriverSeason}>Submit</button>
          </div>
            <div className="topDriverHeaders">
            <div className="items"><strong>Forename</strong></div>
            <div className="items"><strong>Surname</strong></div>
            <div className="items"><strong>Milliseconds</strong></div>
          </div>
          <div>
            {this.state.topDriverStats}
          </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
      {/*Constructor Query*/}
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">The top (N)drivers got the most points from Year(xxxx) to Year(xxxx)</div>
          <div className="example-text">example: The driver that gets the most points in  history, top 10 drivers with the most points from 2018 to 2019</div>
          <br></br>
          <div className="input-container-threeInput">
            <input type='text' placeholder="Enter Top Count i.e. 5" value={this.state.numberOfDrivers} onChange={this.handleNumberOfDriversChange} id="numberOfDrivers" className="season-input"/>
            <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.driverStartSeason} onChange={this.handleDriverStartSeasonChange} id="driverStartSeason" className="season-input"/>
            <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.driverEndSeason} onChange={this.handleDriverEndSeasonChange} id="driverEndSeason" className="season-input"/>
            <button id="submitDriverSeasonBtn" className="submit-btn" onClick={this.submitDriverSeasonRange}>Submit</button>
          </div>
          <div className="topDriverHeaders">
            <div className="items"><strong>Forename:</strong></div>
            <div className="items"><strong>Surname:</strong></div>
            <div className="items"><strong>Points:</strong></div>
         </div>
         <div>
            {this.state.mostPointsDrivers}
         </div>
         <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">Constructors Having the Least Average Lap Time</div>
          <div className="example-text">example: The top ten constructors that have the least average lap time from 1950 to 2020.</div>
          <br></br>
          <div className="input-container-twoInput">
            <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.constructorStartSeason} onChange={this.handleConstructorStartSeasonChange} id="construtorStartSeason"/>
            <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.constructorEndSeason} onChange={this.handleConstructorEndSeasonChange} id="constructorEndSeason"/>
            <button id="submitConstructorSeasonBtn" className="submit-btn" onClick={this.submitConstructorsSeasonRange}>Submit</button>
          </div>
          <div className="topConstructorHeaders">
            <div className="items"><strong>Constructor:</strong></div>
            <div className="items"><strong>AvgLapTime:</strong></div>
          </div>
          <div>
            {this.state.leastLapTimeConstructors}
          </div>
          <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">Constructor with the Most Points.</div>
          <div className="example-text">example: Top 20 constructors with the Most Points from 1998 to 2003.</div>
          <br></br>
          <div className="input-container-threeInput">
            <input type='text' placeholder="Enter Top Count i.e. 5" value={this.state.constructorTopNumber} onChange={this.handleConstructorTopNumber} id="constructorTopNumber" className="season-input"/>
            <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.constructorPointsStartSeason} onChange={this.handleConstructorPointsStartSeasonChange} id="construtorStartSeason" className="season-input"/>
            <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.constructorPointsEndSeason} onChange={this.handleConstructorPointsEndSeasonChange} id="constructorEndSeason" className="season-input"/>
            <button id="submitConstructorPointsSeasonBtn" className="submit-btn" onClick={this.submitConstructorParaForMostPoints}>Submit</button>
          </div>
          <div className="topConstructorHeaders">
            <div className="items"><strong>Constructor:</strong></div>
            <div className="items"><strong>Points:</strong></div>
          </div>
          <div>
            {this.state.mostPointsConstructors}
          </div>
          <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }
  }
}



export default F1stats;
