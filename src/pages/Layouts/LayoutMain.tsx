import { Header, SidebarLeftHome } from 'src/components'

const LayoutMain = () => {
  return (
    <div
      className='w-full bg-dark-second h-screen overflow-hidden
  text-[#1B1D2A] dark:text-white-80 flex flex-col flex-grow'
    >
      <Header />
      <div className='w-main mx-auto'>
        <SidebarLeftHome />
        
      </div>
    </div>
  )
}

export default LayoutMain
