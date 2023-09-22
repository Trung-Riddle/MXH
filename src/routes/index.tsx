import { useRoutes } from 'react-router-dom'
import { Feeds } from 'src/pages/App'
import Explore from 'src/pages/App/Explore/Explore'
import Friend from 'src/pages/App/Friend/Friend'
import Home from 'src/pages/App/Friend/Home/Home'
import Message from 'src/pages/App/Messages/Message'
import SingleChatBox from 'src/pages/App/Messages/SingleChatBox'
import Profile from 'src/pages/App/Profile/Profile'
import { AuthTabs } from 'src/pages/Auth'
import { LayoutMain, LayoutMessage } from 'src/pages/Layouts'
import LayoutChildren from 'src/pages/Layouts/LayoutChildren'

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
      path: '',
      element: <LayoutMessage />,
      children: [
        {
          path: 'message',
          element: <Message />,
          children: [
            {
              path: ':userMessageId',
              element: <SingleChatBox />
            }
          ]
        },
        {
          path: '',
          element: <LayoutChildren />,
          children: [
            {
              path: 'explore',
              element: <Explore />
            },
            {
              path: 'profile',
              element: <Profile />
            },
            {
              path: 'friends',
              element: <Friend />,
              children: [
                {
                  path: '',
                  element: <Home />
                }
              ]
            }
          ]
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
