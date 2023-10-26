import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { AnimatePresence } from 'framer-motion'
import PostMain from './components/Posts/PostMain'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <AppRoutes />
        <PostMain />
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
      </AnimatePresence>
    </BrowserRouter>
  )
}
