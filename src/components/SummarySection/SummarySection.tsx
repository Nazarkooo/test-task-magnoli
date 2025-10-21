import React from 'react';
import CardBalance from '../CardBalance';
import PaymentDue from '../PaymentDue';
import DailyPoints from '../DailyPoints';
import CheckmarkIcon from '../CheckmarkIcon';
import { User } from '@/types';
import './SummarySection.css';

interface SummarySectionProps {
  user: User;
  dailyPoints: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  user,
  dailyPoints,
}) => {
  const availableBalance = user.cardLimit - user.cardBalance;

  return (
    <div className="summary-section">
      <div className="summary-blocks">
        <CardBalance
          cardBalance={user.cardBalance}
          availableBalance={availableBalance}
        />
        <PaymentDue />
        <DailyPoints points={dailyPoints} />
        <CheckmarkIcon />
      </div>
    </div>
  );
};

export default SummarySection;
