import { createSlice } from '@reduxjs/toolkit'
import { PostDocuments } from 'src/interfaces/post.interface'

interface InitialState extends PostDocuments {}

const initialState: InitialState = {
  id: '',
  avatarColor: '',
  bgColor: '',
  commentCount: '',
  email: '',
  feelings: '',
  gifUrl: '',
  imgId: '',
  post: '',
  imgPost: '',
  privacy: '',
  profilePicture: '',
  reactions: {
    angry: 0,
    happy: 0,
    like: 0,
    love: 0,
    sad: 0,
    wow: 0
  },
  userId: '',
  username: '',
  videoId: '',
  videoPost: ''
}

const PostsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    
  }
})

export default PostsSlice.reducer
