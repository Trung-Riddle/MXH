import { useState, useRef, useEffect } from 'react'

import User from 'src/components/User/User'
import ToggleBackground from './ToggleBackground'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store'
import { onCloseFormPost, togglePrivacyModal } from 'src/store/slices/modal/modal.slice'
import { Button } from 'src/components'
import { motion, AnimatePresence } from 'framer-motion'
import ModalSelection from '../Post-model/ModalSelection'
import ModalPrivacy from '../Modals/Privacy/ModalPrivacy'
import ModalFeeling from '../Modals/Feeling/ModalFeeling'
import { privacyCase } from 'src/services/utilities/cases'
import { ImageUtils } from 'src/services/utilities/image.utils'

interface PostFormProps {
  selectImage?: () => void
  selectVideo?: () => void
}

const PostForm = ({ selectImage, selectVideo }: PostFormProps) => {
  const dispatch = useAppDispatch()

  const [postData, setPostData] = useState({
    avatarColor: '',
    profilePicture: '',
    bgColor: '',
    post: '',
    imgPost: '',
    videoPost: '',
    feelings: '',
    gifUrl: '',
    privacy: 'public'
  })
  // Post
  const [selectedPostImage, setSelectedPostImage] = useState<File | undefined>()
  const [selectedPostVideo, setSelectedPostVideo] = useState<File | undefined>()

  const [toggleBackground, setToggleBackground] = useState(false)
  const [showModalNotify, setShowModalNotify] = useState(false)
  const [changeBackground, setChangeBackground] = useState('')
  const [content, setContent] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('Nhập nội dung ở đây...')

  const contentEditableRef = useRef<HTMLDivElement | null>(null)
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpenFormPost)
  const isOpenFeelingsModal = useAppSelector((state: RootState) => state.modal.feelingIsOpen)
  const feeling = useAppSelector((state: RootState) => state.post.feelings)
  const privacy = useAppSelector((state: RootState) => state.post.privacy)

  // privacy modal selector
  const isOpenPrivacyModal = useAppSelector((state: RootState) => state.modal.privacyIsOpen)
  let result

  const handleCreatePost = () => {
    try {
      if (selectImage && selectedPostImage) {
        ImageUtils.readFileToBase64(selectedPostImage)
      } else {
        selectedPostVideo && ImageUtils.readFileToBase64(selectedPostVideo)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClosePostModal = () => {
    if (content !== '') {
      setShowModalNotify(true)
    } else {
      dispatch(onCloseFormPost())
      setToggleBackground(false)
      setChangeBackground('')
    }
  }

  const handleOke = () => {
    setContent('')
    dispatch(onCloseFormPost())
    setToggleBackground(false)
    setChangeBackground('')
    setShowModalNotify(false)
    setPlaceholder('Nhập nội dung ở đây...')
  }

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (content !== '') {
        e.preventDefault()
        e.returnValue = 'Bạn có chắc chắn muốn rời khỏi trang này?'
      }
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [content])

  const replaceEmojis = (text: string) => {
    let updatedText = text.replace(/:\)/g, '😊')
    updatedText = updatedText.replace(/=D/g, '😃')
    return updatedText
  }

  const handleInput = () => {
    const text = contentEditableRef.current?.textContent || ''
    // Giới hạn số lượng ký tự là 100
    const updatedText = replaceEmojis(text)

    if (updatedText.length > 50) {
      contentEditableRef.current!.style.fontSize = '12px'
    } else {
      contentEditableRef.current!.style.fontSize = '16px'
    }

    if (updatedText.length > 100) {
      // Nếu văn bản paste dài hơn 100 ký tự, chỉ lấy 100 ký tự đầu tiên
      const truncatedText = updatedText.substring(0, 100)
      contentEditableRef.current!.textContent = truncatedText
      setContent(truncatedText)
    } else {
      contentEditableRef.current!.textContent = updatedText
      setContent(updatedText)
    }
    // Di chuyển con trỏ tới cuối văn bản
    if (contentEditableRef.current) {
      const range = document.createRange()
      const selection = window.getSelection()
      console.log(range)
      console.log(selection)
      console.log(contentEditableRef.current)

      range.selectNodeContents(contentEditableRef.current)
      range.collapse(false) // Di chuyển con trỏ tới cuối văn bản

      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }

  const handleFocus = () => {
    setPlaceholder('')
  }

  const handleBlur = () => {
    if (!content.trim()) {
      setPlaceholder('Nhập nội dung ở đây...')
    }
  }

  return (
    isOpen && (
      <AnimatePresence>
        <div className='fixed w-full h-full inset-0 z-50 bg-black/60 flex items-center justify-center overflow-x-hidden overflow-y-hidden'>
          {isOpenFeelingsModal && <ModalFeeling />}
          {isOpenPrivacyModal && <ModalPrivacy />}

          <motion.div
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className='bg-light dark:bg-dark w-1/3 px-6 pb-4 rounded-md relative'
          >
            <div className='text-center py-4'>
              <h2 className='text-base font-bold text-dark dark:text-light'>Tạo bài viết</h2>
            </div>

            <div className='border-linear-color w-3/4 mx-auto'></div>

            <div className='flex flex-col gap-4 my-4'>
              <div className='flex justify-between'>
                <User
                  source='https://images.unsplash.com/photo-1695782098642-b71604fcb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                  username='Hồ Minh Thành'
                  alt='Avatar'
                  feeling={feeling}
                >
                  <Button
                    className='flex items-center py-0.5 px-2 gap-2 text-xs font-normal w-max'
                    rounded='rounded-lg'
                    onClick={() => dispatch(togglePrivacyModal())}
                  >
                    {privacyCase(privacy)}
                  </Button>
                </User>

                <span className='mt-auto text-sm font-normal text-dark dark:text-light'>{content?.length}/100</span>
              </div>
              <motion.div
                animate={changeBackground && { scale: [1, 1.02, 1] }}
                transition={{ ease: 'easeOut', bounce: 0.25 }}
                className={`rounded-md flex flex-col ${changeBackground} ${
                  changeBackground ? 'min-h-[350px]' : 'h-52'
                }`}
              >
                <div
                  role='presentation'
                  contentEditable
                  ref={contentEditableRef}
                  onInput={handleInput}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`p-2 outline-none text-dark dark:text-light overflow-y-scroll ${
                    changeBackground && 'text-light text-center my-auto max-h-[302px] overflow-x-hidden'
                  }`}
                  suppressContentEditableWarning
                >
                  {content || placeholder}
                </div>

                <ToggleBackground
                  isToggle={toggleBackground}
                  onToggleBackground={setToggleBackground}
                  onChangeBackground={setChangeBackground}
                />
              </motion.div>

              <ModalSelection />
            </div>

            <Button className='w-full py-2' rounded='rounded-lg'>
              Đăng
            </Button>

            <button className='absolute top-3 right-3' onClick={handleClosePostModal}>
              <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 50 50' fill='none'>
                <path
                  d='M15 15L35 35M35 15L15 35'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-2 stroke-dark dark:stroke-light'
                />
                <rect x='0.5' y='0.5' width='49' height='49' rx='24.5' stroke='url(#paint0_linear_893_108)' />
                <defs>
                  <linearGradient
                    id='paint0_linear_893_108'
                    x1='0'
                    y1='25'
                    x2='50'
                    y2='25'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#2ECEC2' />
                    <stop offset='0.348958' stopColor='#34BAD0' />
                    <stop offset='1' stopColor='#3B89F1' />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </motion.div>
        </div>

        {showModalNotify && (
          <motion.div
            key={'1'}
            initial={{ scale: 0.2, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            className='absolute z-50 bg-light rounded-lg bottom-6 right-6 w-[300px] flex flex-col p-2'
          >
            <p className='text-sm mb-2'>Cảnh báo: Có nội dung chưa được lưu. Bạn có muốn đóng modal?</p>
            <div className='flex items-center gap-2 ml-auto'>
              <Button
                className='py-2 px-3 text-xs font-semibold'
                rounded='rounded-lg'
                onClick={() => setShowModalNotify(false)}
              >
                Đóng
              </Button>
              <Button className='py-2 px-3 text-xs font-semibold' rounded='rounded-lg' onClick={handleOke}>
                Oke
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  )
}

export default PostForm
