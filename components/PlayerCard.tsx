import React from 'react';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
  number: string;
  name: string;
  position: string;
  bat: string;
  throwHand: string;
  socials: string;
  experience: string;
  photoUrl: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  number,
  name,
  position,
  bat,
  throwHand,
  socials,
  experience,
  photoUrl,
}) => {
  return (
    <tr>
      <td>{number}</td>
      <td><img src={photoUrl} alt={`${name}'s photo`} className="player-photo" /></td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{bat}</td>
      <td>{throwHand}</td>
      <td>{socials}</td>
      <td>{experience}</td>
    </tr>
  );
};

export default PlayerCard;