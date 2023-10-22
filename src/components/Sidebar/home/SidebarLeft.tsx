import { Article, Metric } from '../../../components'
import { NavLink, useLocation } from 'react-router-dom'
import { IsActive, NotActive } from 'src/styles'
import AppSettings from 'src/configs/appsettings'
import { useTheme } from 'src/hooks/useTheme'
import SettingSvg from 'src/assets/icons/components/navigations/SettingSvg'
import SignOutSvg from 'src/assets/icons/components/navigations/SignOutSvg'
import { useAppSelector } from 'src/hooks/useRedux'
import { clearUser } from 'src/store/slices/user/user.slice'
import userService from 'src/services/api/user/user.service'
import Swal from 'sweetalert2'
import withBaseComponent from 'src/hooks/withBaseComponent'
import IHocProps from 'src/interfaces/hoc.interface'
import { memo } from 'react'
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

const Sidebar = ({ navigate, dispatch }: IHocProps) => {
  const { profile } = useAppSelector((state) => state.user)
  const location = useLocation()
  const { chooseTheme } = useTheme()
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
  return (
    <div className='md:flex hidden flex-col max-w-1/5 sticky inherits-h-header base-hidden-scroll overflow-y-auto overflow-x-hidden gap-3 py-3'>
      <Article className='p-3 flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col justify-center items-center gap-2 my-2'>
          <div className='rounded-full relative w-20 h-20 overflow-hidden'>
            <img
              className='absolute inset-0 object-cover w-full h-full max-w-full'
              src={profile.profilePicture}
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
        <button onClick={logout} className={NotActive}>
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

export default withBaseComponent(memo(Sidebar))
