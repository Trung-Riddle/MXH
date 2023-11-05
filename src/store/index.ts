import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/user.slice'
import modalSlice from './slices/modal/modal.slice'
import postSlice from './slices/post/post.slice'
import allPostSlice from './slices/post/posts.slice'
import allStorySlice from './slices/story/stories.slice'
import exploreSlice from './slices/modal/explore.slice'
import allExploreSlice from './slices/explore/explores.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    modal: modalSlice,
    post: postSlice,
    allPost: allPostSlice,
    allStory: allStorySlice,
    explore: exploreSlice,
    allExplore: allExploreSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
