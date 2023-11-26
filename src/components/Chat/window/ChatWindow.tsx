import React, { useCallback, useEffect, useState } from 'react'
import MessageInput from './message-input/MessageInput'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import chatService from 'src/services/api/chat/chat.service'
import profileService from 'src/services/api/profile/profile.service'
import { ChatUtils } from 'src/services/utilities/chat.utils'
import Utils from 'src/services/utilities/utils'
import { some } from 'lodash'
import MessageDisplay from './message-display/MessageDisplay'

const ChatWindow = () => {
  const { profile } = useAppSelector((state) => state.user)
  const { isLoading } = useAppSelector((state) => state.chat)
  const [receiver, setReceiver] = useState<any>()
  const [conversationId, setConversationId] = useState('')
  const [chatMessages, setChatMessages] = useState<any>([])
  const [onlineUsers, setOnlineUsers] = useState([])
  const [rendered, setRendered] = useState(false)
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const getChatMessage = async (receiverId: any) => {
    try {
      const response = await chatService.getChatMessages(receiverId)
      ChatUtils.privateChatMessages = [...response.data.messages]
      setChatMessages([...ChatUtils.privateChatMessages])
    } catch (err: any) {
      toast(err.response.data.message)
    }
  }
  const getNewUserMessages = useCallback(() => {
    if (searchParams.get('id') && searchParams.get('username')) {
      setConversationId('')
      setChatMessages([])
      getChatMessage(searchParams.get('id'))
    }
  }, [searchParams])
  const getUserProfileById = useCallback(async () => {
    try {
      const response = await profileService.getUserProfileById(searchParams.get('id'))
      setReceiver(response.data.user)
      ChatUtils.joinRoomEvent(response.data.user, profile)
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }, [profile, searchParams])
  const sendChatMessage = async (message: any, gifUrl: any, selectedImage: any) => {
    try {
      const checkUserOne = some(
        ChatUtils.chatUsers,
        (user) => user?.userOne === profile?.username && user?.userTwo === receiver?.username
      )
      const checkUserTwo = some(
        ChatUtils.chatUsers,
        (user) => user?.userOne === receiver?.username && user?.userTwo === profile?.username
      )
      const messageData = ChatUtils.messageData({
        receiver,
        conversationId,
        message,
        searchParamsId: searchParams.get('id'),
        chatMessages,
        gifUrl,
        selectedImage,
        isRead: checkUserOne && checkUserTwo
      })
      await chatService.saveChatMessage(messageData)
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }

  const updateMessageReaction = async (data: any) => {
    try {
      await chatService.updateMessageReaction(data)
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }
  const deleteChatMessage = async ({ senderId, receiverId, messageId, type }: any) => {
    try {
      await chatService.markMessageAsDelete({ messageId, senderId, receiverId, type })
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }

  useEffect(() => {
    if (rendered) {
      getUserProfileById()
      getNewUserMessages()
    }
    if (!rendered) setRendered(true)
  }, [getUserProfileById, getNewUserMessages, searchParams, rendered])

  useEffect(() => {
    if (rendered) {
      ChatUtils.socketIOMessageReceived(chatMessages, searchParams.get('username'), setConversationId, setChatMessages)
    }
    if (!rendered) setRendered(true)
    ChatUtils.usersOnline(setOnlineUsers)
    ChatUtils.usersOnChatPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, rendered])

  useEffect(() => {
    ChatUtils.socketIOMessageReaction(chatMessages, searchParams.get('username'), setConversationId, setChatMessages)
  }, [chatMessages, searchParams])
  return (
    <div className='text-white relative h-full'>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className='header h-16 w-full flex fixed items-center px-4 z-[888] shadow-lg bg-darkMain'>
            {receiver && (
              <div className='flex items-center gap-3'>
                <img className='w-12 h-12 rounded-full' src={receiver?.profilePicture} alt='' />
                <p className='flex flex-col'>
                  <span className='font-semibold text-lg'>{receiver?.username}</span>
                  <span className='text-[12px] text-sky-700'>
                    {Utils.checkIfUserIsOnline(receiver?.username, onlineUsers) && <span>Đang online</span>}
                  </span>
                </p>
              </div>
            )}
          </div>
          <div className='text-white'>
            <MessageDisplay
              chatMessages={chatMessages}
              profile={profile}
              updateMessageReaction={updateMessageReaction}
              deleteChatMessage={deleteChatMessage}
            />
          </div>
        </>
      )}

      <div className='absolute bottom-0 w-full'>
        <MessageInput setChatMessage={sendChatMessage} />
      </div>
    </div>
  )
}

export default ChatWindow
