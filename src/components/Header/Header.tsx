import { Button, Search } from '..'
import { AddSvg, FangSvg, HeartSvg, NotifySvg, SendSvg } from '../icons'
import { useAppDispatch } from 'src/hooks/useRedux'
import { toggleOpenMainModal } from 'src/store/slices/modal/modal.slice'
import FangHeadSvg from 'src/assets/icons/components/navigations/FangHeadSvg'
import ToggleTheme from '../Toggle/ToggleTheme'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import notifyService from 'src/services/api/notifications/notify.service'

export default function Header() {
  const dispatch = useAppDispatch()

  const getNotifications = async () => {
    try {
      const result = await notifyService.getAllNotifications()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotifications()
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
          <Button className='p-2'>
            <NotifySvg width='20' height='20' />
          </Button>

          <div className='absolute top-0 right-0 w-[250px] shadow bg-light dark:bg-dark'></div>
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
