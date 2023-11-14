import React, { useCallback, useState } from 'react'
import MessageInput from './message-input/MessageInput'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import chatService from 'src/services/api/chat/chat.service'
import profileService from 'src/services/api/profile/profile.service'
import { ChatUtils } from 'src/services/utilities/chat.utils'

const ChatWindow = () => {
  const {profile} = useAppSelector(state => state.user)
  const {isLoading} = useAppSelector(state => state.chat)
  const [receiver, setReceiver] = useState()
  const [conversationId, setConversationId] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const getChatMessage = useCallback(async (receiverId: any) => {
    try {
      const response = await chatService.getChatMessages(receiverId);
    } catch (err: any) {
      toast(err.response.data.message)
    }
  }, [dispatch])
  const getNewUserMessages = useCallback(() => {
    if(searchParams.get('id') && searchParams.get('username')) {
      setConversationId('')
      setChatMessages([])
      getChatMessage(searchParams.get('id'))
    }
  }, [getChatMessage, searchParams])
  const getUserProfileById = useCallback(async () => {
    try {
      const response = await profileService.getUserProfileById(searchParams.get('id'));
      setReceiver(response.data.user)
      ChatUtils.joinRoomEvent(response.data.user, profile)
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }, [dispatch, searchParams])
  const sendChatMessage = (message: any, gifUrl: any, selectedImage: any) => {
    console.log(message)
    console.log(gifUrl)
    console.log(selectedImage)
  }
  return (
    <div className='text-white relative h-full'>
      <div className='header h-16 border w-full bg-rose-400 flex items-center px-4'>
        <div className='flex items-center gap-3'>
          <img
            className='w-12 h-12 rounded-full'
            src='https://res.cloudinary.com/dgyk7uloc/image/upload/v1689068209/64ad22b01d519ab84e38e9ca.jpg'
            alt=''
          />
          <p className='flex flex-col'>
            <span className='font-semibold text-lg'>Hoang Ha</span>
            <span className='text-[12px] text-sky-700'>dang hoat dong</span>
          </p>

        </div>
      </div>
      <div className='text-white'>
        message dis play component
      </div>
      <div className='absolute bottom-0 w-full'>
        <MessageInput setChatMessage={sendChatMessage} />
      </div>
    </div>
  )
}

export default ChatWindow
