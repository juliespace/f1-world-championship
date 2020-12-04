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
    <div>
      <h4>{country}</h4>
      <h4>{time.substring(0, 10)}</h4>
      <h4>{circuit}</h4>
      <img
        src={planImage}
        title={circuit}
        alt={circuit}
        width='100'
        height='100'
      />
      <img
        src={winnerImage}
        title={winnerAlt}
        alt={winnerAlt}
        width='100'
        height='100'
      />
      <h4>{winnerCitizenship}</h4>
      <h4>
        {winnerDob.substring(0, 4)} {winnerHeight}cm
      </h4>
    </div>
  );
};
