import { NavLink, Outlet } from 'react-router-dom'
import AppSettings from 'src/configs/appsettings'

const Friend = () => {
  return (
    <div className='flex w-full h-full'>
      <div className='flex flex-col px-6 mt-6 w-2/12'>
        <div className='flex items-center mb-6'>
          <h2 className='text-base font-bold'>Bạn bè</h2>
        </div>

        <nav className='flex flex-col gap-6'>
          {AppSettings.RoutesFriends.map((route, index) => (
            <NavLink
              key={index}
              to={`/friends${route.pathname}`}
              className={({ isActive }) =>
                isActive ? AppSettings.NavigationFriendsStyles.Active : AppSettings.NavigationFriendsStyles.UnActive
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className='w-5/6 h-full px-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default Friend
