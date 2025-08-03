import React from 'react';

const T20players = ["Rohit", "Virat", "Surya"];
const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

const IndianPlayers = () => {
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const [oddTeam, evenTeam] = allPlayers.reduce(
    ([odd, even], player, index) =>
      index % 2 === 0
        ? [[...odd, player], even]
        : [odd, [...even, player]],
    [[], []]
  );

  return (
    <div>
      <h2>Merged Team</h2>
      {allPlayers.map((player, i) => <p key={i}>{player}</p>)}

      <h3>Odd Team</h3>
      {oddTeam.map((player, i) => <p key={i}>{player}</p>)}

      <h3>Even Team</h3>
      {evenTeam.map((player, i) => <p key={i}>{player}</p>)}
    </div>
  );
};

export default IndianPlayers;
