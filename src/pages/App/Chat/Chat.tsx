// import clsx from 'clsx'
// import { useEffect, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import MoreSvg from 'src/assets/icons/components/MoreSvg'
// import CallSvg from 'src/assets/icons/components/messages/CallSvg'
// import IconSvg from 'src/assets/icons/components/messages/IconSvg'
// import LinkSvg from 'src/assets/icons/components/messages/LinkSvg'
// import PhoneSvg from 'src/assets/icons/components/messages/PhoneSvg'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChatList } from 'src/components'
import ChatWindow from 'src/components/Chat/window/ChatWindow'
// import { SearchSvg, SendSvg } from 'src/components/icons'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getConversationList } from 'src/store/api/chat'

const Chat = () => {
  const { selectedChatUser, chatList } = useAppSelector((state) => state.chat)
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useEffectOnce(() => {
    dispatch(getConversationList())
  })

  return (
    <div className='w-full flex'>
      <div className='w-1/4'>
        <ChatList />
      </div>
      <div className='w-3/4 bg-light dark:bg-[#0C0F1D]'>
        {searchParams.get('id') && (selectedChatUser || chatList.length > 0) && <ChatWindow />}

        {!selectedChatUser && !chatList.length && (
          <div className='flex justify-center w-full h-full items-center text-white'>
            Thêm hoặc tìm kiếm bạn nhắn tin đi
          </div>
        )}
      </div>
    </div>
  )
}
export default Chat
