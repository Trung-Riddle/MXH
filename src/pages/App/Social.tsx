import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Avatar, Header, Metric } from 'src/components'
import { Navbars } from 'src/mocks/data'
import { IsActive, NotActive } from 'src/styles'
import Article from 'src/components/Article/Article'
import { LogoutSvg, SettingSvg } from 'src/components/icons'

export default function Social() {
  const location = useLocation()

  const currentUser = {
    name: 'Minh Thành',
    avatar: 'https://s120-ava-talk.zadn.vn/1/0/a/d/13/120/a6740d4fbdb661f360e03b10e6f115c2.jpg',
    alt: '',
    presence: true
  }

  const Metrics = [
    {
      id: 1,
      label: 'posts',
      count: 623
    },
    {
      id: 2,
      label: 'Follower',
      count: 775.2
    },
    {
      id: 3,
      label: 'Following',
      count: 88
    }
  ]

  return (
    <div className='w-full h-full bg-white dark:bg-[#0C0F1D] text-[#1B1D2A] dark:text-white flex flex-col flex-grow'>
      <Header />
      <div className='flex flex-col flex-grow flex-shrink min-h-0'>
        <div className='flex items-start gap-6 mx-auto w-4/5 flex-row my-3 flex-grow flex-shrink min-h-0 min-w-0 relative'>
          

          <Outlet />

          
        </div>
      </div>
    </div>
  )
}
