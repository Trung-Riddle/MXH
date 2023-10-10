import { Link, NavLink } from 'react-router-dom'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import { Article } from 'src/components'
import AppSettings from 'src/configs/appsettings'

const Friend = () => {
  return (
    <Article className='p-3 gap-4'>
      <h2 className='text-lg font-bold my-4'>Bạn bè</h2>

      <nav className='flex items-center justify-start gap-4'>
        {AppSettings.RoutesProfileFriends.map((route, index) => (
          <NavLink key={index} to={route.pathname}>
            {route.label}
          </NavLink>
        ))}
      </nav>

      <div className='flex items-center flex-wrap gap-2 mt-2'>
        <div className='flex w-[calc(50%_-_16px)] items-center p-3 shadow-shadowMain rounded-md'>
          <Link to='' className='block mr-4'>
            <img
              src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/376766745_1341584220122968_7563910848580567245_n.jpg?stp=dst-jpg_p120x120&_nc_cat=105&ccb=1-7&_nc_sid=18d9a1&_nc_ohc=nsujey2bItwAX-uP_lQ&_nc_oc=AQnV4jgpibmNsJqaOelkn24p8uXp1y5sCPa3WwkfNu6ClSks474UeF99FJuu-6iwVxA&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCzGUBchDsH4NVGKggDyrBdYumL9PKLzYThsH0Q9Tc_jQ&oe=6527CFFE'
              alt=''
              className='w-[80px] h-[80px] rounded-md'
            />
          </Link>

          <div className='flex-grow pr-4'>
            <Link to=''>
              <span className='max-w-full break-words min-w-0 font-semibold text-base isolate text-dark dark:text-light block'>
                Ngô Thị Thạch Thảo
              </span>
            </Link>

            <Link to={''} className='text-xs font-normal block mt-1'>
              6 bạn chung
            </Link>
          </div>

          <div className='px-1 py-3.5 cursor-pointer hover:bg-slate-400/50 rounded-full'>
            <MoreSvg width='25' />
          </div>
        </div>
        <div className='flex w-[calc(50%_-_16px)] items-center p-3 shadow-shadowMain rounded-md'>
          <Link to='' className='block mr-4'>
            <img
              src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/376766745_1341584220122968_7563910848580567245_n.jpg?stp=dst-jpg_p120x120&_nc_cat=105&ccb=1-7&_nc_sid=18d9a1&_nc_ohc=nsujey2bItwAX-uP_lQ&_nc_oc=AQnV4jgpibmNsJqaOelkn24p8uXp1y5sCPa3WwkfNu6ClSks474UeF99FJuu-6iwVxA&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCzGUBchDsH4NVGKggDyrBdYumL9PKLzYThsH0Q9Tc_jQ&oe=6527CFFE'
              alt=''
              className='w-[80px] h-[80px] rounded-md'
            />
          </Link>

          <div className='flex-grow pr-4'>
            <Link to=''>
              <span className='max-w-full break-words min-w-0 font-semibold text-sm isolate text-dark dark:text-light block'>
                Ngô Thị Thạch Thảo
              </span>
            </Link>

            <Link to={''}>
              <span>6 bạn chung</span>
            </Link>
          </div>

          <div className='px-1 py-3.5 cursor-pointer hover:bg-slate-400/50 rounded-full'>
            <MoreSvg width='25' />
          </div>
        </div>
      </div>
    </Article>
  )
}

export default Friend
