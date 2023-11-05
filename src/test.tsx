import { AdvancedImage } from '@cloudinary/react'
import { cld } from './services/cloudinary/clodinary'

const Test = () => {
  return (
    <div className='w-full h-full snap-mandatory snap-y overflow-y-scroll'>
      <div className='flex items-center justify-center w-full h-full snap-center'>1</div>
      <div className='flex items-center justify-center w-full h-full snap-center'>2</div>
      <div className='flex items-center justify-center w-full h-full snap-center'>3</div>
      <div className='flex items-center justify-center w-full h-full snap-center'>4</div>
      <div className='flex items-center justify-center w-full h-full snap-center'>
        <AdvancedImage cldImg={cld.image('uuom5tq5fcgfy9ugteo7')} />
      </div>
    </div>
  )
}

export default Test
