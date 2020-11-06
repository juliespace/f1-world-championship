import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class F1stats extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 0}}>
        {/*Image with Title*/}
        <Card shadow={0} style={{width: '100%', height: '600px', background: 'url(https://images7.alphacoders.com/613/613535.jpg) center / cover', margin: 'auto'}}>
          <div class="center-text">RACE STATISTICS</div>
        </Card>
      </div>
    )
  }
}

export default F1stats;
