import { useRoutes } from 'react-router-dom'
import { Feeds, Friends } from 'src/pages/App'
import Explore from 'src/pages/App/Explore/Explore'
import Message from 'src/pages/App/Messages/Message'
import SingleChatBox from 'src/pages/App/Messages/SingleChatBox'
import Profile from 'src/pages/App/Profile/Profile'
import { AuthTabs } from 'src/pages/Auth'
import { LayoutMain, LayoutMessage } from 'src/pages/Layouts'
import LayoutChildren from 'src/pages/Layouts/LayoutChildren'

// Pages child friends
import { BirthDay, Home, List, Request, Suggest } from 'src/pages/App/Friends'

// Pages child profile
import { About, Friend, Photo, Post } from 'src/pages/App/Profile'

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
              path: 'friends',
              element: <Friends />,
              children: [
                {
                  path: '',
                  element: <Home />
                },
                {
                  path: 'requests',
                  element: <Request />
                },
                {
                  path: 'suggestions',
                  element: <Suggest />
                },
                {
                  path: 'list',
                  element: <List />
                },
                {
                  path: 'birthdays',
                  element: <BirthDay />
                }
              ]
            },
            {
              path: 'profile',
              element: <Profile />,
              children: [
                {
                  path: '',
                  element: <Post />
                },
                {
                  path: 'about',
                  element: <About />
                },
                {
                  path: 'friends',
                  element: <Friend />
                },
                {
                  path: 'photos',
                  element: <Photo />
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
