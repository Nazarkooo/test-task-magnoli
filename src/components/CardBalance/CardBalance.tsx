import React, { memo } from 'react';
import './CardBalance.css';

interface CardBalanceProps {
  cardBalance: number;
  availableBalance: number;
}

const CardBalance: React.FC<CardBalanceProps> = memo(
  ({ cardBalance, availableBalance }) => {
    return (
      <div className="card-balance-block">
        <h3>Card Balance</h3>
        <div className="balance-amount">${cardBalance.toFixed(2)}</div>
        <div className="available-balance">
          ${availableBalance.toFixed(2)} Available
        </div>
      </div>
    );
  }
);

CardBalance.displayName = 'CardBalance';

export default CardBalance;
