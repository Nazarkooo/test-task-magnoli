import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsPage from '@/components/TransactionsPage';
import TransactionDetail from '@/components/TransactionDetail';
import ErrorBoundary from '@/components/ErrorBoundary';
import './App.css';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<TransactionsPage />} />
            <Route path="/transaction/:id" element={<TransactionDetail />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
