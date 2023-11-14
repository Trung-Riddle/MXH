/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { FaTimes } from 'react-icons/fa'

interface IImagePreview {
  image: string
  onRemoreImg: () => void
}
const ImagePreview = ({ image, onRemoreImg }: IImagePreview) => {
  return (
    <div className='absolute left-4 bottom-[78px] bg-white-02 rounded-lg'>
      <div className='border rounded-md p-5'>
        <img className='w-24 object-cover rounded-lg' src={image} alt='' />
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className='absolute top-1 cursor-pointer right-1' onClick={onRemoreImg}>
          <FaTimes size={14} />
        </span>
      </div>
    </div>
  )
}

export default ImagePreview
