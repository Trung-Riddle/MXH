import { Navbars } from 'src/mocks/data'
import { Article, Avatar, Metric } from '../..'
import { NavLink } from 'react-router-dom'
import { IsActive, NotActive } from 'src/styles'
import { LogoutSvg, SettingSvg } from '../../icons'

const currentUser = {
  name: 'Minh Thành',
  avatar: 'https://res.cloudinary.com/dpnwjc5bt/image/upload/v1694206067/bookingtour/xpxfxkpblhmzyeecbk1o.jpg',
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

const Sidebar = () => {
  return (
    <aside className='w-1/5 flex flex-col'>
      <Article className='p-3 flex flex-col items-center justify-center gap-6'>
        <Avatar name={currentUser.name} className='' src={currentUser.avatar} />
        <div className='flex items-center justify-between flex-row w-full'>
          {Metrics.map(({ count, id, label }) => (
            <Metric key={id} count={count} label={label} />
          ))}
        </div>
      </Article>

      <Article className='flex flex-col justify-center items-start gap-5 p-3'>
        {Navbars.map(({ icon: Icon, id, path, value }) => (
          <NavLink key={id} to={path} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
            <Icon height='25' width='25' active={location.pathname === path} />
            {value}
          </NavLink>
        ))}
      </Article>

      <Article className='flex flex-col gap-5 items-start p-3 justify-center'>
        <NavLink to={'/home/settings'} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
          <SettingSvg height='25' width='25' />
          Settings
        </NavLink>
        <button className={NotActive}>
          <LogoutSvg height='25' width='25' />
          Logout
        </button>
      </Article>

      <Article className='p-3 flex flex-col justify-center'>
        <h2 className='font-bold text-base text-light dark:text-white mb-2 text-center'>Contact us</h2>
        <address className='text-[#1B1D2ACC] dark:text-white text-xs mb-1'>lime8@gmail.com</address>
        <p className='text-[#1B1D2ACC] dark:text-white whitespace-pre-wrap break-words text-xs'>
          Copyright © COGNOSPHERE. All Rights Reserved.
        </p>
      </Article>
    </aside>
  )
}

export default Sidebar
