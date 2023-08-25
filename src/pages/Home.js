import React from 'react';

// ICONS
import { BsArrowRightShort } from 'react-icons/bs';

// COMPONENTS
import { Team, Allocation, Roadmap } from '../components';

// ASSETS
import { logo1 } from '../assets/images';

// CONSTANTS
import {
  teams, allocations, roadmaps, partners, communities,
} from '../constants';

const Home = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section id="home" className=" flex h-[80vh] bg-[#D9D9D9] justify-center items-end">
        <button
          type="button"
          className="flex items-center border-none outline-none text-white font-bold
        bg-gradient-to-r from-[#FFA409] via-yellow-300 to-[#FFA409] mb-[20%] px-6 py-2 rounded-full
        hover:bg-gradient-to-r hover:from-orange-500 hover:via-yellow-300 hover:to-[#e2d0b1]"
        >
          Explore More
          <BsArrowRightShort />
        </button>
      </section>
      <section id="about" className="m-5">
        <div className="flex flex-col-reverse justify-center items-center gap-4 md:flex-row  w-full">
          <div className="md:w-[50%]">
            <h3 className=" font-mono font-bold text-2xl mb-4">WHO WE ARE</h3>
            <p>
              Welcome to FOOTBUCKS, where the passion for football collides with the
              innovative force of blockchain technology. We are more than a cryptocurrency;
              we are a movement that seeks to redefine how football enthusiasts engage with their
              favorite sport. Our journey transcends traditional boundaries, weaving together
              the global appeal of football with the transformative potential of blockchain.
            </p>
          </div>
          <div className="flex">
            <img src={logo1} alt="footbucks logo" className="logo-1 border border-orange-500 rounded-full" />
          </div>
        </div>
      </section>
      <section className="mx-5 my-12 flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="flex flex-col gap-4">
          <div
            className="h-[377px] w-[80%] md:w-[90%] bg-black self-center rounded-lg
          bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]"
          />
          <div>
            <h3 className="font-mono text-[#FFA409] md:font-bold text-2xl mb-4 text-center ">OUR MISSION</h3>
            <p className=" text-center">
              At FOOTBUCKS, we envision a world where football is not just a sport, but a
              unifying force that crosses borders, cultures, and backgrounds.
              We see a futurewhere blockchain empowers every fan to actively
              participate, contribute, and be rewarded within
              the football ecosystem. Our vision is to establish FOOTBUCKS as
              the ultimate platform that bridges
              the gap between football culture and cutting-edge technology.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="h-[377px] w-[80%] md:w-[90%] bg-black self-center rounded-lg
          bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]"
          />
          <div>
            <h3 className="font-mono text-[#FFA409] md:font-bold text-2xl mb-4 text-center ">OUR VISION</h3>
            <p className=" text-center">
              Our mission is clear – to elevate football culture through
              the power of blockchain. FOOTBUCKS aims to become the go-to
              destination for fans, players, and enthusiasts, offering a
              seamless fusion of digital engagement and real-world excitement.
              We are committed to creating a thriving ecosystem that empowers
              football talents, rewards community participation,
              and fosters unparalleled fan interactions.
            </p>
          </div>
        </div>
      </section>
      <section id="tokenomics" className="m-4">
        <h2 className=" font-mono font-black text-3xl text-center my-3">TOKENOMICS BREAKDOWN</h2>
        <div className=" text-white m-6  rounded-lg bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]">
          <div className="bg-[#DDAC58] p-4 rounded-lg flex items-center justify-between">
            <span>Token Name</span>
            <span>Footbucks</span>
          </div>
          <ul className=" p-4 flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <span>Initial Circulatory Supply:</span>
              <span>$3.7m</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Initial Market Cap:</span>
              <span>$1.5m</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Estimated Listing Date:</span>
              <span>Q3 2023</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Token Type:</span>
              <span>BSC</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Toe Token Price:</span>
              <span>$0.040</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-4 my-20">
        <div className="grid p-4 grid-cols-1 md:grid-cols-2 gap-3 items-center text-white m-6  rounded-lg bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]">
          <div className="hidden md:flex items-center justify-center border-[25px] border-[#FFA409] md:h-[300px] md:w-[300px] w-[200px] h-[200px] rounded-full place-self-center">
            <span className=" text-center">Footbucks Token Allocation</span>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {allocations.map((allocation) => (
                <Allocation
                  key={allocation.amount}
                  allocation={allocation}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-4 my-20">
        <h2 className=" font-mono font-black text-3xl text-center my-3">MEET OUR TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-4 mx-6">
          {teams.map((team) => (
            <Team
              team={team}
              key={team.name}
            />
          ))}
        </div>
      </section>
      <section className="mx-4 my-20">
        <h2 className=" font-mono font-black text-2xl text-center my-3">Explore Our NFTs</h2>
        <p className=" px-12 items-center">
          Lorem ipsum dolor et siprum rubum Lorem ipsum dolor et siprum
          rubum Lorem ipsum dolor et siprum rubum Lorem ipsum do
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-16 place-content-center place-items-center relative mt-4">
          <div className="absolute bg-slate-500 top-0 bottom-0 left-0 right-0 flex justify-center items-center opacity-[70%] rounded-lg">
            <span className=" font-mono text-orange-500 font-bold text-3xl -rotate-45">COMING SOON!!!</span>
          </div>
          <div className="h-[150px] w-[150px] bg-[#D9D9D9]" />
          <div className="h-[150px] w-[150px] bg-[#D9D9D9]" />
          <div className="h-[150px] w-[150px] bg-[#D9D9D9]" />
          <div className="h-[150px] w-[150px] bg-[#D9D9D9]" />
        </div>
      </section>
      <section className="mx-4 my-10">
        <h5 className="text-xl font-serif text-center">OUR ROADMAP</h5>
        <h2 className=" font-mono font-black text-3xl text-center my-4">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-6">
          {roadmaps.map((roadmap) => (
            <>
              <Roadmap
                key={roadmap.title}
                roadmap={roadmap}
              />
            </>
          ))}
        </div>
      </section>
      <section className="mx-4 my-10">
        <h2 className=" font-mono font-black text-3xl text-center my-4">TRUSTED BY</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 bg">
          {partners.map((partner) => (
            <div key={partner.name} className="border border-[#FD8002] rounded-lg hover:bg-[#FD8002]">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </section>
      <section id="Community" className="mx-4 my-10">
        <h2 className=" font-mono font-black text-2xl text-center my-4">Join Our Community</h2>
        <div className="flex justify-between items-center mx-10">
          {communities.map((cmty) => (
            <button
              type="button"
              key={cmty.name}
              className=" border-none outline-none hover:bg-[#FD8002] rounded-lg"
              onClick={() => openInNewTab(cmty.link)}
            >
              <img src={cmty.logo} alt={cmty.name} className="h-[46px] w-[46px] md:h-[93px] md:w-[93px]" />
            </button>
          ))}
        </div>
      </section>
    </>
  );
};
export default Home;
