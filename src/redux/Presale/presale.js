import { createAsyncThunk } from '@reduxjs/toolkit';
import { ethers } from '../../web3/ethers';

const initialState = {
  loading: false,
  isConnected: false,
  address: '',
};

// Action-types
const CONNECT_WALLET = 'Presale/presale/CONNECT_WALLET';

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
    default:
      return state;
  }
}

// Action Creators
// Connect user's wallet
export const connectWallet = createAsyncThunk(CONNECT_WALLET, async (_, { rejectWithValue }) => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      const wallets = await provider.send('eth_requestAccounts');
      const network = await provider.getNetwork();
      const data = {
        chainID: network.chainId,
        networkName: network.name,
        address: wallets[0],
      };
        // console.log(network);
        // console.log(wallets);
      return data;
    }
    return {};
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
