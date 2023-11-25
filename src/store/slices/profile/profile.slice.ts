import { createSlice } from '@reduxjs/toolkit'
import { getAllProfileOfUser } from 'src/store/api/profile'

interface ProfileState {
  loading: boolean
  profile: any
  posts: any[]
}

const initialState: ProfileState = {
  loading: false,
  profile: {},
  posts: []
}

const ProfileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    updateCurrentProfile: (state, action) => ({ ...state, profile: { ...state.profile, ...action.payload } })
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProfileOfUser.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllProfileOfUser.fulfilled, (state, action) => {
        state.loading = false

        if (action.payload) {
          const { posts, user } = action.payload

          state.profile = user
          state.posts = [...posts]
        }
      })
  }
})
export default ProfileSlice.reducer
