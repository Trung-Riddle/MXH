/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback, useEffect, useState } from 'react'
import AddFriend from 'src/assets/icons/components/AddFriend'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import SearchMessageSvg from 'src/assets/icons/components/SearchMessageSvg'
import UserPresence from 'src/components/User/UserPresence'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import SearchList from './search-list/SearchList'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import useDebounce from 'src/hooks/useDebounce'
import { cloneDeep, find, findIndex } from 'lodash'
import { toast } from 'react-toastify'
import userService from 'src/services/api/user/user.service'
import { ChatUtils } from 'src/services/utilities/chat.utils'
import { setSelectedChatUser } from 'src/store/slices/chat/chat.slice'
import chatService from 'src/services/api/chat/chat.service'
import ChatBox from '../ChatBox/ChatBox'

const ChatList = () => {
  const { profile } = useAppSelector((state) => state.user)
  const { chatList } = useAppSelector((state) => state.chat)
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [componentType, setComponentType] = useState('chatList')
  // eslint-disable-next-line prefer-const
  let [chatMessageList, setChatMessageList] = useState<any>([])
  const [rendered, setRendered] = useState(false)
  const debouncedValue = useDebounce(search, 1000)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const searchUsers = useCallback(async (query: string) => {
    setIsSearching(true)
    try {
      setSearch(query)
      if (query) {
        const response = await userService.searchUsers(query)
        setSearchResult(response.data.search)
        setIsSearching(false)
      }
    } catch (error: any) {
      setIsSearching(false)
      toast(error?.response?.data?.message)
    }
  }, [])

  const addSelectedUserToList = useCallback(
    (user: any) => {
      const newUser = {
        receiverId: user?._id,
        receiverUsername: user?.username,
        receiverAvatarColor: user?.avatarColor,
        receiverProfilePicture: user?.profilePicture,
        senderUsername: profile?.username,
        senderId: profile?._id,
        senderAvatarColor: profile?.avatarColor,
        senderProfilePicture: profile?.profilePicture,
        content: ''
      }
      ChatUtils.joinRoomEvent(user, profile)
      ChatUtils.privateChatMessages = []
      const findUser = find(
        chatMessageList,
        (chat: any) => chat.receiverId === searchParams.get('id') || chat.senderId === searchParams.get('id')
      )
      if (!findUser) {
        const newChatList: any = [newUser, ...chatMessageList]
        setChatMessageList(newChatList)
        if (!chatList.length) {
          dispatch(setSelectedChatUser({ isLoading: false, user: newUser }))
          const userTwoName =
            newUser?.receiverUsername !== profile?.username ? newUser?.receiverUsername : newUser?.senderUsername
          chatService.addUsersChat({ userOne: profile?.username, userTwo: userTwoName })
        }
      }
    },
    [chatList, chatMessageList, dispatch, searchParams, profile]
  )

  const removeSelectedUserFromList = (event: any) => {
    event.stopPropagation()
    chatMessageList = cloneDeep(chatMessageList)
    const userIndex = findIndex(chatMessageList, ['receiverId', searchParams.get('id')])
    if (userIndex > -1) {
      chatMessageList.splice(userIndex, 1)
      setSelectedUser(null)
      setChatMessageList(chatMessageList)
      ChatUtils.updatedSelectedChatUser({
        chatMessageList,
        profile,
        username: searchParams.get('username'),
        setSelectedChatUser,
        params: chatMessageList.length ? updateQueryParams(chatMessageList[0]) : null,
        pathname: location.pathname,
        navigate,
        dispatch
      })
    }
  }
  const addUsernameToUrlQuery = async (user: any) => {
    try {
      const sender = find(
        ChatUtils.chatUsers,
        (userData) =>
          userData.userOne === profile?.username && userData.userTwo.toLowerCase() === searchParams.get('username')
      )
      const params = updateQueryParams(user)
      const userTwoName = user?.receiverUsername !== profile?.username ? user?.receiverUsername : user?.senderUsername
      const receiverId = user?.receiverUsername !== profile?.username ? user?.receiverId : user?.senderId
      navigate(`${location.pathname}?${createSearchParams(params)}`)
      if (sender) {
        chatService.removeChatUsers(sender)
      }
      chatService.addUsersChat({ userOne: profile?.username, userTwo: userTwoName })
      if (user?.receiverUsername === profile?.username && !user.isRead) {
        await chatService.markMessagesAsRead(profile?._id, receiverId)
      }
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }
  const updateQueryParams = (user: any) => {
    setSelectedUser(user)
    const params = ChatUtils.chatUrlParams(user, profile)
    ChatUtils.joinRoomEvent(user, profile)
    ChatUtils.privateChatMessages = []
    return params
  }
  useEffect(() => {
    if (debouncedValue) {
      searchUsers(debouncedValue)
    }
  }, [debouncedValue, searchUsers])
  useEffect(() => {
    if (selectedUser && componentType === 'searchList') {
      addSelectedUserToList(selectedUser)
    }
  }, [addSelectedUserToList, componentType, selectedUser])
  useEffect(() => {
    setChatMessageList(chatList)
  }, [chatList])
  useEffect(() => {
    if (rendered) {
      ChatUtils.socketIOChatList(profile, chatMessageList, setChatMessageList)
    }
    if (!rendered) setRendered(true)
  }, [chatMessageList, profile, rendered])
  return (
    <>
      <div className='w-full flex-col sm:w-[350px] bg-light dark:bg-darkMessage shadow-lg h-screen overflow-y-auto flex-shrink-0'>
        {/* Avatar User */}
        <div className='flex items-start flex-col w-full my-5 h-[80%]'>
          {/* Frients Presence */}
          <div className='w-full mb-5 px-6'>
            <p className='font-semibold text-dark text-sm mb-2 dark:text-light'>Online now</p>
            <div className='flex overflow-x-scroll w-full base-hidden-scroll items-center overflow-y-hidden gap-3 p-[2px] relative'>
              {Array(8)
                .fill({})
                .map((_, index) => (
                  <UserPresence
                    key={index}
                    alt=''
                    presence='active'
                    source='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQjVCJMbseIAEjcb1XuiGMc87zPg0WFJTeJ7frMFIGTBM5ul7VRr8CAiCZHvyxif6IJKs0dzuCPYGZjXZE'
                  />
                ))}
            </div>
          </div>

          {/* Search Frients */}
          <div className='w-full mb-5 px-6'>
            <div className='flex items-center justify-between mb-2'>
              <h2 className='text-dark font-semibold text-sm dark:text-light'>Message</h2>
              <MoreSvg width='25px' />
            </div>

            <div className='flex items-center justify-between gap-3'>
              <label
                htmlFor='searchFriendInput'
                className='bg-inputLight rounded-full flex items-center flex-1 shadow-md'
              >
                <span className='h-full px-4 cursor-pointer'>
                  <SearchMessageSvg width='18px' height='18px' />
                </span>
                <input
                  type='text'
                  value={search}
                  onChange={(event) => {
                    setIsSearching(true)
                    setSearch(event.target.value)
                  }}
                  id='searchFriendInput'
                  className='outline-none border-none bg-transparent py-3 text-xs font-light'
                  placeholder='Enter for search...'
                />
                {search && (
                  <button
                    onClick={() => {
                      setSearch('')
                      setIsSearching(false)
                      setSearchResult([])
                    }}
                  >
                    &#x2715;
                  </button>
                )}
              </label>

              <span className='cursor-pointer'>
                <AddFriend width='24px' height='24px' />
              </span>
            </div>
          </div>
          <div className='overflow-y-scroll h-[800px] w-full'>
            {!search && (
              <div className='flex flex-col w-full'>
                {chatMessageList.map((data: any, index: number) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  <ChatBox
                    key={index}
                    onClick={() => addUsernameToUrlQuery(data)}
                    username={data.receiverUsername}
                    avatar={data.receiverProfilePicture}
                  />

                  // <div
                  //   key={index}
                  //   className={`conversation-item ${
                  //     searchParams.get('username') === data?.receiverUsername.toLowerCase() ||
                  //     searchParams.get('username') === data?.senderUsername.toLowerCase()
                  //       ? 'bg-rose-400'
                  //       : ''
                  //   }`}
                  //   onClick={() => addUsernameToUrlQuery(data)}
                  // >
                  //   <div className='avatar w-full'>
                  //     <Avatar
                  //       fullName={
                  //         data.receiverUsername !== profile?.username ? data.receiverUsername : data?.senderUsername
                  //       }
                  //       avatar={
                  //         data.receiverName !== profile?.username
                  //           ? data.receiverProfilePicture
                  //           : data?.senderProfilePicture
                  //       }
                  //     />
                  //     {data?.createdAt && <span>{timeAgo.transform(data?.createdAt)}</span>}
                  //     {!data?.body && (
                  //       // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  //       <div className='cursor-pointer' onClick={removeSelectedUserFromList}>
                  //         &#x2715;
                  //       </div>
                  //     )}
                  //     {data?.body && !data?.deleteForMe && !data.deleteForEveryone && (
                  //       <ChatListBody data={data} profile={profile} />
                  //     )}
                  //     {data?.deleteForMe && data?.deleteForEveryone && (
                  //       <div className='conversation-message'>
                  //         <span className='message-deleted'>message deleted</span>
                  //       </div>
                  //     )}
                  //     {data?.deleteForMe && !data.deleteForEveryone && data.senderUsername !== profile?.username && (
                  //       <div className='conversation-message'>
                  //         <span className='message-deleted'>message deleted</span>
                  //       </div>
                  //     )}
                  //     {data?.deleteForMe && !data.deleteForEveryone && data.receiverUsername !== profile?.username && (
                  //       <ChatListBody data={data} profile={profile} />
                  //     )}
                  //   </div>
                  // </div>
                ))}
              </div>
            )}
          </div>
          {/* Frients Messages */}
          <div className='flex items-start flex-col overflow-y-auto h-full px-6 w-full gap-3 base-hidden-scroll'>
            <SearchList
              searchTerm={search}
              result={searchResult}
              isSearching={isSearching}
              setSearchResult={setSearchResult}
              setIsSearching={setIsSearching}
              setSearch={setSearch}
              setSelectedUser={setSelectedUser}
              setComponentType={setComponentType}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatList
