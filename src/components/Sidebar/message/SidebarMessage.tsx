import { NavLink, useLocation } from 'react-router-dom'
import FangHeadSvg from 'src/assets/icons/components/navigations/FangHeadSvg'
import SettingSvg from 'src/assets/icons/components/navigations/SettingSvg'
import SignOutSvg from 'src/assets/icons/components/navigations/SignOutSvg'
import AppSettings from 'src/configs/appsettings'

const SidebarMessage = () => {
  const location = useLocation()
  const pathname = location.pathname.includes('/friends/')
    ? `/${location.pathname.split('/')[1]}/`
    : `/${location.pathname.split('/')[1]}`

  return (
    <div className='h-full md:flex flex-col overflow-auto w-max base-hidden-scroll hidden'>
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

        <div className='flex flex-col items-start justify-center mt-auto w-full mb-10'>
          <NavLink to={'settings'} className='flex items-center justify-center py-4 w-full'>
            <SettingSvg width='28' height='28' />
          </NavLink>
          <button className='w-full flex items-center justify-center py-4'>
            <SignOutSvg width='28' height='28' />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SidebarMessage
