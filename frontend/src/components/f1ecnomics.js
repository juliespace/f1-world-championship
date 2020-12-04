import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import GDPTrendRow from './GDPTrendRow';
import GDPRankingsRow from './GDPRankingsRow';
import TopNPlayerHomeRow from './TopNPlayerHomeRow';
import TopMDriverTopNCountryRow from './TopMDriverTopNCountryRow';

class F1ecnomics extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,

      topNplayer : "",
      topNPlayerHomeResults: [],

      playerid: "",
      lastNyears: "",
      gdpTrendResults: [],

      driverpcg: "",
      countrypcg: "",
      topMDriverTopNCountryResults:[],

      yearChange: "",
      gdpRankingsResults:[]
    };

    this.handleTopNChange = this.handleTopNChange.bind(this);
    this.submitTopNplayer = this.submitTopNplayer.bind(this);

    this.handlePlayeridChange = this.handlePlayeridChange.bind(this);
    this.handleLastNyearsChange = this.handleLastNyearsChange.bind(this);
    this.submitGDPTrend = this.submitGDPTrend.bind(this);

    this.handleCountryPercentageChange = this.handleCountryPercentageChange.bind(this);
    this.handleDriverPercentageChange = this.handleDriverPercentageChange.bind(this);
    this.submitTopDriverTopCountry = this.submitTopDriverTopCountry.bind(this);

    this.handleYearChange = this.handleYearChange.bind(this);
    this.submitGDPRankings = this.submitGDPRankings.bind(this);

  }


   //Top N% Players' Homeland Information
  handleTopNChange(e) {
      this.setState({
        topNplayer: e.target.value
      });
  }


  submitTopNplayer() {
    const targetUrl = "http://localhost:8000/f1/gdp/top_driver_homeland_gdp?n=" + this.state.topNplayer;
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
    }).then(topNPlayerHomeData => {
      if (!topNPlayerHomeData) return;
      console.log(topNPlayerHomeData); //displays your JSON object in the console
      let topNPlayerHomeList = topNPlayerHomeData.data;
      let topNPlayerHomeDivs = topNPlayerHomeList.map((topNPlayerHomeObj, i) =>
        <TopNPlayerHomeRow totalGDP={topNPlayerHomeObj.totalGDP} countryName={topNPlayerHomeObj.countryName}/>
      );
      this.setState({
        topNPlayerHomeResults: topNPlayerHomeDivs
      });
    },err => {
      // Print the error if there is one.
        console.log(err);
    });
  }

  //GDP Trend

  handlePlayeridChange(e) {
      this.setState({
        playerid: e.target.value
      });
  }

  handleLastNyearsChange(e) {
      this.setState({
        lastNyears: e.target.value
      });
  }

  submitGDPTrend() {
    var id = this.state.playerid;
    var year = this.state.lastNyears;
    var targetUrl = "http://localhost:8000/f1/gdp/homeland_gdp_trend?id=" + id + "&years=" + year;
    fetch(targetUrl,
    {
      method: "GET"
    }).then(res => {
      // Convert the response data to JSON
      return res.json();
    }, err => {
      // Print error if there is one
      console.log(err);
    }).then(gdpTrendResultsData => {
      if (!gdpTrendResultsData) return;
      console.log(gdpTrendResultsData);
      let gdpTrendResultsList = [gdpTrendResultsData.data];
      let gdpTrendResultsDivs = gdpTrendResultsList.map((gdpTrendResultsObj, i) =>
        <GDPTrendRow first_year={gdpTrendResultsObj.first_year} last_year={gdpTrendResultsObj.last_year} gdp_trend={gdpTrendResultsObj.gdp_trend}/>
      );
      this.setState({
        gdpTrendResults: gdpTrendResultsDivs
      });
    }, err => {
      // Print the error if there is one.
        console.log(err);
    });
  }

  //Top M% Drivers and Top N% Countries

  handleDriverPercentageChange(e) {
      this.setState({
        driverpcg: e.target.value
      });
  }

  handleCountryPercentageChange(e) {
      this.setState({
        countrypcg: e.target.value
      });
  }

  submitTopDriverTopCountry() {
    var dpcg = this.state.driverpcg;
    var cpcg = this.state.countrypcg;
    var targetUrl = "http://localhost:8000/f1/gdp/top_drivers_in_top_countries?m=" + dpcg + "&n=" + cpcg;
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
    }).then(topMDriverTopNCountryResultsData => {
      if (!topMDriverTopNCountryResultsData) return;
      console.log(topMDriverTopNCountryResultsData);
      let topMDriverTopNCountryResultsList = topMDriverTopNCountryResultsData.data;
      let topMDriverTopNCountryResultsDivs = topMDriverTopNCountryResultsList.map((topMDriverTopNCountryResultsObj, i) =>
        <TopMDriverTopNCountryRow id={topMDriverTopNCountryResultsObj.id} forename={topMDriverTopNCountryResultsObj.forename} surname={topMDriverTopNCountryResultsObj.surname} totalPoints={topMDriverTopNCountryResultsObj.totalPoints} countryName={topMDriverTopNCountryResultsObj.countryName} gdp={topMDriverTopNCountryResultsObj.gdp}/>
      );
      this.setState({
        topMDriverTopNCountryResults: topMDriverTopNCountryResultsDivs
      });
    }, err => {
      // Print the error if there is one.
        console.log(err);
    });
  }


// GDP Rankings of Countries
  handleYearChange(e) {
      this.setState({
        yearChange: e.target.value
      });
  }

  submitGDPRankings() {
    var year = this.state.yearChange;
    var targetUrl = "http://localhost:8000/f1/gdp/country_host_f1?year="+ year;
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
    }).then(gdpRankingsResultsData => {
      if (!gdpRankingsResultsData) return;
      console.log(gdpRankingsResultsData);
      let gdpRankingsResultsList = gdpRankingsResultsData.data;
      let gdpRankingsResultsDivs = gdpRankingsResultsList.map((gdpRankingsResultsObj, i) =>
        <GDPRankingsRow year={gdpRankingsResultsObj.year} gdp={gdpRankingsResultsObj.gdp} countryName={gdpRankingsResultsObj.countryName} />
      );
      this.setState({
        gdpRankingsResults: gdpRankingsResultsDivs
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
        <Card shadow={0} style={{width: '100%', height: '600px', background: 'url(https://www.yu.edu/sites/default/files/Economics-538811846.jpg) center / cover', margin: 'auto'}}>
          <div class="center-text">F1 & WORLD ECNOMICS</div>
        </Card>

        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Top Drivers' Home Countries </Tab>
          <Tab>GDP Trend</Tab>
          <Tab>Top Drivers & Top GDP Countries</Tab>
          <Tab>GDP rankings</Tab>
        </Tabs>
        <section>
            <div className="content">{this.toggleCategories()}</div>
        </section>
      </div>
    )
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '5px'}} class="question-text">Top N% Players' Homeland Information</div>
          <div class="example-text">example: Number of players in N% (user input) of all players who are top 10% players (by points), display their country’s GDP, group by country, GDP.</div>
          <br></br>
          <div className="input-container">
            <input type='text' placeholder="Enter a number i.e. 20" value={this.state.topNplayer} onChange={this.handleTopNChange} id="playerNumber"/>
            <button id="submitTopNPlayerBtn" onClick={this.submitTopNplayer}>Submit</button>
          </div>
            <div className="topNPlayerHomeHeaders">
            <div className="items"><strong>TotalGDP</strong></div>
            <div className="items"><strong>CountryName</strong></div>
          </div>
          <div>
            {this.state.topNPlayerHomeResults}
          </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '5px'}} class="question-text">GDP Trend</div>
          <div class="example-text">example: The GDP trend within the last N (user input) years of the home country of player X (user input).</div>
          <br></br>
          <div className="input-container-twoInput">
            <input type='text' placeholder="Enter a number i.e. 20" value={this.state.playerid} onChange={this.handlePlayeridChange} id="playerid"/>
            <input type='text' placeholder="Enter a number i.e. 20" value={this.state.lastNyears} onChange={this.handleLastNyearsChange} id="lastNyears"/>
            <button id="submitGDPTrendBtn" className="submit-btn" onClick={this.submitGDPTrend}>Submit</button>
          </div>
            <div className="topDriverHeaders">
            <div className="items"><strong>First Year</strong></div>
            <div className="items"><strong>Last Year</strong></div>
            <div className="items"><strong>GDP Trend</strong></div>
          </div>
          <div>
            {this.state.gdpTrendResults}
          </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '5px'}} class="question-text">Top M% Drivers and Top N% Countries</div>
          <div class="example-text">example: Countries with top N% (user input) GDP and number of top M% (user input) drivers whose nationality are these counties..</div>
          <br></br>
          <div className="input-container-twoInput">
            <input type='text' placeholder="Enter a number M i.e. 20" value={this.state.driverpcg} onChange={this.handleDriverPercentageChange} id="driverpcg"/>
            <input type='text' placeholder="Enter a number N i.e. 20" value={this.state.countrypcg} onChange={this.handleCountryPercentageChange} id="countrypcg"/>
            <button id="submitTopDriverTopCountryBtn" className="submit-btn" onClick={this.submitTopDriverTopCountry}>Submit</button>
          </div>
          <div className="topMDriverTopNCountryHeaders">
            <div className="items"><strong>Id</strong></div>
            <div className="items"><strong>Forename</strong></div>
            <div className="items"><strong>Surname</strong></div>
            <div className="items"><strong>TotalPoints</strong></div>
            <div className="items"><strong>CountryName</strong></div>
            <div className="items"><strong>GDP</strong></div>
          </div>
          <div>
            {this.state.topMDriverTopNCountryResults}
          </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '5px'}} class="question-text">GDP Rankings of Countries</div>
          <div class="example-text">example: CGDP rankings of all countries hosting F1 in a year of chosen (user input) circuits</div>
          <br></br>
          <div className="input-container">
            <input type='text' placeholder="Enter a year i.e. 1990" value={this.state.yearChange} onChange={this.handleYearChange} id="yearChange"/>
            <button id="submitGDPRankingsBtn" className="submit-btn" onClick={this.submitGDPRankings}>Submit</button>
          </div>
            <div className="gdpRankingsHeaders">
            <div className="items"><strong>Year</strong></div>
            <div className="items"><strong>GDP</strong></div>
            <div className="items"><strong>CountryName</strong></div>
          </div>
          <div>
            {this.state.gdpRankingsResults}
          </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}} class="question-text">  </div>
        </div>
      )
    }
  }
}

export default F1ecnomics;
