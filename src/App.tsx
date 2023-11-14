import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { AnimatePresence } from 'framer-motion'
import PostMain from './components/Posts/PostMain'
import { ToastContainer } from 'react-toastify'
import ModalExplore from './pages/App/Explore/ModalExplore'
import ModalUpload from './pages/App/Explore/ModalUpload'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

export default function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
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
      </BrowserRouter>
    </AnimatePresence>
  )
}
