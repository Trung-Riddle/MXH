import { useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * HOC (Higher Order Component) to reuse dispatching, selectors, navigate, of redux and react-router-dom
 */
import withBaseComponent from 'src/hooks/withBaseComponent'
import { RootState } from 'src/store'

/**
 * Secondary Modals
 */
import ModalFeeling from './Modals/Feeling/ModalFeeling'
import ModalPrivacy from './Modals/Privacy/ModalPrivacy'

/**
 * Redux actions
 */
import { toggleOpenMainModal, toggleOpenPrivacyModal } from 'src/store/slices/modal/modal.slice'

/**
 * Components
 */
import Icons from 'src/assets/icons'
import { animatePostMain } from './animations'

import { Button, User } from '..'
import Form from './Form/Form'
import Options from './Options/Options'

const user = {
  username: 'Hồ Minh Thành',
  avatarColor:
    'https://images.unsplash.com/photo-1695782098642-b71604fcb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
}

const PostMain = withBaseComponent(({ dispatch, useSelector }) => {
  // # Selectors
  const mainModalIsOpen = useSelector((state: RootState) => state.modal.mainModalIsOpen)
  const privacyModalIsOpen = useSelector((state: RootState) => state.modal.privacyModalIsOpen)
  const feelingModalIsOpen = useSelector((state: RootState) => state.modal.feelingModalIsOpen)

  // # Functions handle modals and posts
  const handleCloseMainModal = useCallback(() => {
    dispatch(toggleOpenMainModal())
  }, [dispatch])

  const handleTogglePrivacyModal = useCallback(() => {
    dispatch(toggleOpenPrivacyModal())
  }, [dispatch])

  if (mainModalIsOpen) {
    return (
      <div className='fixed w-full h-full inset-0 z-50 bg-black/60 flex items-center justify-center overflow-x-hidden overflow-y-hidden'>
        {privacyModalIsOpen && <ModalPrivacy />}
        {feelingModalIsOpen && <ModalFeeling />}

        <motion.div {...animatePostMain} className='bg-light dark:bg-dark w-1/3 px-6 pb-4 rounded-md relative'>
          <h2 className='text-base py-4 mx-auto font-bold text-dark dark:text-light text-center'>Tạo bài viết</h2>
          <div className='border-linear-color w-3/4 mx-auto'></div>

          <div className='flex flex-col gap-4 my-4'>
            <User source={user.avatarColor} username={user.username} alt='Avatar User'>
              <Button
                className='flex items-center py-0.5 px-2 gap-2 text-xs font-normal w-max'
                rounded='rounded-lg'
                onClick={handleTogglePrivacyModal}
              >
                Test
              </Button>
            </User>

            <Form />
            <Options />

            <Button className='w-full py-2' rounded='rounded-lg'>
              Đăng bài
            </Button>
          </div>

          <button onClick={handleCloseMainModal} className='absolute top-3 right-3'>
            <Icons.Post.Close width='35' height='35' />
          </button>
        </motion.div>
      </div>
    )
  }
})

export default PostMain
