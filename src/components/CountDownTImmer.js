import React, { useState, useEffect } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

const CountDownTImmer = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = parseISO(targetDate);

      if (now < target) {
        const timeRemaining = parseISO(
          formatDistance(now, target, {
            includeSeconds: true,
          })
        );
      setRemainingTime({
        days: timeRemaining.getDate() - 1,
        hours: timeRemaining.getHours(),
        minutes: timeRemaining.getMinutes(),
        seconds: timeRemaining.getSeconds(),
      });
    } else {
      clearInterval(interval);
      setRemainingTime({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, [targetDate]);
  return (
    <div>
    <p>
      Time remaining: {remainingTime.days} days, {remainingTime.hours} hours,{' '}
      {remainingTime.minutes} minutes, {remainingTime.seconds} seconds
    </p>
  </div>
  )
}

CountDownTImmer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountDownTImmer