import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './PaymentDue.css';

const PaymentDue: React.FC = () => {
  return (
    <div className="payment-due-block">
      <h3>No Payment Due</h3>
      <p>You&apos;ve paid your September balance.</p>
      <FontAwesomeIcon icon={faCheck} className="check-icon" />
    </div>
  );
};

export default PaymentDue;
