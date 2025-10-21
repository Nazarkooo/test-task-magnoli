import React, { memo } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = memo(() => {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading">
      <div className="spinner" />
      <span className="sr-only">Loading...</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
