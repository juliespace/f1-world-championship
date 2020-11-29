import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class F1ecnomics extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
    };
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
        {/* First Query here */}
        </div>
      )
    }else if(this.state.activeTab === 1){
      return(
        <div>
        {/* Second Query here */}
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div>
        {/* Third Query here */}
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div>
        {/* Forth Query here */}
        </div>
      )
    }
  }
}

export default F1ecnomics;
