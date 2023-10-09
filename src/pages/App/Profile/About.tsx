import { NavLink, Outlet } from 'react-router-dom'
import { Article } from 'src/components'
import AppSettings from 'src/configs/appsettings'

const IsActice = 'text-dark dark:text-light font-medium text-sm bg-[#F5F5F5] px-3 py-2 rounded-md'
const NotActive = 'text-dark dark:text-light font-medium text-sm px-3 py-2'

const About = () => {
  return (
    <div className='flex flex-grow gap-5'>
      <Article className='gap-3 p-3 mx-0 basis-1/4 max-w-[30%]'>
        <h2 className='font-semibold text-lg mb-2 ml-3'>Giới thiệu</h2>

        <nav className='flex flex-col gap-2'>
          {AppSettings.RoutesAbout.map((route, index) => (
            <NavLink to={route.pathname} className={({ isActive }) => (isActive ? IsActice : NotActive)} key={index}>
              {route.label}
            </NavLink>
          ))}
        </nav>
      </Article>

      <Article className='w-3/4'>
        <Outlet />
      </Article>
    </div>
  )
}

export default About
