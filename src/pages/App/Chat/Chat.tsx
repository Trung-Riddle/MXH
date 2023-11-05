import React from 'react'
import { ChatList } from 'src/components'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getConversationList } from 'src/store/api/chat'

const Chat = () => {
  const { selectedChatUser, chatList } = useAppSelector((state) => state.chat)
  const dispatch = useAppDispatch()
  useEffectOnce(() => {
    dispatch(getConversationList())
  })
  return (
    <div className='w-full flex'>
      <div className='w-1/4 border'>
        <ChatList />
      </div>
      <div className='w-3/4 border'>
        {(selectedChatUser || chatList.length > 0) && <div>Cửa sổ chat</div>}
        {(selectedChatUser || !chatList.length) && (
          <div className='flex justify-center items-center'>Thêm hoặc tìm kiếm bạn nhắn tin đi</div>
        )}
      </div>
    </div>
  )
}
export default Chat
