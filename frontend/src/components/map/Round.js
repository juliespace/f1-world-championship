import React from 'react';

const Round = ({
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
  return (
    <div>
      <h4>{country}</h4>
      <h4>{time.substring(0, 10)}</h4>
      <h4>{circuit}</h4>
      <img src={planImage} title={circuit} width='100' height='100' />
      <img src={winnerImage} title={winnerName} width='100' height='100' />
      <h4>{winnerCitizenship}</h4>
      <h4>
        {winnerDob.substring(0, 4)} {winnerHeight}cm
      </h4>
    </div>
  );
};

export default Round;
