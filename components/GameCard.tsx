import React from 'react';

interface GameCardProps {
  date: string;
  opponent: string;
  location: string;
  time: string;
}

const GameCard: React.FC<GameCardProps> = ({ date, opponent, location, time }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{opponent}</td>
      <td>{location}</td>
      <td>{time}</td>
    </tr>
  );
}

export default GameCard;