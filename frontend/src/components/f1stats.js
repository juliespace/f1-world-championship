import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import TopDriverStatRow from './TopDriverStatRow';
import MostPointsDriverRow from './MostPointsDriverRow';
import LeastLapTimeConstructorRow from './LeastLapTimeConstructorRow';


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
      driverStartSeason: "",
      driverEndSeason: "",
      mostPointsDrivers: [],
      // Constructor with Least Lap Time
      constructorEndSeason: "",
      constructorEndSeason:"",
      leastLapTimeConstructors:[],


      mostPointsConstructors: []
    };

    this.handleTopDriverChange = this.handleTopDriverChange.bind(this);
    this.handleDriverSeasonChange = this.handleDriverSeasonChange.bind(this);
    this.submitDriverSeason = this.submitDriverSeason.bind(this);

    this.handleDriverStartSeasonChange = this.handleDriverStartSeasonChange.bind(this);
    this.handleDriverEndSeasonChange = this.handleDriverEndSeasonChange.bind(this);
    this.submitDriverSeasonRange = this.submitDriverSeasonRange.bind(this);

    this.handleConstructorStartSeasonChange = this.handleConstructorStartSeasonChange.bind(this);
    this.handleConstructorEndSeasonChange = this.handleConstructorEndSeasonChange.bind(this);
    this.submitConstructorsSeasonRange = this.submitConstructorsSeasonRange.bind(this);
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
    const targetUrl = "http://localhost:8000/f1/driver/laptime?number=5&season=" + this.state.driverSeason;
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

  // submitDriverStartEndSeason() {
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //   const targetUrl = "http://localhost:8000/f1/driver/laptime?number=5&season=" + this.state.driverSeason;
  //   fetch(proxyUrl + targetUrl, {
  //     headers: {
  //       "X-Requested-With": "XMLHttpRequest"
  //     },
  //   })
  //   .then(res => {
  //     // Convert the response data to JSON
  //     return res.json();
  //   }, err => {
  //     // Print error if there is one
  //     console.log(err);
  //   }).then(topDriverStatsList => {
  //     if (!topDriverStatsList) return;
  //     console.log(topDriverStatsList); //displays your JSON object in the console
  //     //
  //     let topDriverStatsDivs = topDriverStatsList.map((topDriverStatObj, i) =>
  //       <TopDriverStatRow forename={topDriverStatObj.forename} surname={topDriverStatObj.surname} milliseconds={topDriverStatObj.milliseconds}/>
  //     );

  //     this.setState({
  //       topDriverStats: topDriverStatsDivs
  //     });

  //   });
  // }

// for Q3:
  /*fetch possible seasons */
  // componentDidMount() {
  //   fetch("http://localhost:8081/decades",
  //     {
  //       method: 'GET' // The type of HTTP request.
  //     }).then(res => {
  //       // Convert the response data to a JSON.
  //       return res.json();
  //     }, err => {
  //       // Print the error if there is one.
  //       console.log(err);
  //     }).then(decadesList => {
  //       if (!decadesList) return;
  //       // Map each decadesObj in genreList to an HTML element:
  //       // A button which triggers the showMovies function for each genre.
  //       let decadesDivs = decadesList.map((decadesObj, i) =>
  //       <option value={decadesObj.decade}>{decadesObj.decade}</option>
  //       );
  //       this.setState({
  //         decades: decadesDivs
  //       });
  //     }, err => {
  //       // Print the error if there is one.
  //       console.log(err);
  //     });
  // }



  submitDriverSeasonRange() {
    var start = this.state.driverStartSeason;
    var end = this.state.driverEndSeason;
    var targetUrl = "http://localhost:8000/f1/driver/points?number=5&start_year=" + start + "&end_year=" + end;
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json().data;
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(mostPointsDriversList => {
      if (!mostPointsDriversList) return;
      console.log(mostPointsDriversList); //displays your JSON object in the console
      //
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
      return res.json().data;
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(leastLapTimeConstructorList => {
      if (!leastLapTimeConstructorList) return;
      console.log(leastLapTimeConstructorList); //displays your JSON object in the console
      //
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

  submitConstructorParaForMostPoints() {
    var topNumber = this.state.constructorTopNumber;
    var start = this.state.constructorStartSeason;
    var end = this.state.constructorEndSeason;
    var targetUrl = "http://localhost:8000/f1/constructor/points?number=" + topNumber + "&start_year=" + start + "&end_year=" + end;
    // 'http://localhost:8000/f1/constructor/points?number=10&start_year=1990&end_year=2000'
    console.log(targetUrl);
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json().data;
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(leastLapTimeConstructorList => {
      if (!leastLapTimeConstructorList) return;
      console.log(leastLapTimeConstructorList); //displays your JSON object in the console
      //
      let leastLapTimeConstructorDivs = leastLapTimeConstructorList.map((LeastLapTimeConstructorObj, i) =>
        <LeastLapTimeConstructorRow constructorName={LeastLapTimeConstructorObj.constructorName} averageLapTime={LeastLapTimeConstructorObj.averageLapTime}/>
      );
      this.setState({
        leastLapTimeConstructors: leastLapTimeConstructorDivs
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

        {/*
        // <div className="container bestgenres-container">
        //   <div className="jumbotron">
        //   <div className="h5">Drivers with most points in history</div>
        //   <div className="h5">top x drivers with the most points from YYYY to YYYY</div>
        //   <div className="years-container">
        //     <div className="dropdown-container">
        //     <select value={this.state.selectedStartDecade} onChange={this.handleStartYearChange} className="dropdown" id="decadesDropdown">
        //       <option select value> -- select start year -- </option>
        //       {this.state.startYear}
        //     </select>
        //     <select value={this.state.selectedEndDecade} onChange={this.handleEndYearChange} className="dropdown" id="decadesDropdown">
        //       <option select value> -- select end year -- </option>
        //       {this.state.endYear}
        //     </select>
        //     <button className="submit-btn" id="decadesSubmitBtn" onClick={this.submitDecade}>Submit</button>
        //     </div>
        //   </div>
        //   </div>
        //   <div className="jumbotron">
        //   <div className="topDriverStats-container">
        //     <div className="topDriverStats">
        //     <div className="header"><strong>Forename:</strong></div>
        //     <div className="header"><strong>Surname:</strong></div>
        //     <div className="header"><strong>Points:</strong></div>
        //     </div>
        //     <div className="topDriverStats-container" id="results">
        //     {this.state.mostPointsDrivers}
        //     </div>
        //   </div>
        //   </div>
        // </div>
        */}
      </div>
    )
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      {/*Drivers Query*/}
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">Who is the .. driver</div>
          <div className="container driverTopics-container">
            <div className="jumbotron">
              <div className="h5">Top 10 Drivers Used the Least Average Lap Time.</div>
              <div className="h5">example: The top 10 drivers that used the least average lap time in the 2019.</div>
              <br></br>
              <div className="input-container">
                {/*<input type='text' placeholder="Enter a number i.e. 5" value={this.state.movieName} onChange={this.handleMovieNameChange} id="movieName" className="movie-input"/>
                <button id="submitMovieBtn" className="submit-btn" onClick={this.submitMovie}>Submit</button> */}
                <input type='text' placeholder="Enter Season i.e. 2019" value={this.state.driverSeason} onChange={this.handleDriverSeasonChange} id="driverSeason" className="movie-input"/>
                <button id="submitDriverSeasonBtn" className="submit-btn" onClick={this.submitDriverSeason}>Submit</button>
              </div>
              <div className="header-container">
                <div className="h6">Result is ...</div>
                <div className="headers">
                  <div className="header"><strong>Forename:</strong></div>
                  <div className="header"><strong>Surname:</strong></div>
                  <div className="header"><strong>Milliseconds:</strong></div>
                </div>
              </div>
              <div className="results-container" id="results">
                {this.state.topDriverStats}
              </div>
            </div>
          </div>
        </div>
      )
      {/*Constructor Query*/}
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">What is the .. constructor</div>
          <div className="container driverTopics-container">
            <div className="jumbotron">
              <div className="h5">The driver that gets the most points in  history, top x drivers with the most points from YYYY to YYYY.</div>
              <div className="h5">example: The driver that gets the most points in  history, top 10 drivers with the most points from 2018 to 2019</div>
              <br></br>
              <div className="input-container">
                <input type='text' placeholder="Enter Top Count i.e. 5" value={this.state.driverStartSeason} onChange={this.handleDriverStartSeasonChange} id="driverStartSeason" className="season-input"/>
                <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.driverStartSeason} onChange={this.handleDriverStartSeasonChange} id="driverStartSeason" className="season-input"/>
                <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.driverEndSeason} onChange={this.handleDriverEndSeasonChange} id="driverEndSeason" className="season-input"/>
                <button id="submitDriverSeasonBtn" className="submit-btn" onClick={this.submitDriverSeasonRange}>Submit</button>
              </div>
              <div className="header-container">
                <div className="h6">Result is ...</div>
                <div className="headers">
                  <div className="header"><strong>Forename:</strong></div>
                  <div className="header"><strong>Surname:</strong></div>
                  <div className="header"><strong>Points:</strong></div>
                </div>
              </div>
              <div className="results-container" id="results">
                {this.state.mostPointsDrivers}
              </div>
            </div>
          </div>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div>
        <div className="container ConstructorsTopics-container">
          <div className="jumbotron">
            <div className="h5">Constructors Having the Least Average Lap Time</div>
            <div className="h5">example: The top ten constructors that have the least average lap time from 1950 to 2020.</div>
            <br></br>
            <div className="input-container">
              <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.constructorStartSeason} onChange={this.handleConstructorStartSeasonChange} id="construtorStartSeason" className="season-input"/>
              <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.constructorEndSeason} onChange={this.handleConstructorEndSeasonChange} id="constructorEndSeason" className="season-input"/>
              <button id="submitConstructorSeasonBtn" className="submit-btn" onClick={this.submitConstructorsSeasonRange}>Submit</button>
            </div>
            <div className="header-container">
              <div className="h6">Result is ...</div>
              <div className="headers">
                <div className="header"><strong>constructorName:</strong></div>
                <div className="header"><strong>averageLapTime:</strong></div>
              </div>
            </div>
            <div className="results-container" id="results">
              {this.state.leastLapTimeConstructors}
            </div>
          </div>
        </div>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div>
        <div className="container ConstructorsTopics-container">
          <div className="jumbotron">
            <div className="h5">Constructor with the most points.</div>
            <div className="h5">The constructor with the most points in history (top x constructors with the most points from YYYY to YYYY).</div>
            <br></br>
            <div className="input-container">
              {/*<input type='text' placeholder="Enter a number i.e. 5" value={this.state.movieName} onChange={this.handleMovieNameChange} id="movieName" className="movie-input"/>
              <button id="submitMovieBtn" className="submit-btn" onClick={this.submitMovie}>Submit</button> */}
              <input type='text' placeholder="Enter start Season i.e. 2018" value={this.state.driverStartSeason} onChange={this.handleDriverStartSeasonChange} id="driverStartSeason" className="season-input"/>
              <input type='text' placeholder="Enter end Season i.e. 2019" value={this.state.driverEndSeason} onChange={this.handleDriverEndSeasonChange} id="driverEndSeason" className="season-input"/>
              <button id="submitDriverSeasonBtn" className="submit-btn" onClick={this.submitConstructorParaForMostPoints}>Submit</button>
            </div>
            <div className="header-container">
              <div className="h6">Result is ...</div>
              <div className="headers">
                <div className="header"><strong>Forename:</strong></div>
                <div className="header"><strong>Surname:</strong></div>
                <div className="header"><strong>Points:</strong></div>
              </div>
            </div>
            <div className="results-container" id="results">
              {this.state.mostPointsConstructors}
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
}



export default F1stats;
