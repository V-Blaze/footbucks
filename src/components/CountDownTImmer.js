import React, { useState, useEffect } from 'react';
import { differenceInSeconds, parseISO } from 'date-fns';
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
        const secondsRemaining = differenceInSeconds(target, now);

        const days = Math.floor(secondsRemaining / (3600 * 24));
        const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
        const minutes = Math.floor((secondsRemaining % 3600) / 60);
        const seconds = secondsRemaining % 60;

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
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
    <div className="flex my-4 mx-2 justify-between">
      <span className="flex flex-col justify-center items-center text-[#FFA409] border border-[#FFA409] p-2 rounded-lg w-16">
        {remainingTime.days}
        <span className=" font-light text-xs">DAYS</span>
      </span>
      <span className="flex flex-col justify-center items-center text-[#FFA409] border border-[#FFA409] p-2 rounded-lg w-16">
        {remainingTime.hours}
        <span className=" font-light text-xs">HOURS</span>
      </span>
      <span className="flex flex-col justify-center items-center text-[#FFA409] border border-[#FFA409] p-2 rounded-lg w-16">
        {remainingTime.minutes}
        <span className=" font-light text-xs">MINUTES</span>
      </span>
      <span className="flex flex-col justify-center items-center text-[#FFA409] border border-[#FFA409] p-2 rounded-lg w-16">
        {remainingTime.seconds}
        <span className=" font-light text-xs">SECOND</span>
      </span>
    </div>
  );
};

CountDownTImmer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default CountDownTImmer;
