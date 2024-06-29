import React from 'react';

interface CalendarDayProps {
  date: string;
  games: {
    time: string;
    opponent: string;
    location: string;
    logoUrl: string;
  }[];
  isCurrentMonth: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, games, isCurrentMonth }) => {
  return (
    <div className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'}`}>
      <div className="date">{date}</div>
      {games.map((game, index) => (
        <div key={index} className="game">
          <img src={game.logoUrl} alt={`${game.opponent} logo`} className="game-logo" />
          <div className="game-info">
            <div>{game.time}</div>
            <div>{game.opponent}</div>
            <div>{game.location}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;