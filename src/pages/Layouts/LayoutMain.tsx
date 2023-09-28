import { Header, SidebarLeftHome } from 'src/components'
import Social from '../App/Social'

const LayoutMain = () => {
  return (
    <div
      className='w-full bg-dark-second h-screen overflow-hidden
  text-[#1B1D2A] dark:text-white-80 flex flex-col flex-grow'
    >
      <Header />
      <div className='flex flex-col flex-grow flex-shrink min-h-0'>
        <div className='flex items-start gap-6 mx-auto w-4/5 flex-row my-3 flex-grow flex-shrink min-h-0 min-w-0 relative'>
          <SidebarLeftHome />
          <Social />
        </div>
      </div>
    </div>
  )
}

export default LayoutMain
