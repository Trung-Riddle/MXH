import { createSlice } from '@reduxjs/toolkit'

type Type = 'add' | 'delete' | 'update' | ''

interface InitialState {
  isOpen: boolean
  feelingIsOpen: boolean
  videoIsOpen: boolean
  gifIsOpen: boolean
  reactionIsOpen: boolean
  type: Type
  removeDialog: boolean
  data: unknown
  isOpenFormPost: boolean
}

const initialState: InitialState = {
  isOpen: false,
  isOpenFormPost: false,
  gifIsOpen: false,
  videoIsOpen: false,
  removeDialog: false,
  feelingIsOpen: false,
  reactionIsOpen: false,
  data: null,
  type: ''
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen: (state, action) => {
      const { type, data } = action.payload
      state.isOpen = true
      state.type = type
      state.data = data
    },
    onOpenFormPost: (state) => {
      state.isOpenFormPost = true
    },
    onCloseFormPost: (state) => {
      state.isOpenFormPost = false
    },
    onClose: (state) => {
      state.isOpen = false
      state.gifIsOpen = false
      state.videoIsOpen = false
      state.removeDialog = false
      state.feelingIsOpen = false
      state.reactionIsOpen = false
      state.data = null
      state.type = ''
    },
    toggleGifsModal: (state, action) => {
      console.log(state, action)
    },
    toggleFeelingsModal: (state, action) => {
      console.log(state, action)
    },
    toggleVideoModal: (state, action) => {
      console.log(state, action)
    },
    toggleImageModal: (state, action) => {
      console.log(state, action)
    },
    toggleCommentModal: (state, action) => {
      console.log(state, action)
    },
    toggleReactionModal: (state, action) => {
      console.log(state, action)
    },
    toggleRemoveDialog: (state, action) => {
      console.log(state, action)
    },
    addFeelings: (state, action) => {
      console.log(state, action)
    }
  }
})

export const {
  addFeelings,
  toggleCommentModal,
  onClose,
  onOpen,
  toggleFeelingsModal,
  toggleGifsModal,
  toggleImageModal,
  toggleReactionModal,
  toggleRemoveDialog,
  toggleVideoModal,
  onCloseFormPost,
  onOpenFormPost
} = ModalSlice.actions

export default ModalSlice.reducer
