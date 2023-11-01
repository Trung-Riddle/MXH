import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import withBaseComponent from 'src/hooks/withBaseComponent'
import { ImageUtils } from 'src/services/utilities/image.utils'
import { resetPost, updatePostItem } from 'src/store/slices/post/post.slice'

const InputFile = withBaseComponent(({ dispatch }) => {
  const imgRef = useRef<HTMLInputElement | null>(null)
  // const [imagePostFile, setImagePostFile] = useState<File | null>(null)
  const { imagePost } = useAppSelector((state) => state.post)
  const { imageModalIsOpen } = useAppSelector((state) => state.modal)
  const handleInputImageChange = (event: any) => {
    ImageUtils.addFiletoRedux({ event, post: '', dispatch, type: 'image' })
  }
  useEffect(() => {
    if (!imageModalIsOpen) {
      dispatch(
        updatePostItem({
          imagePost: ''
        })
      )
    }
  }, [imageModalIsOpen])
  return (
    <div className='w-full border-2 rounded-lg h-[250px] mt-auto'>
      <label htmlFor='image-set' className='h-full w-full cursor-pointer block border relative'>
        <input
          onChange={handleInputImageChange}
          ref={imgRef}
          name='image-get'
          type='file'
          className='hidden'
          id='image-set'
        />
        <span className='absolute p-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>choose image</span>
        <img src={imagePost || ''} className='w-full h-full object-contain' alt='' />
      </label>
    </div>
  )
})

export default InputFile
