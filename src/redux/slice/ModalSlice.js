import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      show: false,
   },
   reducers: {
      setShowModal: (state, action) => {
         state.show = action.payload;
      },
   },
});
