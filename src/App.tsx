import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import MenuMobile from './components/Mobiles/MenuMobile'
import { AnimatePresence } from 'framer-motion'
import PostMain from './components/Posts/PostMain'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <AppRoutes />
        <MenuMobile />
        <PostMain />
      </AnimatePresence>
    </BrowserRouter>
  )
}
