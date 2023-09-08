import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { connectWallet } from '../redux/Presale/presale';

// UTILS
import { successToast, errorToast, splitString } from '../utils';

// ASSETS
import { footbucksLogo } from '../assets/images';

const Navbar = () => {
  const [curPath, setCurPath] = useState('');
  const address = useSelector((state) => state.Presale?.address);
  console.log(address);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurPath(location.pathname);
  }, [location.pathname]);

  const connect = () => {
    dispatch(connectWallet()).then((res) => {
      console.log(res);
      if (res.error) {
        errorToast(res.payload);
      } else {
        successToast('Wallet connected');
      }
    });
  };

  return (
    <header className="flex bg-[#685029] text-white">
      <nav className="flex my-4 mx-5 items-center justify-between gap-6 w-full">
        <a href="/" className="flex font-mono font-black text-xl justify-center items-center">
          <img src={footbucksLogo} alt="main logo" className=" w-[35px] h-[35px]" />
          FOOTBUCKS
        </a>
        <ul className="hidden md:flex items-center gap-3 font-mono">
          {curPath === '/presale' ? (
            <button
              type="button"
              className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          ) : (

            <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#home">Home</a></li>
          )}
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#about">About-Us</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#tokenomics">Tokenomics</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#community">Community</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#faq">FAQs</a></li>
          <li className=" hover:text-orange-500 hover:border hover:border-[#FD8002] rounded-lg"><a href="#contact">Contact-Us</a></li>
        </ul>
        {curPath === '/presale' ? (
          <button
            type="button"
            className=" border-none outline-none bg-[#D5A554] px-6 py-2 rounded-full text-black hover:text-white hover:bg-orange-500 "
            onClick={connect}
          >
            {address ? splitString(address, 4, 38) : 'Connect Wallet'}
          </button>
        ) : (
          <button
            type="button"
            className=" border-none outline-none bg-[#D5A554] px-6 py-2 rounded-full text-black hover:text-white hover:bg-orange-500 "
            onClick={() => navigate('/presale')}
          >
            PRESALE
          </button>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
