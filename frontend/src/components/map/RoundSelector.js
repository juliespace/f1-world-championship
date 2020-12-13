import React from 'react';

export default ({ filters, selections, onUpdate }) => {
  // console.log('RoundSelector', filters);
  return (
    <div className='roundSelector'>
      <h5>Filters:</h5>
      <div>
      {
        filters.map((filter, filterIndex) => {
        let val = selections[filter.property];
        if (!val)
          val = filter.values[0];
        console.log('roundSelector:', filter.property, val);
        return <div className='roundFilter'>
            <label>{filter.label}</label>
            <select
              value={val}
              type='select'
              name={filter.property}
              onChange={(e) => onUpdate(e)}
            >
              {filter.values.map((value, i) => {
                return (
                  <option value={value} key={i}>
                    {value}
                  </option>
                );
              }, this)}
            </select>
            </div>
        })
      }
      </div>

    </div>
  );
};
