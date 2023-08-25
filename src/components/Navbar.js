import React from 'react';
import { useNavigate } from 'react-router-dom';

// ASSETS
import { mainLogo } from '../assets/images';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex bg-[#685029] text-white">
      <nav className="flex my-4 mx-5 items-center justify-between gap-6 w-full">
        <a href="/" className="flex font-mono font-black text-xl justify-center items-center">
          <img src={mainLogo} alt="main logo" />
          FOOTBUCKS
        </a>
        <ul className="hidden md:flex items-center gap-3 font-mono">
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#home">Home</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#about">About-Us</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#blogs">Blogs</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#tokenomics">Tokenomics</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#community">Community</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#faq">FAQs</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#contact">Contact-Us</a></li>
        </ul>
        <button
          type="button"
          className=" border-none outline-none bg-[#D5A554] px-6 py-2 rounded-full text-black hover:text-white hover:bg-orange-500 "
          onClick={() => navigate('/presale')}
        >
          PRESALE
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
