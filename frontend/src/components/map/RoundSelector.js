import React from 'react';

export default (props) => {
  const { years, yearFilter, onUpdate } = props;

  return (
    <div className="roundSelector">
      <hr/>
      <h5>Formula One</h5>
      <p>Filter Rounds By Year</p>
      <select value={yearFilter}
        type="select"
        name="filterRounds"
        onChange={(e) => onUpdate(e)}>
          {
            years.map((year, i) => {
              return (
                  <option value={year} key={i}>{year}</option>
                );
            }, this)
          }
      </select>
    </div>
  );
};
