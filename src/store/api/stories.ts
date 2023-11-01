import { createAsyncThunk } from '@reduxjs/toolkit'
import { StoryList } from 'src/services/utilities/static.data'
import Swal from 'sweetalert2'

export const getAllStoryFaker = createAsyncThunk('story/getAllStoryFaker', async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return StoryList
  } catch (error: any) {
    Swal.fire('Thông báo', error.message, 'error')
  }
})