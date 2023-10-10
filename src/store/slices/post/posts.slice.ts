import { createSlice } from '@reduxjs/toolkit'
import { getAllPostThunk } from 'src/store/api/posts'
// import { PostDocuments } from 'src/interfaces/post.interface'
interface IAllPosts {
  posts: any[]
  totalPostsCount: number
  isLoading: boolean
}
const initialState: IAllPosts = {
  posts: [],
  totalPostsCount: 0,
  isLoading: false
}

const AllPostSlice = createSlice({
  initialState,
  name: 'allPost',
  reducers: {
    addToPosts: (state, action) => {
      state.posts = [...action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllPostThunk.fulfilled, (state, action) => {
        state.isLoading = false
        const { posts, totalPosts } = action.payload
        state.posts = [...posts]
        state.totalPostsCount = totalPosts
      })
  }
})
export const { addToPosts } = AllPostSlice.actions
export default AllPostSlice.reducer
