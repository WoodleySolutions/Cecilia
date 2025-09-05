import React from 'react';
import { WeeklySchedule as WeeklyScheduleType } from '../types';

interface WeeklyScheduleProps {
  schedule: WeeklyScheduleType;
}

const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ schedule }) => {
  return (
    <div className="schedule-section">
      <h2>This Week's Schedule</h2>
      <div className="weekly-schedule">
        {Object.entries(schedule).map(([day, activities]) => (
          <div key={day} className="week-item">
            <h4>{day}</h4>
            <p>{activities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;