import React, { useState, useEffect, Suspense } from 'react';
import SummarySection from '../SummarySection';
import TransactionList from '../TransactionList';
import LoadingSpinner from '../LoadingSpinner';
import testData from '../../data/testData.json';
import { Transaction, User } from '@/types';
import { calculateDailyPoints } from '../../utils/dailyPoints';
import './TransactionsPage.css';

const TransactionsPage: React.FC = () => {
  const [user] = useState<User>(() => {
    try {
      return testData.user as User;
    } catch (error) {
      console.error('Error loading user data:', error);
      return { cardLimit: 0, cardBalance: 0, paymentStatus: 'unpaid' as const };
    }
  });

  const [transactions] = useState<Transaction[]>(() => {
    try {
      return testData.transactions as Transaction[];
    } catch (error) {
      console.error('Error loading transactions:', error);
      return [];
    }
  });

  const [dailyPoints, setDailyPoints] = useState<string>('');

  useEffect(() => {
    try {
      setDailyPoints(calculateDailyPoints());
    } catch (error) {
      console.error('Error calculating daily points:', error);
      setDailyPoints('0');
    }
  }, []);

  return (
    <div className="transactions-page">
      <Suspense fallback={<LoadingSpinner />}>
        <SummarySection user={user} dailyPoints={dailyPoints} />
        <TransactionList transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default TransactionsPage;
