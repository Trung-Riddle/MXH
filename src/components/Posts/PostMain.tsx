import { useCallback, useState } from 'react'
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
import { resetPost } from 'src/store/slices/post/post.slice'

/**
 * utilities
 */
import { privacyCase } from 'src/services/utilities/cases'

/**
 * Components
 */
import Icons from 'src/assets/icons'
import { animatePostMain } from './animations'
import { Button, User } from '..'
import Form from './Form/Form'
import Options from './Options/Options'
import postService from 'src/services/api/post/post.service'

// # mock user data

const PostMain = withBaseComponent(({ dispatch, useSelector }) => {
  // # states
  const [content, setContent] = useState('')
  // # Selectors
  const profile = useSelector((state: RootState) => state.user.profile)
  const mainModalIsOpen = useSelector((state: RootState) => state.modal.mainModalIsOpen)
  const privacyModalIsOpen = useSelector((state: RootState) => state.modal.privacyModalIsOpen)
  const feelingModalIsOpen = useSelector((state: RootState) => state.modal.feelingModalIsOpen)

  // # Selectors value
  const privacy = useSelector((state: RootState) => state.post.privacy)
  const feeling = useSelector((state: RootState) => state.post.feelings)
  const bgColor = useSelector((state: RootState) => state.post.bgColor)
  const imagePost = useSelector((state: RootState) => state.post.imagePost)
  const videoPost = useSelector((state: RootState) => state.post.videoPost)
  const gifUrl = useSelector((state: RootState) => state.post.gifUrl)

  // # Functions handle modals and posts
  const handleCloseMainModal = useCallback(() => {
    dispatch(toggleOpenMainModal())
    dispatch(resetPost())
  }, [dispatch])

  const handleTogglePrivacyModal = useCallback(() => {
    dispatch(toggleOpenPrivacyModal())
  }, [dispatch])

  const hanldeSetContent = (content: string) => {
    setContent(content)
  }

  // # Functions handle submit and dispatch
  const handleSubmit = async () => {
    const post = {
      privacy: privacy || '',
      feelings: feeling || '',
      bgColor: bgColor || '',
      post: content || '',
      profilePicture: profile.profilePicture,
      imagePost: imagePost || '',
      videoPost: videoPost || '',
      gifUrl: gifUrl || ''
    }

    if (post.post && !post.bgColor && !post.imagePost && !post.videoPost) {
      delete post.imagePost
      delete post.videoPost
      await postService.createPost(post)
    } else if (post?.post && post.bgColor) {
      delete post.imagePost
      delete post.videoPost
      await postService.createPost(post)
    } else if (post?.post && post?.imagePost && !post.bgColor) {
      delete post.videoPost
      await postService.createPostWithImage(post)
    } else if (post?.post && post.imagePost && !post.bgColor && !post.videoPost) {
      delete post.imagePost
      await postService.createPostWithImage(post)
    }

    dispatch(toggleOpenMainModal())
    dispatch(resetPost())
  }

  if (mainModalIsOpen) {
    return (
      <div className='fixed w-full h-full inset-0 z-50 bg-black/60 flex items-center justify-center overflow-x-hidden overflow-y-hidden'>
        {privacyModalIsOpen && <ModalPrivacy />}
        {feelingModalIsOpen && <ModalFeeling />}

        <motion.div {...animatePostMain} className='bg-light dark:bg-dark w-1/3 px-6 pb-4 rounded-md relative'>
          <h2 className='text-base py-4 mx-auto font-bold text-dark dark:text-light text-center'>Tạo bài viết</h2>
          <div className='border-linear-color w-3/4 mx-auto'></div>

          <div className='flex flex-col gap-4 my-4'>
            <User source={profile.profilePicture} username={profile.username} alt='Avatar User' feeling={feeling}>
              <Button
                className='flex items-center py-0.5 px-2 gap-2 text-xs font-normal w-max'
                rounded='rounded-lg'
                onClick={handleTogglePrivacyModal}
              >
                {privacyCase(privacy)}
              </Button>
            </User>

            <Form onChangeContent={hanldeSetContent} />
            <Options />

            <Button onClick={handleSubmit} className='w-full py-2' rounded='rounded-lg'>
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
