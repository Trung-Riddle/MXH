import { Header, SidebarRightHome } from 'src/components'
import { Outlet } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const LazySidebarLeft = lazy(() => import('src/components/Sidebar/home/SidebarLeft'))

const LayoutMain = () => {
  return (
    <div className='w-full bg-lightMain dark:bg-darkMain text-dark dark:text-light'>
      <Header />
      <div className='flex md:w-4/5 w-full flex-col md:flex-row md:mx-auto relative -z-0'>
        <Suspense fallback='Loading...'>
          <LazySidebarLeft />
        </Suspense>
        <Outlet />
        <SidebarRightHome />
      </div>
    </div>
  )
}

export default LayoutMain
