import { createSlice } from '@reduxjs/toolkit'
// import { PostDocuments } from 'src/interfaces/post.interface'

// interface InitialState extends PostDocuments {}

const initialState = {
  // avatarColor,
  // bgColor,
  // commentCount,
  // createdAt,
  // email,
  // feelings,
  // gifUrl,
  // imgId,
  // post,
  // imgPost,
  // privacy,
  // profilePicture,
  // reactions,
  // userId,
  // username,
  // videoId,
  // videoPost
}

const PostsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {}
})

export default PostsSlice.reducer
