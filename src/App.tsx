import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { AnimatePresence } from 'framer-motion'
import PostMain from './components/Posts/PostMain'
import { ToastContainer } from 'react-toastify'
import ModalExplore from './pages/App/Explore/ModalExplore'
import ModalUpload from './pages/App/Explore/ModalUpload'
import { SocketProvider } from './context/SocketProvider'

export default function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <SocketProvider>
          <AppRoutes />
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
        </SocketProvider>
      </BrowserRouter>
    </AnimatePresence>
  )
}
