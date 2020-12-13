import React from 'react';

export default ({
  country,
  time,
  circuit,
  planImage,
  winnerName,
  winnerCitizenship,
  winnerDob,
  winnerHeight,
  winnerImage,
}) => {
  const winnerAlt = 'winner: ' + winnerName;
  return (
    <div className='round'>
      <label>{circuit}</label>
      <br/>
      <label>{country}</label>
      <label>{time.substring(0, 10)}</label>
      <img id='leftimg'
        src={planImage}
        title={circuit}
        alt={circuit}
        width='50%'
      />
      <img id='rightimg'
        src={winnerImage}
        title={winnerAlt}
        alt={winnerAlt}
        width='50%'
      />
      <label>{winnerName}</label>
      <br/>
      <label>{winnerCitizenship}</label>
      <label>{winnerDob.substring(0, 4)} {winnerHeight}cm</label>
    </div>
  );
};
