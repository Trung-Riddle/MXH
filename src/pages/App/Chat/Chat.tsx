import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import CallSvg from 'src/assets/icons/components/messages/CallSvg'
import IconSvg from 'src/assets/icons/components/messages/IconSvg'
import LinkSvg from 'src/assets/icons/components/messages/LinkSvg'
import PhoneSvg from 'src/assets/icons/components/messages/PhoneSvg'
import { ChatList } from 'src/components'
import { SearchSvg, SendSvg } from 'src/components/icons'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import chatService from 'src/services/api/chat/chat.service'
import socketService from 'src/services/socket/socket.service'
import { ChatUtils } from 'src/services/utilities/chat.utils'
import { RootState } from 'src/store'
import { getConversationList } from 'src/store/api/chat'

interface IMessage {
  _id?: string
  conversationId?: string
  receiverId: string
  receiverAvatarColor: string
  receiverProfilePicture: string
  receiverUsername: string
  senderUsername: string
  senderId: string
  senderAvatarColor: string
  senderProfilePicture: string
  content: string
  isRead: boolean
  gifUrl: string
  selectedImage: string
  reaction: []
  createdAt: string
  deleteForEveryone: false
  deleteForMe: false
}

const Chat = () => {
  // # selectors
  const profile = useAppSelector((state: RootState) => state.user.profile)
  const { selectedChatUser, chatList } = useAppSelector((state: RootState) => state.chat)

  // # state
  const [chatMessage, setChatMessage] = useState<string>('')
  const [conversation, setConversation] = useState<IMessage[]>([])
  const [conversationId, setConversationId] = useState('')

  // # params
  const [searchParams] = useSearchParams()

  useEffect(() => {
    ChatUtils.socketIOMessageReceived(conversation, profile.username, setConversationId, setConversation)
  }, [profile.username, conversation])

  console.log(conversationId)

  useEffect(() => {
    if (searchParams.get('id')) {
      const getConversastion = async () => {
        const conversation = await chatService.getChatMessages(searchParams.get('id'))
        setConversation([...conversation.data.messages])
      }

      getConversastion()
    }
  }, [searchParams])

  const handleSendMessage = async () => {
    if (chatMessage === '') return

    const newMessageData = {
      conversationId: '654895376ed1e42d56e62fb2',
      receiverId: '65477d92c8e60d61549e2d3c',
      receiverUsername: 'Trung17',
      receiverAvatarColor: '#03a9f4',
      receiverProfilePicture: 'https://res.cloudinary.com/dgyk7uloc/image/upload/v1699184021/65477d92c8e60d61549e2d3c"',
      content: chatMessage,
      gifUrl: '',
      isRead: false,
      selectedImage: ''
    }

    socketService.socket?.emit('SEND_MESSAGE', newMessageData)

    try {
      await chatService.saveChatMessage(newMessageData)
    } catch (error: any) {
      return toast.error(error.message)
    } finally {
      setChatMessage('')
    }
  }

  return (
    <div className='w-full flex'>
      <div className='w-1/4 border'>
        <ChatList />
      </div>
      <div className='w-3/4 border'>
        {(selectedChatUser || chatList.length > 0) && (
          <div className='w-full flex flex-col h-screen bg-light dark:bg-[#0C0F1D] flex-1'>
            <header className='flex items-center justify-between px-6 my-5'>
              {/* <User
          username={messages?.receiverUsername || ''}
          source={conversation?.receiverAvatarColor || ''}
          alt={conversation?.receiverUsername || ''}
          presence='active'
        >
          <span className='text-xs text-dark font-normal'>Online</span>
        </User> */}
              <div className='flex items-center gap-4'>
                <span>
                  <SearchSvg width='24px' height='24px' />
                </span>
                <span>
                  <CallSvg width='24px' height='28px' />
                </span>
                <span>
                  <PhoneSvg width='22px' height='22px' />
                </span>
                <span>
                  <MoreSvg width='24px' height='5px' />
                </span>
              </div>
            </header>
            {/* Chat Box */}
            <div className='flex flex-col h-full overflow-auto px-6'>
              <div className='flex flex-col gap-4'>
                {conversation.map((conversation) => (
                  <div
                    key={conversation._id}
                    className={clsx(
                      'rounded-full px-4 py-2 w-max text-sm font-normal',
                      conversation.senderId === profile._id
                        ? 'ml-auto style-bg-main text-light'
                        : 'mr-auto dark:bg-messageDark bg-messageLight text-dark dark:text-light'
                    )}
                  >
                    {conversation.content}
                  </div>
                ))}
              </div>
            </div>
            {/* Input Chat */}
            <div className='flex items-center w-full gap-6 mt-auto px-6 py-6'>
              <div className='base-border-main flex flex-1'>
                <div className='bg-inputLight dark:bg-inputDark w-full flex items-center rounded-full'>
                  <span className='px-6'>
                    <LinkSvg height='24px' width='24px' />
                  </span>
                  <input
                    type='text'
                    placeholder='Type a message here...'
                    onChange={(e) => setChatMessage(e.target.value)}
                    value={chatMessage}
                    className='outline-none border-none bg-transparent py-1.5 flex-1'
                  />
                  <button className='px-6 relative' onClick={() => {}}>
                    <IconSvg height='24px' width='24px' />
                  </button>
                </div>
              </div>

              <button className='hover:bg-slate-400/25 rounded-full p-1' onClick={handleSendMessage}>
                <SendSvg height='32' width='32' />
              </button>
            </div>
          </div>
        )}
        {(selectedChatUser || !chatList.length) && (
          <div className='flex justify-center items-center'>Thêm hoặc tìm kiếm bạn nhắn tin đi</div>
        )}
      </div>
    </div>
  )
}
export default Chat
