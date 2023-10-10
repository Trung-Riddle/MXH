import { PostDocuments } from './../../../interfaces/post.interface';
import { createSlice } from '@reduxjs/toolkit'

interface InitialState extends PostDocuments {}

const initialState: InitialState = {
  userId: '',
  username: '',
  email: '',
  avatarColor: '',
  profilePicture: '',
  bgColor: '',
  post: '',
  commentCount: '',
  imgPost: '',
  imgId: '',
  videoPost: '',
  videoId: '',
  feelings: '',
  gifUrl: '',
  privacy: '',
  reactions: 0
}

const PostSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    resetPost: () => {
      return initialState
    }
  }
})
export const { resetPost } = PostSlice.actions
export default PostSlice.reducer
