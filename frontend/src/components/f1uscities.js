import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class F1UsCities extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 0}}>
        {/*Image with Title*/}
        <Card shadow={0} style={{width: '100%', height: '600px', background: 'url(https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F161205160609-paul-ricard-circuit-ferrari-2016.jpg) center / cover', margin: 'auto'}}>
          <div class="center-text">US HOSTING CITIES</div>
        </Card>
      </div>



      
    )
  }
}

export default F1UsCities;
