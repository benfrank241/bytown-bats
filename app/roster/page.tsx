import React from 'react';
import PlayerCard from '../../components/PlayerCard';

const players = [
  {
    number: '00',
    name: 'Ben Bartholomew',
    position: 'SS, CF',
    bat: 'R',
    throwHand: 'R',
    socials: '@ben.bartholomew',
    experience: 'Rookie',
    photoUrl: '/path/to/ben.jpg',
  },
  {
    number: '19',
    name: 'Max Labovitch',
    position: 'OF',
    bat: 'R',
    throwHand: 'R',
    socials: '@max.labovitch',
    experience: 'Rookie',
    photoUrl: '/path/to/max_labovitch_photo.jpg',
  },
  {
    number: '22',
    name: 'Mackenzie Mather',
    position: 'C',
    bat: 'R',
    throwHand: 'R',
    socials: '@mackenzie.mather',
    experience: 'Rookie',
    photoUrl: '/path/to/kenzie.jpg',
  },
  {
    number: '23',
    name: 'Hayden Burnett',
    position: 'IF',
    bat: 'L',
    throwHand: 'R',
    socials: '@HaydenBurnett',
    experience: 'Rookie',
    photoUrl: '/path/to/hayden.jpg',
  }
  // Add more players as needed
];

export default function RosterPage() {
  return (
    <div className="roster-page">
      <h1>Team Roster</h1>
      <table className="roster-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Player</th>
            <th>Pos</th>
            <th>Bat</th>
            <th>THW</th>
            <th>Socials</th>
            <th>EXP</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              number={player.number}
              name={player.name}
              position={player.position}
              bat={player.bat}
              throwHand={player.throwHand}
              socials={player.socials}
              experience={player.experience}
              photoUrl={player.photoUrl}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}