import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './routes'
import MenuMobile from './components/Mobiles/MenuMobile'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <MenuMobile />
    </BrowserRouter>
  )
}
