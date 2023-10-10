import { Article, Metric } from '../../../components'
import { NavLink, useLocation } from 'react-router-dom'
import { IsActive, NotActive } from 'src/styles'
import AppSettings from 'src/configs/appsettings'
import { useTheme } from 'src/hooks/useTheme'
import SettingSvg from 'src/assets/icons/components/navigations/SettingSvg'
import SignOutSvg from 'src/assets/icons/components/navigations/SignOutSvg'

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
  const location = useLocation()
  const { chooseTheme } = useTheme()

  return (
    <div className='md:flex hidden flex-col max-w-1/5 sticky inherits-h-header base-hidden-scroll overflow-y-auto overflow-x-hidden gap-3 py-3'>
      <Article className='p-3 flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col justify-center items-center gap-2 my-2'>
          <div className='rounded-full relative w-20 h-20 overflow-hidden'>
            <img
              className='absolute inset-0 object-cover w-full h-full max-w-full'
              src='https://images.unsplash.com/photo-1695763594594-31505b18b58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
              alt=''
            />
          </div>

          <h5 className='text-sm text-dark dark:text-light font-bold'>Hồ Minh Thành</h5>
        </div>
        <div className='flex items-center justify-between flex-row w-full'>
          {Metrics.map(({ count, id, label }) => (
            <Metric key={id} count={count} label={label} />
          ))}
        </div>
      </Article>

      <Article className='flex flex-col justify-center items-start gap-3 py-5'>
        {AppSettings.Routes.map((route, index) => (
          <div key={index} className='relative overflow-hidden'>
            <NavLink to={route.pathname} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
              <route.icon
                width='28px'
                height='28px'
                active={location.pathname === route.pathname}
                theme={chooseTheme}
              />
              {route.label}
              {route.pathname === location.pathname && (
                <div className='linear-gradient-activated h-10 w-2.5 absolute -left-[3%] top-2/4 rounded-lg -translate-y-2/4'></div>
              )}
            </NavLink>
          </div>
        ))}
      </Article>

      <Article className='flex flex-col gap-5 items-start py-5 justify-center'>
        <NavLink to={'/home/settings'} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
          <SettingSvg height='28' width='28' />
          Settings
        </NavLink>
        <button className={NotActive}>
          <SignOutSvg height='28' width='28' />
          Logout
        </button>
      </Article>

      <Article className='p-3 flex flex-col justify-center'>
        <h2 className='font-bold text-base mb-2 text-center'>Contact us</h2>
        <address className='text-xs mb-1'>lime8@gmail.com</address>
        <p className='whitespace-pre-wrap break-words text-xs'>Copyright © COGNOSPHERE. All Rights Reserved.</p>
      </Article>
    </div>
  )
}

export default Sidebar
