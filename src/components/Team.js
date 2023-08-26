import React from 'react';
import PropTypes from 'prop-types';

// ICONS
import { FaQuoteRight } from 'react-icons/fa';

const Team = ({ team }) => {
  const {
    pic, name, role, bio,
  } = team;

  return (
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-6 flex flex-col gap-9 rounded-md
    hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
    >
      <div className="flex gap-4">
        <img src={pic} alt="team pic" />
        <div className="flex flex-col gap-2">
          <h4 className="font-mono font-bold">{name}</h4>
          <span>{role}</span>
        </div>
      </div>
      <div>
        <FaQuoteRight />
        <p>{bio}</p>
      </div>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Team;
