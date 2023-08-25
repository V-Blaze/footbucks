import React from 'react';

// ICONS
import { BsArrowRightShort } from 'react-icons/bs';

// ASSETS
import { logo1 } from '../assets/images';

const Home = () => (
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
      <div className="flex flex-col-reverse justify-center items-center gap-4 md:flex-row  w-full border">
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
    <section className="mx-5 my-12 flex gap-6 md:gap-12">
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
  </>
);

export default Home;
