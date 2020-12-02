import React from 'react';

const Filter = ({ years, updateYear, yearSelected }) => {
  return (
    <div>
      <p>Filter Rounds By Year</p>
      <select
        value={yearSelected}
        name='filterRounds'
        type='select'
        onChange={(e) => this.updateYear(e)}
      >
        {years.map((year, i) => {
          return (
            <option value={year} key={i}>
              {year}
            </option>
          );
        }, this)}
      </select>
    </div>
  );
};

export default Filter;
