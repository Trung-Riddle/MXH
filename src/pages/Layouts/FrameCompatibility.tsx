import React from 'react'
import LayoutMessageDeskstop from './Desktops/LayoutMessageDeskstop'
import LayoutMessageMobile from './Mobiles/LayoutMessageMobile'

const FrameCompatibility = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth >= 576 ? <LayoutMessageDeskstop /> : <LayoutMessageMobile />
}

export default FrameCompatibility
