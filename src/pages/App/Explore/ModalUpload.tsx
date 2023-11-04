import React, { useState } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store'

const ModalUpload = () => {
  const uploadModalIsOpen = useAppSelector((state: RootState) => state.explore.uploadModalIsOpen)
  const [imageSrc, setImageSrc] = useState('')
  const [uploadData, setUploadData] = useState()
  const [imageFile, setImageFile] = useState<File | null>(null)

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()

    const onload = (onLoadEvent: ProgressEvent<FileReader>) => {
      setImageSrc(onLoadEvent.target?.result as string)
      setUploadData(undefined)
    }

    reader.onload = onload

    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      setImageFile(e.target.files[0])
    }

    reader.onloadend = onload
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData()

    if (imageFile !== null) {
      formData.append('file', imageFile)
      formData.append('upload_preset', 'my-uploads')
    }

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dyfyxrbm6/image/videos', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        setImageSrc(data.secure_url)
        setUploadData(data)
      } else {
        // Handle error when the request fails
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error(error)
    }
  }

  if (uploadModalIsOpen) {
    return (
      <div className='fixed inset-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
        <div className='bg-light dark:bg-dark shadow-shadowMain'>
          <form method='post' onSubmit={handleOnSubmit}>
            <p>
              <input type='file' onChange={handleOnChange} name='file' />
            </p>

            <img className='w-[200px]' src={imageSrc} alt='' />

            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}

            {uploadData && (
              <code>
                <pre>{JSON.stringify(uploadData, null, 2)}</pre>
              </code>
            )}
          </form>
        </div>
      </div>
    )
  }
  return null
}

export default ModalUpload
