import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionItem from '../TransactionItem';
import { Transaction } from '@/types';
import './TransactionList.css';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const navigate = useNavigate();

  const handleTransactionClick = useCallback(
    (transactionId: number) => {
      navigate(`/transaction/${transactionId}`);
    },
    [navigate]
  );

  return (
    <div className="transaction-list-section">
      <h2>Latest Transactions</h2>
      <div className="transactions-list-container" role="list">
        {transactions.slice(0, 10).map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onTransactionClick={handleTransactionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
