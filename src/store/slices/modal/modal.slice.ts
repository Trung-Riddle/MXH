import { createSlice } from '@reduxjs/toolkit'

type Type = 'add' | 'delete' | 'update' | ''

interface InitialState {
  reactionIsOpen: boolean
  removeDialog: boolean
  feeling: string
  type: Type
  data: unknown

  backgroundIsOpen: boolean
  inputFileIsOpen: boolean

  mainModalIsOpen: boolean

  // Security Modals
  privacyModalIsOpen: boolean

  // Secondary Modals
  gifModalIsOpen: boolean
  videoModalIsOpen: boolean
  imageModalIsOpen: boolean
  feelingModalIsOpen: boolean
}

const initialState: InitialState = {
  mainModalIsOpen: false,
  inputFileIsOpen: false,
  backgroundIsOpen: false,
  // Security Modals
  privacyModalIsOpen: false,

  // Secondary Modals
  gifModalIsOpen: false,
  videoModalIsOpen: false,
  imageModalIsOpen: false,
  feelingModalIsOpen: false,

  removeDialog: false,
  reactionIsOpen: false,
  data: null,
  feeling: '',
  type: ''
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleOpenMainModal: (state) => {
      state.mainModalIsOpen = !state.mainModalIsOpen
      if (!state.mainModalIsOpen) {
        state.inputFileIsOpen = false
        state.feelingModalIsOpen = false
        state.gifModalIsOpen = false
        state.videoModalIsOpen = false
        state.imageModalIsOpen = false
        state.backgroundIsOpen = false
      }
    },

    toggleOpenBackground: (state) => {
      state.backgroundIsOpen = !state.backgroundIsOpen
    },

    toggleOpenInputFile: (state) => {
      state.inputFileIsOpen = !state.inputFileIsOpen
    },

    // Security Modals Action
    toggleOpenPrivacyModal: (state) => {
      state.privacyModalIsOpen = !state.privacyModalIsOpen
    },

    // Secondary Modals Actions
    toggleOpenGifsModal: (state) => {
      state.gifModalIsOpen = !state.gifModalIsOpen
    },
    toggleOpenFeelingsModal: (state) => {
      state.feelingModalIsOpen = !state.feelingModalIsOpen
    },
    toggleOpenVideoModal: (state) => {
      state.videoModalIsOpen = !state.videoModalIsOpen
    },
    toggleOpenImageModal: (state) => {
      state.imageModalIsOpen = !state.imageModalIsOpen
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
    }
  }
})

export const {
  addFeelings,
  toggleCommentModal,
  toggleOpenFeelingsModal,
  toggleOpenGifsModal,
  toggleOpenImageModal,
  toggleReactionModal,
  toggleRemoveDialog,
  toggleOpenPrivacyModal,
  toggleOpenVideoModal,
  toggleOpenMainModal,
  toggleOpenInputFile,
  toggleOpenBackground
} = ModalSlice.actions

export default ModalSlice.reducer
