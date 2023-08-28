import { createAsyncThunk } from '@reduxjs/toolkit';

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
    return {};
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
