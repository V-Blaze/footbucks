import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection, doc, setDoc, getDoc,
} from 'firebase/firestore';
import { ethers } from '../../web3/ethers';
import { db } from '../../firebase';
import { ABI } from '../../web3/Abi';

const contractAddress = '0x3C12006713dDDdb8BFd552b611c28Bb899186f63';

const initialState = {
  loading: false,
  isConnected: false,
  address: '',
};

// Action-types
const CONNECT_WALLET = 'Presale/presale/CONNECT_WALLET';
const BUY_PRESALE = 'Presale/presale/BUY_PRESALE';
const UPDATE_AMOUNT = 'Presale/presale/UPDATE_AMOUNT';
const GET_AMOUNT_SOLD = 'Presale/presale/GET_AMOUNT_SOLD';
const GET_REFERRAL_COUNT = 'Presale/presale/GET_REFERRAL_COUNT';

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${CONNECT_WALLET}/pending`:
      return { ...state, loading: true };
    case `${CONNECT_WALLET}/fulfilled`:
      return {
        ...state, isConnected: true, ...action.payload, loading: false,
      };
    case `${CONNECT_WALLET}/rejected`:
      return { ...state, loading: false, error: action.error.message };
    case `${BUY_PRESALE}/pending`:
      return { ...state, loading: true };
    case `${BUY_PRESALE}/fulfilled`:
      return {
        ...state, ...action.payload, loading: false,
      };
    case `${BUY_PRESALE}/rejected`:
      return { ...state, loading: false, error: action.error.message };
    case `${GET_AMOUNT_SOLD}/pending`:
      return { ...state, loading: true };
    case `${GET_AMOUNT_SOLD}/fulfilled`:
      return {
        ...state, ...action.payload, loading: false,
      };
    case `${GET_AMOUNT_SOLD}/rejected`:
      return { ...state, loading: false, error: action.error.message };
    case `${GET_REFERRAL_COUNT}/pending`:
      return { ...state, loading: true };
    case `${GET_REFERRAL_COUNT}/fulfilled`:
      return {
        ...state, ...action.payload, loading: false,
      };
    case `${GET_REFERRAL_COUNT}/rejected`:
      return { ...state, loading: false, error: action.error.message };
    default:
      return state;
  }
}

// Action Creators
// Connect user's wallet
export const connectWallet = createAsyncThunk(CONNECT_WALLET, async (_, { rejectWithValue }) => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      const wallets = await provider.send('eth_requestAccounts');
      const network = await provider.getNetwork();
      const data = {
        chainID: network.chainId,
        networkName: network.name,
        address: wallets[0],
      };
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  return rejectWithValue('Please Use Web3 Browser!');
});

// Buy Pesale
export const buyPresale = createAsyncThunk(BUY_PRESALE, async (BNBAmount, { rejectWithValue }) => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      const signer = provider.getSigner();

      const signerAddress = await signer.getAddress(); // Get the address of the signer

      let balance = await provider.getBalance(signerAddress);
      balance = ethers.utils.formatEther(balance);
      if (Number(BNBAmount) >= Number(balance)) return rejectWithValue('Insufficient Balance');
      const presaleContract = new ethers.Contract(
        contractAddress,
        ABI,
        signer,
      );

      const ethAmountToSend = ethers.utils.parseEther(BNBAmount.toString());

      const transaction = await presaleContract.buyTokens({
        value: ethAmountToSend, // Send Ether with the transaction
      });

      // Wait for the transaction to be mined
      await transaction.wait();
      console.log(transaction);

      return ('Presale bought Successfully');
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.message);
    }
  }
  return rejectWithValue('Please Use Web3 Browser!');
});

// Update Sold Amount
export const updateICOAmount = createAsyncThunk(UPDATE_AMOUNT,
  async (data, { rejectWithValue }) => {
    const {
      key, newValue, statID, referralAdd, newRefValue, address,
    } = data;
    try {
      const userDocRef = doc(collection(db, 'icoStats'), statID);
      await setDoc(userDocRef, { [key]: newValue }, { merge: true });

      if (referralAdd !== '' && referralAdd.toLowerCase() !== address.toLowerCase()) {
        const referralAddress = referralAdd.toLowerCase();
        const docRef = doc(collection(db, 'referrals'), referralAddress);
        await setDoc(docRef, { referralCount: newRefValue }, { merge: true });
      }

      return ('Presale bought Successfully');
    } catch (error) {
      return rejectWithValue('An Error Occured');
    }
  });

// Get Token Amount Sold
export const getAmountSold = createAsyncThunk(GET_AMOUNT_SOLD,
  async (data, { rejectWithValue }) => {
    const { statID } = data;
    try {
      const docRef = doc(collection(db, 'icoStats'), statID);

      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const amountSold = snapshot.data();
        return amountSold;
      }
      return {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });

export const getRefCount = createAsyncThunk(GET_REFERRAL_COUNT,
  async (data, { rejectWithValue }) => {
    const { address } = data;

    try {
      const userAddress = address.toLowerCase();
      const docRef = doc(collection(db, 'referrals'), userAddress);

      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const refCount = snapshot.data();
        return refCount;
      }

      return {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  });
