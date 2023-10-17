import { createSlice } from '@reduxjs/toolkit'

type Type = 'add' | 'delete' | 'update' | ''

interface InitialState {
  isOpen: boolean
  feelingIsOpen: boolean
  privacyIsOpen: boolean
  videoIsOpen: boolean
  gifIsOpen: boolean
  reactionIsOpen: boolean
  removeDialog: boolean
  isOpenFormPost: boolean
  feeling: string
  type: Type
  data: unknown
}

const initialState: InitialState = {
  isOpen: false,
  isOpenFormPost: false,
  privacyIsOpen: false,
  gifIsOpen: false,
  videoIsOpen: false,
  removeDialog: false,
  feelingIsOpen: false,
  reactionIsOpen: false,
  data: null,
  feeling: '',
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
    toggleFeelingsModal: (state) => {
      state.feelingIsOpen = !state.feelingIsOpen
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
      state.feeling = action.payload
    },
    togglePrivacyModal: (state) => {
      state.privacyIsOpen = !state.privacyIsOpen
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
  togglePrivacyModal,
  toggleVideoModal,
  onCloseFormPost,
  onOpenFormPost
} = ModalSlice.actions

export default ModalSlice.reducer
