import React, { useCallback, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faApple as faAppleBrand } from '@fortawesome/free-brands-svg-icons';
import { TransactionItemProps } from '@/types';
import { formatTransactionDate } from '@/utils/dateUtils';
import './TransactionItem.css';

const TransactionItem: React.FC<TransactionItemProps> = memo(
  ({ transaction, onTransactionClick }) => {
    const getTransactionIcon = useCallback(() => {
      if (transaction.type === 'payment') {
        return (
          <FontAwesomeIcon
            icon={faCreditCard}
            className="transaction-icon payment-icon"
          />
        );
      }

      switch (transaction.merchant.toLowerCase()) {
        case 'apple':
          return (
            <FontAwesomeIcon
              icon={faAppleBrand}
              className="transaction-icon apple-icon"
            />
          );
        default:
          return (
            <div className="transaction-icon default-icon">
              {transaction.merchant.charAt(0)}
            </div>
          );
      }
    }, [transaction.merchant, transaction.type]);

    const formatAmount = useCallback(() => {
      const formattedAmount = `$${transaction.amount.toFixed(2)}`;
      return transaction.type === 'payment'
        ? `+${formattedAmount}`
        : formattedAmount;
    }, [transaction.amount, transaction.type]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onTransactionClick(transaction.id);
        }
      },
      [onTransactionClick, transaction.id]
    );

    return (
      <button
        className="transaction-item"
        onClick={() => onTransactionClick(transaction.id)}
        onKeyDown={handleKeyDown}
        aria-label={`Transaction ${transaction.merchant} for ${formatAmount()}`}
        role="button"
        tabIndex={0}
      >
        <div className="transaction-left">{getTransactionIcon()}</div>
        <div className="transaction-middle">
          <div className="transaction-name">{transaction.merchant}</div>
          <div className="transaction-description">
            {transaction.status === 'pending' && 'Pending - '}
            {transaction.authorizedUser && `${transaction.authorizedUser} - `}
            {transaction.description}
          </div>
          <div className="transaction-date">
            {formatTransactionDate(transaction.date)}
          </div>
        </div>
        <div className="transaction-right">
          <div className="transaction-amount">{formatAmount()}</div>
          {transaction.percentage > 0 && (
            <div className="transaction-percentage">
              {transaction.percentage}%
            </div>
          )}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="arrow-icon"
            aria-hidden="true"
          />
        </div>
      </button>
    );
  }
);

TransactionItem.displayName = 'TransactionItem';

export default TransactionItem;
