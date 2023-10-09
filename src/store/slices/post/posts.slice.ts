import { createSlice } from '@reduxjs/toolkit'
// import { PostDocuments } from 'src/interfaces/post.interface'

// interface InitialState extends PostDocuments {}

const initialState = {}

const PostsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {}
})

export default PostsSlice.reducer
