import React from 'react';
import CalendarDay from '../../components/CalendarDay';

const schedule = [
  { date: '1', games: [{ time: '1:00 PM', opponent: 'Windy City', location: 'vs Windy City', logoUrl: '/path/to/logo.jpg' }], isCurrentMonth: true },
  { date: '2', games: [{ time: '1:00 PM', opponent: 'Windy City', location: 'vs Windy City', logoUrl: '/path/to/logo.jpg' }], isCurrentMonth: true },
  // Add more days and games as needed
];

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <h1>Game Schedule</h1>
      <div className="calendar-grid">
        {schedule.map((day, index) => (
          <CalendarDay
            key={index}
            date={day.date}
            games={day.games}
            isCurrentMonth={day.isCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
}