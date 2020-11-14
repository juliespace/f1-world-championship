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
          <Card shadow={5} style={{Width: '450', Height: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pOIWt2Cb1lanzj3kdBk2Am-zlhh1AROF_w&usqp=CAU) center / cover'}}>RACE</CardTitle>
            <CardText style={{Height: '150px'}}>
            A Formula One race or Grand Prix is a sporting event which takes place over three days (usually Friday to Sunday), with a series of practice and qualifying sessions prior to a race on Sunday.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>

          {/*Grand Prix*/}
          <Card shadow={5} style={{Width: '450', Height: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://k8q7r7a2.stackpathcdn.com/wp-content/uploads/2016/06/ferrari-275-f1-1950.jpg) center / cover'}}>GRAND PRIX</CardTitle>
            <CardText style={{Height: '150px'}}>
            The Formula 1 World Championship, which began in 1950, was borne primarily from the grand prix motor races that became popular around Europe in the 1920s and 1930s, since then more than 900 races have taken place.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship#Grands_Prix" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>

          {/*Qualifying*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://a.sidepodcast.com/content/2011/04/f1_live_timing_app.png) center / cover'}}>QUALIFYING</CardTitle>
            <CardText>
            During the first phase of qualifying, if the circuit is dry, any driver who is eliminated in the first qualifying session and fails to set a lap within 107 percent of the fastest time in that session will not be allowed to start the race.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/107%25_rule" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        {/*2nd row of introduction modules, point system*/}
        <div className="intro-grid" style={{paddingTop: '80px', paddingBottom: '100px', marginLeft:'100px', marginRight: '100px'}}>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.the-race.com/wp-content/uploads/2020/07/13113948/Verstappen-96-Ferrari-1024x576.jpg) center / cover'}}>POINT SYSTEM</CardTitle>
            <CardText>
            The championships are awarded each year to the driver and constructor who accumulate the most championship points over the course of the championship season, points were only awarded to each constructor for its single best-finishing driver in a points-scoring position.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/List_of_Formula_One_World_Championship_points_scoring_systems" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>

          {/*Circuit*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-cdn.mclaren.com/media/images/articles/hero/F1_wallpaper_Calendar_1920x1080.jpg) center / cover'}}>CIRCUIT</CardTitle>
            <CardText>
            The Formula One World Championship season consists of a series of races, known as Grands Prix, usually held on purpose-built circuits, and in a few cases on closed city streets.The results of each race are combined to determine two annual championships.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/List_of_Formula_One_circuits" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>

          {/*Stories*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.driving.co.uk/s3/st-driving-prod/uploads/2019/01/Top-5-Michael-Schumacher-F1-wins-01.jpg) center / cover'}}>STORIES</CardTitle>
            <CardText>
            Michael Schumacheris a German retired racing driver who competed in Formula One for Jordan Grand Prix, Benetton, Ferrari, and Mercedes upon his return to the sport. Schumacher is widely regarded as one of the greatest Formula One drivers ever.
            </CardText>
            <CardActions border>
              <a href="https://en.wikipedia.org/wiki/List_of_Formula_One_Grand_Prix_winners" rel="noopener noreferrer" target="_blank">
                <Button colored>Learn More</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home;
