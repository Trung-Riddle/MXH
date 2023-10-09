import { createSlice } from '@reduxjs/toolkit'

interface InitialState {}

const initialState: InitialState = {}

const PostsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {}
})

export default PostsSlice.reducer
