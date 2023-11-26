import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { AnimatePresence } from 'framer-motion'
import PostMain from './components/Posts/PostMain'
import { ToastContainer } from 'react-toastify'
import ModalExplore from './pages/App/Explore/ModalExplore'
import ModalUpload from './pages/App/Explore/ModalUpload'
import { useEffect } from 'react'
import socketService from './services/socket/socket.service'
import PostEdit from './components/Posts/PostEdit'
import 'moment/locale/vi'

export default function App() {
  useEffect(() => {
    socketService.setupSocketConnection()
  }, [])

  return (
    <AnimatePresence>
      <BrowserRouter>
        <AppRoutes />
        <PostEdit />
        <PostMain />
        <ModalExplore />
        <ModalUpload />
        <ToastContainer
          position='top-center'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </BrowserRouter>
    </AnimatePresence>
  )
}
