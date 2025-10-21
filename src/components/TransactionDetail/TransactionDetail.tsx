import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import testData from '../../data/testData.json';
import { Transaction } from '@/types';
import './TransactionDetail.css';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    if (!id) {
      setTransaction(null);
      return;
    }

    const transactionId = parseInt(id, 10);
    if (isNaN(transactionId)) {
      setTransaction(null);
      return;
    }

    const foundTransaction = testData.transactions.find(
      t => t.id === transactionId
    ) as Transaction | undefined;
    setTransaction(foundTransaction || null);
  }, [id]);

  const formatAmount = useCallback((amount: number, type: string) => {
    const formattedAmount = `$${amount.toFixed(2)}`;
    return type === 'payment' ? `+${formattedAmount}` : formattedAmount;
  }, []);

  const formatDateTime = useCallback((dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: '2-digit',
      }) +
      ', ' +
      date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    );
  }, []);

  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleBackClick();
      }
    },
    [handleBackClick]
  );

  const transactionDetails = useMemo(() => {
    if (!transaction) return null;

    return {
      amount: formatAmount(transaction.amount, transaction.type),
      dateTime: formatDateTime(transaction.date),
    };
  }, [transaction, formatAmount, formatDateTime]);

  if (!transaction) {
    return (
      <div className="transaction-detail">
        <div className="header">
          <button onClick={handleBackClick} className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className="error-message">Transaction not found</div>
      </div>
    );
  }

  return (
    <div className="transaction-detail">
      <div className="header">
        <button
          onClick={handleBackClick}
          onKeyDown={handleKeyDown}
          className="back-button"
          aria-label="Go back to transactions list"
        >
          <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
        </button>
      </div>

      <div className="main-amount">{transactionDetails?.amount}</div>

      <div className="merchant-info">
        <div className="merchant-name">{transaction.merchant}</div>
        <div className="transaction-date-time">
          {transactionDetails?.dateTime}
        </div>
      </div>

      <div className="transaction-details-box">
        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <span className="detail-value status-approved">
            {transaction.status}
          </span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Payment Method:</span>
          <span className="detail-value">{transaction.cardUsed}</span>
        </div>
        <div className="detail-row total-row">
          <span className="detail-label">Total</span>
          <span className="detail-value total-amount">
            {formatAmount(transaction.amount, transaction.type)}
          </span>
        </div>
      </div>

      {transaction.location && (
        <div className="location-info">
          <div className="location-label">Location</div>
          <div className="location-value">{transaction.location}</div>
        </div>
      )}

      {transaction.authorizedUser && (
        <div className="authorized-user-info">
          <div className="authorized-user-label">Authorized User</div>
          <div className="authorized-user-value">
            {transaction.authorizedUser}
          </div>
        </div>
      )}

      {transaction.percentage > 0 && (
        <div className="cashback-info">
          <div className="cashback-label">Cashback</div>
          <div className="cashback-value">{transaction.percentage}%</div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;
