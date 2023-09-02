import React from 'react';
import { Progress } from '@material-tailwind/react';

// ICONS
import { BsArrowRightShort } from 'react-icons/bs';

// COMPONENTS
import { CountDownTImmer } from '../components';

const Presale = () => {
  const targetDate = '2023-09-30T00:00:00';

  return (
    <section className=" min-h-[100vh] flex flex-col items-center bg-black text-white">
      <div className=" w-full md:w-[70%] flex flex-col items-center px-[5%] md:m-0">
        <h1 className=" font-extrabold text-2xl my-3">Own Your Favorite Club</h1>
        <p className=" font-light italic text-center mb-4">
          Lorem Ipsum dolor set sebrum lit rop prub frim Lorem
          Ipsum dolor set sebrum lit rop prub frim Lorem
          Ipsum dolor set sebrum .
        </p>
        <div>
          <button
            type="button"
            className="flex items-center border border-white px-3 py-1 rounded-2xl mb-4 outline-none text-white font-bold"
          >
            Explore More
            <BsArrowRightShort />
          </button>
        </div>
        <div className=" p-3 w-full rounded-lg border border-white">
          <h4 className=" font-semibold ">Presale Ends In:</h4>
          <div>
            <CountDownTImmer targetDate={targetDate} />
          </div>
          <ul className="flex flex-col gap-3 font-semibold my-4">
            <li>Token Name: Footbucks</li>
            <li>Presale Supply: 100,000,000</li>
            <li>Presale Price: 1FB = 5.00BNB</li>
          </ul>
          <div className="flex flex-col justify-center items-center w-full italic">
            <span>Presale amount reached</span>
            <div className="w-full">
              <Progress value={65} label="Completed" color="orange" />
            </div>
          </div>
          <input
            type="number"
            placeholder="Enter BNB Amount"
            className="w-full text-center bg-[#FFA40912] my-6 py-2 hover:border hover:border-white rounded-md"
          />
          <button
            type="button"
            className="w-full bg-[#FFA409] py-2 rounded-lg my-4 hover:bg-orange-700"
          >
            BUY FB TOKEN NOW
          </button>
        </div>
        <div className=" p-3 w-full rounded-lg border border-white mt-6">
          <h4 className=" font-bold text-2xl text-center">Referal</h4>
          <input
            type="text"
            readOnly
            placeholder="Refferal Link"
            className="w-full rounded-lg py-1 my-3 border border-[#FFA409] bg-blue-gray-900 placeholder:text-white"
          />
          <h4>No. Of Refferal: 14</h4>
          <h5>Refreal Reward: Comming Soon...</h5>
        </div>
      </div>
    </section>
  );
};
export default Presale;
