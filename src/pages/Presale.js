import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Progress } from '@material-tailwind/react';

// ICONS
import { BsArrowRightShort } from 'react-icons/bs';

// REDUX
import {
  updateICOAmount, getAmountSold, getRefCount, buyPresale,
} from '../redux/Presale/presale';

// COMPONENTS
import { CountDownTImmer } from '../components';

// UTILITIES
import { formatNumber, errorToast, successToast } from '../utils';

const Presale = () => {
  const [BNBAmount, setBNBAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [referralAdd, setReferralAdd] = useState('');
  const [referralLink, setReferralLink] = useState('Connect Your Wallet');
  const [percent, setPercent] = useState(0);
  const [NoOfRef, setNoOfRef] = useState(0);
  const [NoOfTokenSold, setNoOfTokenSold] = useState(0);

  const chainId = useSelector((state) => state.Presale?.chainID);
  const isConnected = useSelector((state) => state.Presale?.isConnected);
  const address = useSelector((state) => state.Presale?.address);
  const dispatch = useDispatch();

  const targetDate = '2023-10-05T00:00:00';
  const statID = 'z9bpgnbhsya';
  const key = 'tokenSold';

  const handleChange = (e) => {
    const bnbAmount = e.target.value;
    const fbRate = 166666666.67; // 1 BNB equals 166,666,666.67 FB tokens
    const fbAmount = bnbAmount * fbRate;
    setBNBAmount(bnbAmount);
    setTokenAmount(fbAmount);
  };

  const handleBuy = () => {
    if (!BNBAmount || BNBAmount < 0.001) return errorToast('BNB Must be greater than 0.001');
    if (!isConnected) return errorToast('Please Connect Your Wallet');
    if (chainId !== 97) return errorToast('Please Connect to BSC Network');

    dispatch(buyPresale(BNBAmount)).then((res) => {
      if (res.error) {
        console.log(res);
        errorToast(res.payload);
      } else {
        console.log(res, 'ICO Bought Successfully');
        const newRefValue = NoOfRef + 1;
        const newValue = NoOfTokenSold + tokenAmount;

        const data = {
          key, statID, newValue, referralAdd, newRefValue, address,
        };
        console.log(data);
        dispatch(updateICOAmount(data)).then((res) => {
          if (res.error) {
            console.log(res);
            errorToast(res.payload);
          } else {
            console.log(res);
            successToast(res.payload);
          }
        });
      }
    });

    return null;
  };

  useEffect(() => {
    const currentURL = window.location.href;

    const url = new URL(currentURL);

    if (url.searchParams.has('referrer')) {
      const referrerValue = url.searchParams.get('referrer');
      setReferralAdd(referrerValue);
    } else {
      console.log('No referrer query parameter found.');
    }
  }, []);

  useEffect(() => {
    dispatch(getAmountSold({ statID })).then((res) => {
      if (res.error) {
        errorToast(res.payload);
      } else {
        const totalAirdrop = 1000000;
        const totalSold = res.payload.tokenSold;
        const percentage = (totalSold / totalAirdrop) * 100;
        setPercent(Math.ceil(percentage));
        setNoOfTokenSold(totalSold);
      }
    });
  }, [isConnected]);

  useEffect(() => {
    if (isConnected && address) {
      dispatch(getRefCount({ address })).then((res) => {
        if (res.error) {
          errorToast('Could not get Count');
        } else {
          setNoOfRef(res.payload.referralCount);
        }
      });
      const URL = window.location.origin;
      const refLink = `${URL}/presale?referrer=${address}`;
      setReferralLink(refLink);
    }
  }, [isConnected, address]);

  return (
    <section className=" min-h-[100vh] flex flex-col items-center bg-black text-white">
      <div className=" w-full md:w-[70%] flex flex-col items-center px-[5%] md:m-0">
        <h1 className=" font-extrabold text-2xl my-3">Own the game, Own your passion</h1>
        <p className=" font-light italic text-center mb-4">
          Secure your spot in the future of football culture
          and own your passion with FOOTBUCKS ($FBUK).
          Participate in our Presale now!
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
            <li>Token Name: $FBUK</li>
            <li>Presale Supply: 500,000,000,000 $FBUK</li>
            <li>Presale Price: 1$FBUK = 0.000000006BNB</li>
          </ul>
          <div className="flex flex-col justify-center items-center w-full italic">
            <span>Presale amount reached</span>
            <div className="w-full">
              <Progress value={percent} label="Completed" color="orange" />
            </div>
          </div>
          <span className="block italic font-black text-sm mt-6 text-center font-serif">Enter BNB Amount</span>
          <input
            name="BNBAmount"
            type="number"
            placeholder="Enter BNB Amount"
            className="w-full text-center bg-[#FFA40912] mb-6 py-2 hover:border hover:border-white rounded-md"
            value={BNBAmount}
            onChange={(e) => handleChange(e)}
          />
          <span>
            You Will Get
            <span className=" font-bold text-lg mx-2">{formatNumber(tokenAmount.toFixed(2))}</span>
            $FBUK Token
          </span>
          <button
            type="button"
            className="w-full bg-[#FFA409] py-2 rounded-lg my-4 hover:bg-orange-700 disabled:bg-[#f8e2bd] disabled:text-gray-800"
            onClick={() => handleBuy()}
          >
            BUY $FBUK TOKEN NOW
          </button>
        </div>
        <div className=" p-3 w-full rounded-lg border border-white mt-6">
          <h4 className=" font-bold text-2xl text-center">Referral</h4>
          <input
            type="text"
            readOnly
            placeholder="Referral Link"
            className="w-full rounded-lg py-1 my-3 border border-[#FFA409] bg-blue-gray-900 placeholder:text-white
            text-sm italic text-[#FFA409] font-black px-2"
            value={referralLink}
          />
          <h4>
            No. Of Referral:
            {isConnected ? (
              <span className=" font-bold text-lg mx-2">{NoOfRef}</span>
            ) : (
              <span className=" font-bold text-sm italic mx-2">Please Connect Wallet</span>
            )}
          </h4>
          <h5>
            Referral Reward: Coming Soon On
            <span className=" text-sm italic text-[#FFA409]"> 05/10/2023 </span>
            ...
          </h5>
        </div>
      </div>
    </section>
  );
};
export default Presale;
