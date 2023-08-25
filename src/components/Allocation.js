import React from 'react';
import PropTypes from 'prop-types';

// ICONS
import { BsDot } from 'react-icons/bs';

const Allocation = ({ allocation }) => {
  const { amount, color } = allocation;
  return (
    <li className="flex items-center gap-1">
      <BsDot className={color} />
      {amount}
    </li>
  );
};

Allocation.propTypes = {
  allocation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Allocation;
