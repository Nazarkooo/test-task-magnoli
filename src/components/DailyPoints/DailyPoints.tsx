import React from 'react';
import './DailyPoints.css';

interface DailyPointsProps {
  points: string;
}

const DailyPoints: React.FC<DailyPointsProps> = ({ points }) => {
  return (
    <div className="daily-points-block">
      <h3>Daily Points</h3>
      <div className="points-value">{points}</div>
    </div>
  );
};

export default DailyPoints;
