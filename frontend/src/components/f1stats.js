import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class F1stats extends Component {
  constructor(props){
    super(props);
    this.state = {activeTab: 0};
  }
  //activeTab is the tab to switch from DRIVERS to CONSTUCTORS

  render(){
    return(
      <div style={{width: '100%', margin: 0}}>
        {/*Image with Title*/}
        <Card shadow={0} style={{width: '100%', height: '600px', background: 'url(https://images7.alphacoders.com/613/613535.jpg) center / cover', margin: 'auto'}}>
          <div class="center-text">RACE STATISTICS</div>
        </Card>

        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Drivers</Tab>
          <Tab>Constuctors</Tab>
        </Tabs>
        <section>
            <div className="content">{this.toggleCategories()}</div>
        </section>
      </div>
    )
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      {/*Drivers Query*/}
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">Who is the .. driver</div>
        </div>
      )
      {/*Constructor Query*/}
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <div style={{paddingTop: '20px', paddingBottom: '20px'}} class="question-text">What is the .. constructor</div>
        </div>
      )
    }
  }
}

export default F1stats;
