import { useRoutes } from 'react-router-dom'
import { Feeds } from 'src/pages/App'
import Social from 'src/pages/App/Social'
import { AuthTabs } from 'src/pages/Auth'
import { LayoutMain } from 'src/pages/Layouts'

export default function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/home',
      element: <LayoutMain />,
      children: [
        {
          path: 'feeds',
          element: <Feeds />
        },
        {
          path: 'explore',
          element: <h1 className='w-3/5'>Explore</h1>
        },
        {
          path: 'top-tv',
          element: <h1 className='w-3/5'>Top TV</h1>
        },
        {
          path: 'my-favorites',
          element: <h1 className='w-3/5'>Favorites</h1>
        },
        {
          path: 'community',
          element: <h1 className='w-3/5'>Community</h1>
        }
      ]
    },
    {
      path: '*',
      element: <h1>Page not found</h1>
    }
  ])
  return elements
}
