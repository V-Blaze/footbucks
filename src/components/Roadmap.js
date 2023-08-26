import React from 'react';
import PropTypes from 'prop-types';

// ICONS
import { GoDotFill } from 'react-icons/go';

const Roadmap = ({ roadmap }) => {
  const {
    title, year, desc, css,
  } = roadmap;

  return (
    <div className={css}>
      <h3 className="font-bold text-xl">{year}</h3>
      <div className="pl-0 ml-8 mt-3">
        <div className=" pl-6 border-l-[2px] border-black relative">
          <GoDotFill className="text-[#FE8002] h-[25px] w-[25px] absolute top-[-9px] left-[-13px]" />
          <h4 className="text-[#FE8002] text-xl mb-2">{title}</h4>
          <p className="w-[220px] font-light text-sm">{desc}</p>
        </div>
      </div>

    </div>
  );
};

Roadmap.propTypes = {
  roadmap: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Roadmap;
