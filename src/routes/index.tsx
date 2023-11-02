import { useRoutes } from 'react-router-dom'
import { Feeds, Friends } from 'src/pages/App'
import Explore from 'src/pages/App/Explore/Explore'
import Message from 'src/pages/App/Messages/Message'
import SingleChatBox from 'src/pages/App/Messages/SingleChatBox'
import Profile from 'src/pages/App/Profile/Profile'
import { AuthTabs } from 'src/pages/Auth'
import { LayoutMain, LayoutMessage } from 'src/pages/Layouts'
import LayoutChildren from 'src/pages/Layouts/LayoutChildren'

// Pages child profile
import { About, Friend, Resource, Post } from 'src/pages/App/Profile'

// Pages child about
import { ContactAndBasics, FamilyAndRelationships, Overview, WorkAndEducation } from 'src/pages/App/Profile/Abouts'
import { PhotoResource, VideoResource } from 'src/pages/App/Profile/Resources'
import ProtectedRoutes from 'src/pages/ProtectedRoutes'
import LayoutMobile from 'src/pages/Layouts/LayoutMobile'
import NotFound from 'src/pages/Error/NotFound'
import { Suspense, lazy } from 'react'
const LazyPageFeeds = lazy(() => import('src/pages/App/Feeds/Feeds'))

export default function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      element: <LayoutMobile />,
      children: [
        {
          path: '/home',
          element: (
            <ProtectedRoutes>
              <LayoutMain />
            </ProtectedRoutes>
          ),
          children: [
            {
              path: 'feeds',
              element: <LazyPageFeeds />
            }
          ]
        },
        {
          path: '',
          element: (
            <ProtectedRoutes>
              <LayoutMessage />
            </ProtectedRoutes>
          ),
          children: [
            {
              path: 'message',
              element: <Message />
            },
            {
              path: 'message/:receiverId',
              element: <SingleChatBox />
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
                  element: <Friends />
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
                      path: '',
                      element: <About />,
                      children: [
                        {
                          path: 'about',
                          element: <Overview />
                        },
                        {
                          path: 'about-work-and-education',
                          element: <WorkAndEducation />
                        },
                        {
                          path: 'about-family-and-relationships',
                          element: <FamilyAndRelationships />
                        },
                        {
                          path: 'about-contact-and-basic-info',
                          element: <ContactAndBasics />
                        }
                      ]
                    },
                    {
                      path: 'friends',
                      element: <Friend />
                    },
                    {
                      path: 'resources',
                      element: <Resource />,
                      children: [
                        {
                          path: '',
                          element: <PhotoResource />
                        },
                        {
                          path: 'resources-video',
                          element: <VideoResource />
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return elements
}
