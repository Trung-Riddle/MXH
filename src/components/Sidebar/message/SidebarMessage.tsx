import { memo, useCallback, useEffect, useState } from 'react'
import { NavLink, createSearchParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import FangHeadSvg from 'src/assets/icons/components/navigations/FangHeadSvg'
import SettingSvg from 'src/assets/icons/components/navigations/SettingSvg'
import SignOutSvg from 'src/assets/icons/components/navigations/SignOutSvg'
import AppSettings from 'src/configs/appsettings'
import { useAppSelector } from 'src/hooks/useRedux'
import withBaseComponent from 'src/hooks/withBaseComponent'
import IHocProps from 'src/interfaces/hoc.interface'
import chatService from 'src/services/api/chat/chat.service'
import userService from 'src/services/api/user/user.service'
import socketService from 'src/services/socket/socket.service'
import { ChatUtils } from 'src/services/utilities/chat.utils'
import { getAllPostThunk } from 'src/store/api/posts'
import { clearUser } from 'src/store/slices/user/user.slice'
import Swal from 'sweetalert2'

const SidebarMessage = ({ navigate, dispatch }: IHocProps) => {
  const [sidebar, setSideBar] = useState<any>([])
  const [chatPageName, setChatPageName] = useState('')
  const { chatList } = useAppSelector((state) => state.chat)
  const { profile } = useAppSelector((state) => state.user)
  const location = useLocation()
  const pathname = location.pathname.includes('/friends/')
    ? `/${location.pathname.split('/')[1]}/`
    : `/${location.pathname.split('/')[1]}`
  const logout = () => {
    Swal.fire({
      title: 'Bạn có chắc là muốn đăng xuất?',
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearUser())
        userService.logoutUser()
        navigate('/')
      }
    })
  }
  const checkUrl = (name: string) => {
    return location.pathname.includes(name.toLowerCase())
  }

  const navigateToPage = (name: string, url: string) => {
    if (name === 'feeds') {
      dispatch(getAllPostThunk())
    }

    if (name === 'chat') {
      setChatPageName('chat')
    } else {
      leaveChatPage()
      setChatPageName('')
    }
    socketService?.socket.off('message received')
    navigate(url)
  }

  const createChatUrlParams = useCallback(
    (url: string) => {
      if (chatList.length) {
        const chatUser = chatList[0]
        const params = ChatUtils.chatUrlParams(chatUser, profile)
        ChatUtils.joinRoomEvent(chatUser, profile)
        return `${url}?${createSearchParams(params)}`
      } else {
        return url
      }
    },
    [chatList, profile]
  )

  const markMessagesAsRad = useCallback(
    async (user: any) => {
      try {
        const receiverId = user?.receiverUsername !== profile?.username ? user?.receiverId : user?.senderId
        if (user?.receiverUsername === profile?.username && !user.isRead) {
          await chatService.markMessagesAsRead(profile?._id, receiverId)
        }
        const userTwoName = user?.receiverUsername !== profile?.username ? user?.receiverUsername : user?.senderUsername
        await chatService.addUsersChat({ userOne: profile?.username, userTwo: userTwoName })
      } catch (error: any) {
       toast(error.response.data.message)
      }
    },
    [dispatch, profile]
  )

  const leaveChatPage = async () => {
    try {
      const chatUser = chatList[0]
      const userTwoName =
        chatUser?.receiverUsername !== profile?.username ? chatUser?.receiverUsername : chatUser?.senderUsername
      ChatUtils.privateChatMessages = []
      await chatService.removeChatUsers({ userOne: profile?.username, userTwo: userTwoName })
    } catch (error: any) {
      toast(error.response.data.message)
    }
  }

  useEffect(() => {
    setSideBar(AppSettings.Routes)
  }, [])

  useEffect(() => {
    if (chatPageName === 'chat') {
      const url = createChatUrlParams('/chat')
      navigate(url)
      if (chatList.length && !chatList[0].isRead) {
        markMessagesAsRad(chatList[0])
      }
    }
  }, [chatList, chatPageName, createChatUrlParams, markMessagesAsRad, navigate])
  return (
    <div className='h-screen sticky md:flex flex-col overflow-auto w-max base-hidden-scroll hidden top-0'>
      {/* Logo Fang */}
      <div className='mx-6 mb-10 mt-5'>
        <FangHeadSvg width='40px' height='40px' />
      </div>

      {/* Navigations Layout Messages */}
      <nav className='flex items-start flex-col h-full'>
        <div className='flex flex-col items-start justify-center w-full'>
          {AppSettings.Routes.map((route) => (
            <div key={route.pathname} className='relative w-full'>
              <NavLink
                to={route.pathname}

                className={({ isActive }) =>
                  isActive ? AppSettings.NavigationStyles.Active : AppSettings.NavigationStyles.UnActive
                }
              >
                <route.icon width='28px' height='28px' active={route.pathname === pathname} />
              </NavLink>
              {route.pathname === pathname && (
                <div className='linear-gradient-activated h-10 w-2.5 absolute -left-[5%] top-2/4 rounded-lg -translate-y-2/4'></div>
              )}
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start justify-center mt-auto w-full pb-10'>
          <NavLink to={'settings'} className='flex items-center justify-center py-4 w-full'>
            <SettingSvg width='28' height='28' />
          </NavLink>
          <button onClick={logout} className='w-full flex items-center justify-center py-4'>
            <SignOutSvg width='28' height='28' />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default withBaseComponent(memo(SidebarMessage))
