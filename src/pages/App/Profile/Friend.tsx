import { Link, NavLink } from 'react-router-dom'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import { Article } from 'src/components'
import AppSettings from 'src/configs/appsettings'

const Friend = () => {
  return (
    <Article margin='mx-0' className='p-3 gap-2 sm:gap-4'>
      <h2 className='text-base sm:text-lg font-bold sm:my-4'>Bạn bè</h2>

      <nav className='flex items-center justify-start gap-4'>
        {AppSettings.RoutesProfileFriends.map((route, index) => (
          <NavLink key={index} to={route.pathname} className='text-xs font-medium sm:text-base'>
            {route.label}
          </NavLink>
        ))}
      </nav>

      <div className='flex items-center w-full flex-wrap gap-2 mt-2'>
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className='flex sm:flex-row w-[calc(50%_-_4px)] sm:w-[calc(50%_-_16px)] relative gap-2 sm:gap-0 items-center p-1 sm:p-3 shadow-shadowMain rounded-md'
          >
            <Link to='' className='block sm:mr-4 flex-shrink-0 relative sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/380701852_1030815751490986_4546689690304730269_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E-o1I2kuMjYAX_t6yX1&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCiDGw4F4yClqbzauxfp7xpZiwR1XRS_F9rrbzb2Mketw&oe=655405D5'
                alt=''
                className='absolute inset-0 w-full h-full rounded-md object-cover max-w-full'
              />
            </Link>

            <div className='flex-grow sm:pr-4'>
              <Link to=''>
                <span className='max-w-full text-[10px] break-words min-w-0 font-semibold sm:text-base isolate text-dark dark:text-light block'>
                  Ngô Thị Thạch Thảo
                </span>
              </Link>

              <Link to={''} className='text-[8px] font-normal block sm:mt-1'>
                6 bạn chung
              </Link>
            </div>

            <div className='px-1 py-3.5 cursor-pointer hover:bg-slate-400/50 rounded-full absolute'>
              <MoreSvg width='25' />
            </div>
          </div>
        ))}
      </div>
    </Article>
  )
}

export default Friend
