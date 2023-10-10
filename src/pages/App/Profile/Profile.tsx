import { NavLink, Outlet } from 'react-router-dom'
import EditSvg from 'src/assets/icons/components/EditSvg'
import { Button } from 'src/components'
import User from 'src/components/User/User'
import { AddSvg } from 'src/components/icons'
import AppSettings from 'src/configs/appsettings'

const IsActive = 'text-dark dark:text-light text-sm font-medium'
const NotActive = 'text-dark dark:text-light text-sm font-medium'

const Profile = () => {
  return (
    <div className='w-full h-full text-dark dark:text-light bg-lightMain dark:bg-darkMain'>
      <div className='-mt-[72px] h-96 relative'>
        <img
          src='https://images.unsplash.com/photo-1694544484120-ec99280802a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
          alt=''
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      <div className='bg-light shadow-shadowMain dark:bg-dark -mt-24 py-4 rounded-md mb-5'>
        <div className='z-40 relative max-w-7xl mx-auto flex items-center'>
          <User
            size='xl'
            alt=''
            source='https://images.unsplash.com/photo-1695200194179-532a62a35b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
            username='Hồ Minh Thành'
            styleText='text-white font-semibold text-xl'
            styleContent='gap-10 ml-4'
          >
            <div className='flex items-center text-dark'>
              <nav className='flex items-center gap-6'>
                {AppSettings.RoutesProfile.map((route, index) => (
                  <NavLink
                    key={index}
                    to={route.pathname}
                    className={({ isActive }) => (isActive ? IsActive : NotActive)}
                  >
                    {route.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </User>

          <div className='flex items-end flex-1 flex-col gap-10 relative z-50'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-3'>
                  <span className='text-sm font-semibold text-light'>73</span>
                  <p className='text-sm font-semibold text-light'>Posts</p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-sm font-semibold text-light'>11.7k</span>
                  <p className='text-sm font-semibold text-light'>Following</p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-sm font-semibold text-light'>120</span>
                  <p className='text-sm font-semibold text-light'>Followers</p>
                </div>
              </div>
              <Button className='flex items-center gap-1 py-1 px-3'>
                <EditSvg width='24px' height='24px' />
                Edit
              </Button>
            </div>
            <Button className='flex items-center flex-shrink-0 justify-center gap-2 px-3 py-1 ml-10'>
              <AddSvg width='24' height='24' />
              Create new post
            </Button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mb-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default Profile
