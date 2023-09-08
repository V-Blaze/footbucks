import React from 'react';

// CONSTANTS
import { communities2 } from '../constants';

// UTILITIES
import openInNewTab from '../utils';

// ASSETS
import { copyRight } from '../assets/images';

const Footer = () => (
  <footer className="px-4 py-8 bg-black text-white">
    <div className="grid grid-cols-1 gap-4 place-items-center place-content-center">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-3 font-mono">
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="/">Whitepaper</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="/">Terms of service</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="/">Privacy policy</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#community">Our Community</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="/">Customer Support</a></li>
        </ul>
      </div>
      <div className=" grid grid-cols-1 place-content-center place-items-center gap-8 w-full">
        <h4 className=" font-black text-xl">
          <span className="text-white">Join Our </span>
          <span className="text-[#FD8002]">Community</span>
        </h4>
        <div className="flex justify-between items-center mx-[10%] my-8 w-[40%]">
          {communities2.map((cmty) => (
            <button
              key={cmty.id}
              type="button"
              className=" border-none outline-none hover:bg-[#FD8002] rounded-lg"
              onClick={() => openInNewTab(cmty.link)}
            >
              <img src={cmty.logo} alt={cmty.name} className="h-[25px] w-[25px] md:h-[43px] md:w-[43px]" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 my-2 pb-3 pt-7 border-t border-white w-full">
        <img src={copyRight} alt="copyright" />
        2023, FootBucks
      </div>
    </div>
  </footer>
);

export default Footer;
