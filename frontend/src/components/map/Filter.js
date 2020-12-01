import React, { Component } from 'react';

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
    };
  }

  filterRounds(e) {
    alert('The year is ' + e);
  }

  componentDidMount() {
    fetch('http://localhost:8000/f1/map/years', {
      method: 'GET',
    })
      .then(
        (res) => {
          return res.json();
        },
        (err) => {
          alert('err:' + err);
          console.log(err);
        }
      )
      .then(
        (yearsList) => {
          console.log(yearsList);

          if (!yearsList) return;

          this.setState({
            years: yearsList,
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div>
        <h3>F1 World Championship Rounds</h3>
        <p>Filter rounds by selecting a year</p>
        <select name='filterRounds' onChange={(e) => this.filterRounds(e)}>
          {this.state.years.map((year, i) => {
            return (
              <option value={year} key={i}>
                {year}
              </option>
            );
          }, this)}
        </select>
      </div>
    );
  }
}

export default Filter;
s;
