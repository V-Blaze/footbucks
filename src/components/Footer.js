import React from 'react';

// ASSETS
import { footerLogo } from '../assets/images';

// CONSTANTS
import { communities } from '../constants';

// UTILITIES
import openInNewTab from '../utils';

const Footer = () => (
  <footer className="mx-4 my-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className=" col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className=" col-span-2">
          <div className="flex gap-1 items-center">
            <img src={footerLogo} alt="footer logo" />
            <h4 className=" font-black text-4xl">
              <span className="text-[#FD8002]">FOOT</span>
              <span className="text-black">BUCKS</span>
            </h4>
          </div>
          <p className=" text-center font-semibold text-sm">
            FOOTBUCKS is not just a project; it is a manifestation
            of our unwavering passion for football and our deep
            belief in the transformative power of blockchain
            technology.
          </p>
          <div className="flex justify-between items-center mx-[10%] my-8">
            {communities.map((cmty) => (
              <button
                key={cmty.id}
                type="button"
                className=" border-none outline-none hover:bg-[#FD8002] rounded-lg"
                onClick={() => openInNewTab(cmty.link)}
              >
                <img src={cmty.logo} alt={cmty.name} className="h-[36px] w-[36px] md:h-[43px] md:w-[43px]" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className=" font-semibold text-xl mb-2">QUICK MENU</h3>
          <ul className="flex flex-col items-start gap-1 font-mono">
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#home">Home</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#about">About-Us</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#blogs">Blogs</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#tokenomics">Tokenomics</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#community">Community</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#faq">FAQs</a></li>
            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#contact">Contact-Us</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <form className=" w-full">
          <input
            type="text"
            className="bg-black px-4 py-4 rounded-xl w-[70%] text-white placeholder:text-white"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-[#FFA409] py-4 rounded-xl px-4 w-15 hover:bg-orange-500 hover:text-white"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  </footer>
);

export default Footer;
