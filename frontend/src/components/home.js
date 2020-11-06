import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Home extends Component {
  render(){
    return(
      <div>
        {/*Image with Title*/}
        <Card shadow={0} style={{width: '100%', height: '850px', background: 'url(https://images.hdqwalls.com/wallpapers/red-bull-rb12-f1-ii.jpg) center / cover', margin: 'auto'}}>
          <div class="center-text">FORMULA ONE WORLD CHAMPIONS</div>
        </Card>

        {/*introduction modules, Race*/}
        <div className="intro-grid" style={{paddingTop: '80px', paddingBottom: '0px', marginLeft:'100px', marginRight: '100px'}}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>RACE</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>

          {/*Grand Prix*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>GRAND PRIX</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>

          {/*Qualifying*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>QUALIFYING</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>
        </div>

        {/*2nd row of introduction modules, point system*/}
        <div className="intro-grid" style={{paddingTop: '80px', paddingBottom: '100px', marginLeft:'100px', marginRight: '100px'}}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>POINT SYSTEM</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>

          {/*Circuit*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>CIRCUIT</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>

          {/*Stories*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>STORIES</CardTitle>
            <CardText>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <Button colored>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home;
