import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CheckmarkIcon.css';

const CheckmarkIcon: React.FC = () => {
  return (
    <div className="checkmark-block">
      <FontAwesomeIcon icon={faCheck} className="large-check-icon" />
    </div>
  );
};

export default CheckmarkIcon;
