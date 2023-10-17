import { PostDocuments } from './../../../interfaces/post.interface'
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
  privacy: 'public',
  reactions: 0
}

const PostSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    resetPost: () => {
      return initialState
    },

    changePrivacyPost: (state, action) => {
      state.privacy = action.payload
    },

    changeFeelingPost: (state, action) => {
      state.feelings = action.payload
    }
  }
})
export const { resetPost, changePrivacyPost, changeFeelingPost } = PostSlice.actions
export default PostSlice.reducer
