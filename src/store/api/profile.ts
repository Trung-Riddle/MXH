import { createAsyncThunk } from '@reduxjs/toolkit'
import profileService from 'src/services/api/profile/profile.service'

export const getAllProfileOfUser = createAsyncThunk('profile/getAllProfileOfUser', async (data: any, thunk) => {
  try {
    const result = await profileService.getAllProfileOfUser(data.username, data.userId, data.uId)
    return result.data
  } catch (error) {
    return thunk.rejectWithValue(error)
  }
})
