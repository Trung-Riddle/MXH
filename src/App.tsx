import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import MenuMobile from './components/Mobiles/MenuMobile'
import PostForm from './components/Posts/PostForm/PostForm'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <MenuMobile />
      <PostForm />
    </BrowserRouter>
  )
}
