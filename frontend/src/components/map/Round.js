import React from 'react';

// the UI component for filtering the subway entrances by subway line
export default (props) => {
  const { country, time, circuit, planImage, 
    winnerName, winnerCitizenship, winnerDob, winnerHeight, winnerImage } = props;

  // this is the JSX that will become the Filter UI in the DOM, notice it looks pretty similar to HTML
  // notice in the select element onChange is set to the updateFilter method
  // thus when a user selects a new subway line to view, the component passes the new filter value
  // to the parent component, Map, which reloads the GeoJSON data with the current filter value
  const winnerAlt = 'winner: ' + {winnerName};
  return (
    <div>
      <h4>{country}</h4>
      <h4>{time.substring(0, 10)}</h4>
      <h4>{circuit}</h4>
      <img src={planImage} title={circuit} width="100" height="100"/>
      <img src={winnerImage} title={winnerName} width="100" height="100"/>
      <h4>{winnerCitizenship}</h4>
      <h4>{winnerDob.substring(0, 4)} {winnerHeight}cm</h4>
    </div>
  );
};
