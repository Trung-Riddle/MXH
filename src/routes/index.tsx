import { useRoutes } from 'react-router-dom'
import Social from 'src/pages/App/Social'
import { AuthTabs } from 'src/pages/Auth'

export default function AppRoutes() {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/home',
      element: <Social />
    }
  ])
  return elements
}
