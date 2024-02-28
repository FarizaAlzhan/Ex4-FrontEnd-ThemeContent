import React from 'react';
import withTimeTracker from '../hoc/withTimeTracker';
import '../App.css'; 

const TimerPage = ({ timeSpent }) => {
  return (
    <div className="timer-container">
      <h2>Time Spent on Page:</h2>
      <p className="timer">{timeSpent} seconds</p>
    </div>
  );
};

export default withTimeTracker(TimerPage);
