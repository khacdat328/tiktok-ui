import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './slice/ModalSlice'
export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer
  },
})