import React from 'react';

const players = [
  { name: "Rohit", score: 88 },
  { name: "Virat", score: 45 },
  { name: "Rahul", score: 60 },
  { name: "Bumrah", score: 90 },
  { name: "Shreyas", score: 32 },
  { name: "Gill", score: 76 },
  { name: "Iyer", score: 55 },
  { name: "Samson", score: 99 },
  { name: "Pant", score: 67 },
  { name: "Ashwin", score: 81 },
  { name: "Jadeja", score: 40 }
];

const ListofPlayers = () => {
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}

      <h2>Players with score below 70</h2>
      {below70.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
