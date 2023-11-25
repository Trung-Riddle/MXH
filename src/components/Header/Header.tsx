import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SerializedError } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { Button, Search } from '..'
import { AddSvg, FangSvg, HeartSvg, NotifySvg, SendSvg } from '../icons'
import { useAppDispatch } from 'src/hooks/useRedux'
import { toggleOpenMainModal } from 'src/store/slices/modal/modal.slice'
import FangHeadSvg from 'src/assets/icons/components/navigations/FangHeadSvg'
import ToggleTheme from '../Toggle/ToggleTheme'
import { getNotifications } from 'src/store/api/notification'
import socketService from 'src/services/socket/socket.service'

export default function Header() {
  const dispatch = useAppDispatch()
  const [showNotify, setShowNotify] = useState(false)
  const [listNotification, setListNotification] = useState<any[]>([])
  const [isNotification, setIsNotification] = useState(false)

  useEffect(() => {
    dispatch(getNotifications())
      .then(({ payload }) => setListNotification(payload.notifications))
      .catch((err: SerializedError) => toast.error(err.message))
  }, [dispatch])

  useEffect(() => {
    socketService.socket?.on('insert notification', (data: any) => {
      if (data) {
        setIsNotification(true)
        setListNotification([...data])
      }
    })
  }, [])

  return (
    <header className='py-2 md:shadow-md w-full flex items-center md:px-6 px-3 bg-light dark:bg-dark flex-shrink-0 z-10 sticky h-header top-0'>
      <span className='md:hidden'>
        <FangHeadSvg width='35' height='35' />
      </span>

      <div className='md:flex items-center hidden'>
        <div className='flex items-center gap-2'>
          <FangSvg width='39' height='39' styleText='text-3xl' />
        </div>

        <Search />

        <Button
          onClick={() => dispatch(toggleOpenMainModal())}
          className='md:flex hidden items-center flex-shrink-0 justify-center gap-2 px-3 py-1 md:ml-5 lg:ml-20 text-sm font-normal'
        >
          <AddSvg width='24' height='24' />
          Create new post
        </Button>
      </div>

      <ul className='flex items-center gap-2 ml-auto'>
        <li className='m-5 hidden md:block'>
          <ToggleTheme />
        </li>
        <li className='hidden md:block'>
          <Button className='p-2'>
            <HeartSvg width='20' height='20' />
          </Button>
        </li>
        <li className='relative'>
          <Button
            onClick={() => {
              setShowNotify((n) => !n)
              setIsNotification(false)
            }}
            className='p-2'
          >
            <NotifySvg width='20' height='20' />
          </Button>
          {isNotification && (
            <span className='absolute top-0 right-0 flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
            </span>
          )}
          {showNotify && (
            <div className='absolute top-full right-0 w-[300px] base-hidden-scroll max-h-[300px] overflow-y-scroll shadow-shadowMain rounded-md bg-light dark:bg-dark flex flex-col p-2'>
              <h3 className='font-bold text-lg'>Thông báo</h3>
              {listNotification.length === 0 && <div>No Notifications</div>}
              {listNotification.map((notify) => (
                <div
                  className='flex gap-2 hover:bg-slate-400/25 cursor-pointer transition-all ease-linear duration-150 rounded-md p-2'
                  key={notify._id}
                >
                  <img className='w-14 h-14 rounded-full' src={notify.userFrom.profilePicture} alt='' />

                  <p className='text-sm'>{notify.message}</p>
                </div>
              ))}
            </div>
          )}
        </li>
        <li>
          <Link to='/message'>
            <Button className='p-2'>
              <SendSvg width='20' height='20' />
            </Button>
          </Link>
        </li>
      </ul>
    </header>
  )
}
