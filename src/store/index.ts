import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/user.slice'
import modalSlice from './slices/modal/modal.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
