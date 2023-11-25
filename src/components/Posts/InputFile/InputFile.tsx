import { useEffect, useState } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import withBaseComponent from 'src/hooks/withBaseComponent'
import { ImageUtils } from 'src/services/utilities/image.utils'

const InputFile = withBaseComponent(({ dispatch }) => {
  const [imagePreview, setImagePreview] = useState<{ preview: string; name: string }>({
    preview: '',
    name: ''
  })

  const valuesPostEdit = useAppSelector((state) => state.postEdit)
  const { editModalIsOpen } = useAppSelector((state) => state.modal)

  const handleInputImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (files && files.length > 0) {
      const file = files[0]
      setImagePreview({ preview: URL.createObjectURL(file), name: file.name })
      ImageUtils.addFiletoRedux({ file, dispatch, type: 'image', editModalIsOpen })
    }
  }

  useEffect(() => {
    if (editModalIsOpen && valuesPostEdit.imagePost && valuesPostEdit.imgId && valuesPostEdit.imgVersion) {
      setImagePreview((prev) => ({ ...prev, preview: valuesPostEdit.imagePost }))
    }
  }, [editModalIsOpen, valuesPostEdit])

  return (
    <div className='w-full border border-dark/10 dark:border-light/10 rounded-lg h-[250px] mt-auto overflow-y-auto overflow-x-hidden'>
      <label htmlFor='image-set' className='h-full w-full cursor-pointer block relative'>
        <input onChange={handleInputImageChange} name='image-get' type='file' className='hidden' id='image-set' />
        <div className='flex flex-col items-center justify-center absolute shadow-shadowInner w-full h-full inset-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
          {!imagePreview.preview && (
            <>
              <div className='border border-dark dark:border-light px-2 py-1.5 rounded-full mb-3'>
                <svg xmlns='http://www.w3.org/2000/svg' width='35' height='40' viewBox='0 0 45 55' fill='none'>
                  <path
                    d='M35.625 24.0622V45.833C35.625 46.4408 35.4275 47.0237 35.0758 47.4535C34.7242 47.8832 34.2473 48.1247 33.75 48.1247H7.5C7.00272 48.1247 6.52581 47.8832 6.17417 47.4535C5.82254 47.0237 5.625 46.4408 5.625 45.833V13.7497C5.625 13.1419 5.82254 12.559 6.17417 12.1292C6.52581 11.6995 7.00272 11.458 7.5 11.458H24.7163'
                    className='stroke-dark dark:stroke-light'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M31.875 11.4579H39.375M35.6203 6.63965V15.8063M11.25 35.5548L16.875 26.3537L19.6875 29.7912L22.9688 23.4891L30 35.5548H11.25Z'
                    className='stroke-dark dark:stroke-light'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <p className='text-sm text-dark font-bold dark:text-light'>More photos and videos</p>
              <span className='text-[9px] font-semibold text-dark dark:text-light'>Drag and Drop</span>
            </>
          )}

          {imagePreview.preview && (
            <div className={`relativetext-xl text-light`}>
              <img src={imagePreview.preview} className='w-full h-auto object-contain' alt='' />
            </div>
          )}
        </div>
      </label>
    </div>
  )
})

export default InputFile
