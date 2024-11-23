// src/slices/cardSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bank_name: '',
  holder_name: '',
  card_number: '',
  card_charge: '',
  due_date: '',
  year_fee: '',
  status: '',
  paid_amount: '',
  extra_pay: '',
  less_pay: '',
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    // Action to update card details
    updateCardDetails: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    // Action to reset card details (optional)
    resetCardDetails: () => initialState,
  },
});

export const { updateCardDetails, resetCardDetails } = cardSlice.actions;

export default cardSlice.reducer;
