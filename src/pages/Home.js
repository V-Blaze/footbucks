import React from 'react';
import { Input, Textarea } from '@material-tailwind/react';

// ICONS
import { BsArrowRightShort } from 'react-icons/bs';
import { FaUserTag, FaMailBulk } from 'react-icons/fa';

// COMPONENTS
import {
  Team, Allocation, Roadmap, FAQAccordion,
} from '../components';

// ASSETS
import {
  logo1, missionIcon, vissionIcon, heroGif,
} from '../assets/images';

// CONSTANTS
import {
  teams, allocations, roadmaps, partners, communities,
} from '../constants';

// UTILITIES
import openInNewTab from '../utils';

const Home = () => (
  <>
    <section id="home" className="relative flex h-[80vh] bg-[#D9D9D9] justify-center items-end">
      <div className="absolute inset-0">
        <img src={heroGif} alt="Background GIF" className="object-cover w-full h-full" />
      </div>
      <button
        type="button"
        className="relative z-10 flex items-center border-none outline-none text-white font-bold
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
    <section className="m-5 flex flex-col justify-center items-center">
      <div>
        <h4 className=" font-bold text-2xl text-center md:pb-[30px]">FOOTBUCKS ECOSYSTEM</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-[82px] md:gap-3 pt-[80px] border-t-2 border-black ">
          <div className="relative bg-[#FFA409] text-black rounded-xl p-4 text-xs ">
            <span className="absolute top-[-82px] right-[50%] border-r-2 border-black h-[85px]" />
            🎟 FOOTBUCKS NFT Marketplace:
            A marketplace that transcends traditional memorabilia,
            offering exclusive NFTs that encapsulate
            iconic moments and memories from the world of football
          </div>
          <div className="relative bg-[#FFA409] text-black rounded-xl p-4 text-xs ">
            <span className="absolute top-[-82px] right-[50%] border-r-2 border-black h-[85px]" />
            ⚖ Governance & Rewards: We empower our community with governance tokens,
            ensuring that every voice is heard in shaping the FOOTBUCKS ecosystem.
            Active participation is rewarded, ensuring that the
            community thrives together.
          </div>
          <div className="relative bg-[#FFA409] text-black rounded-xl p-4 text-xs ">
            <span className="absolute top-[-82px] md:top-[-112px] right-[50%] border-r-2 border-black h-[85px] md:h-[115px]" />
            🌐 FOOTBUCKS Social Platform: A dedicated
            space where fans, players, and enthusiasts
            converge to share their passion, engage in
            discussions, and celebrate the magic of football.
          </div>
          <div className="relative bg-[#FFA409] text-black rounded-xl p-4 text-xs ">
            <span className="absolute top-[-82px] right-[50%] border-r-2 border-black h-[85px]" />
            🏆 FOOTBUCKS Academy: Nurturing
            future stars is at the heart of our mission.
            The FOOTBUCKS Academy is our commitment to
            the growth and development of budding football talents
          </div>
          <div className="relative bg-[#FFA409] text-black rounded-xl p-4 text-xs ">
            <span className="absolute top-[-82px] right-[50%] border-r-2 border-black h-[85px]" />
            ⚽ FOOTBUCKS Football Clubs:
            Our ecosystem takes you beyond
            the stands. Own a part of football history by investing
            in and co-owning football clubs, forging
            an unbreakable bond between fans and their
            favorite teams.
          </div>
        </div>
      </div>
    </section>
    <section className=" mx-5 my-16 flex flex-col justify-center items-center">
      <iframe
        src="https://drive.google.com/file/d/163Uzp92pGwzqIyY7du4v6vboFGNvWRN-/preview"
        className="w-[90%] h-80 border-2 border-orange-500 rounded-lg dark:border-gray-700"
        allow="autoplay"
        title="FootBucks"
      />
    </section>
    <section className="mx-5 my-12 flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="flex flex-col gap-4">
        <div
          className=" bg-black self-center rounded-lg
          bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]"
        >
          <img
            src={missionIcon}
            alt="Mission"
            className=" h-80 w-auto"
          />
        </div>
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
          className=" bg-black self-center rounded-lg
          bg-gradient-to-r from-[#FFA409] via-[#a37423] to-[#1b1303]"
        >
          <img
            src={vissionIcon}
            alt="vission"
            className=" h-80 w-auto"
          />
        </div>
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
                key={allocation.id}
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
            key={team.id}
            team={team}
          />
        ))}
      </div>
    </section>
    <section className="mx-4 my-20">
      <h2 className=" font-mono font-black text-2xl text-center my-3">Explore Our NFTs</h2>
      <p className=" px-12 items-center text-center">
        Lorem ipsum dolor et siprum rubum Lorem ipsum dolor et siprum
        rubum Lorem ipsum dolor et siprum rubum Lorem ipsum do
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-16 place-content-center place-items-center relative mt-4">
        <div className="absolute bg-slate-500 top-0 bottom-0 left-0 right-0 flex justify-center items-center opacity-[90%] rounded-lg">
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
          <Roadmap
            key={roadmap.id}
            roadmap={roadmap}
          />
        ))}
      </div>
    </section>
    <section className="mx-4 my-10">
      <h2 className=" font-mono font-black text-3xl text-center my-4">TRUSTED BY</h2>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="border border-[#FD8002] rounded-lg hover:bg-[#FD8002]">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
    <section id="community" className="mx-4 my-10">
      <h2 className=" font-mono font-black text-2xl text-center my-4">Join Our Community</h2>
      <div className="flex justify-between items-center mx-[20%]">
        {communities.map((cmty) => (
          <button
            key={cmty.id}
            type="button"
            className=" border-none outline-none hover:bg-[#FD8002] rounded-lg"
            onClick={() => openInNewTab(cmty.link)}
          >
            <img src={cmty.logo} alt={cmty.name} className="h-[46px] w-[46px] md:h-[93px] md:w-[93px]" />
          </button>
        ))}
      </div>
    </section>
    <section id="faq" className="mx-4 my-10">
      <h2 className=" font-mono font-black text-2xl text-center my-4">FAQs</h2>
      <div className="p-16">
        <FAQAccordion />
      </div>
    </section>
    <section id="contact" className="mx-4 my-10">
      <div className="bg-[#FFA409] px-4 py-14 rounded-md">
        <h3 className="font-mono text-white text-2xl text-center mb-4">Contact Us</h3>
        <form className="flex flex-col">
          <div className="bg-white p-6 flex flex-col gap-5 rounded-lg">
            <Input label="Your Name" icon={<FaUserTag />} />
            <Input label="Email" icon={<FaMailBulk />} />
            <Textarea size="lg" label="Message" />
          </div>
          <button
            type="submit"
            className=" my-6 text-[#FFA409] bg-white self-center py-4 px-8 rounded-xl
              shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-orange-500 hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </>
);
export default Home;
