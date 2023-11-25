import { Avatar } from 'src/components'
import { CommentSvg, LikeSvg } from 'src/components/icons/posts'
import Utils from 'src/services/utilities/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import { useCollapse } from 'react-collapsed'
import { Link, useSearchParams } from 'react-router-dom'
import SendSvg from 'src/assets/icons/components/messages/SendSvg'
import postService from 'src/services/api/post/post.service'
import { RootState } from 'src/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import socketService from 'src/services/socket/socket.service'
import clsx from 'clsx'
import { cloneDeep } from 'lodash'
import { toast } from 'react-toastify'
import { toggleOpenEditModal } from 'src/store/slices/modal/modal.slice'
import { updatePostEdit } from 'src/store/slices/post/postEdit.slice'

interface PostProps {
  profilePicture: string
  quote?: string
  username: string
  imagePost?: string
  videoPost?: string
  bgColor?: string
  gifUrl?: string
  post?: string

  imgVersion?: string
  imgId?: string
  postId?: string
  userId?: string
  currentPost?: any
}

const Post = ({
  imagePost,
  profilePicture,
  quote,
  username,
  bgColor,
  gifUrl,
  post,
  postId,
  userId,
  videoPost,
  currentPost,
  imgId,
  imgVersion
}: PostProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const [postSeeMore, setPostSeeMore] = useState(false)
  const postRef = useRef<HTMLDivElement | null>(null)
  const profile = useAppSelector((state: RootState) => state.user.profile)
  const [comment, setComment] = useState('')
  const [reactions, setReactions] = useState<any[]>([])
  const [editPostPopup, setEditPostPopup] = useState(false)
  const dispatch = useAppDispatch()
  const editModalIsOpen = useAppSelector((state) => state.modal.editModalIsOpen)
  const [listComment, setListComment] = useState<any[]>([])

  const getAllReactionOfPost = async (postId: string) => {
    try {
      const result = await postService.getAllReaction(postId)
      setReactions([...result.data.reactions])
    } catch (error) {
      console.log(error)
    }
  }

  const getAllCommentOfPost = async (postId: string) => {
    try {
      const result = await postService.getAllCommentOfPost(postId)
      setListComment(result.data.comments)
    } catch (error) {
      console.log(error)
    }
  }

  const socketIOComment = (stateComments: any, setStateComments: any) => {
    stateComments = cloneDeep(stateComments)
    socketService.socket?.on('add comment', (comment: any) => {
      if (comment.postId === postId) {
        stateComments = [...stateComments, comment]
        setStateComments(stateComments)
      }
    })
  }

  useEffect(() => {
    getAllReactionOfPost(postId as string)
    getAllCommentOfPost(postId as string)
  }, [postId])

  useEffect(() => {
    socketIOComment(listComment, setListComment)
  }, [listComment])

  useEffect(() => {
    socketService.socket?.on('reaction', (r: any) => {
      if (r.postId === postId) {
        setReactions([...reactions, r])
      }
    })
  }, [postId, reactions])

  useEffect(() => {
    socketService.socket?.on('delete reaction', (username: any) => {
      setReactions([...reactions.filter((r) => r.username !== username)])
    })
  }, [reactions])

  const handleReactionPost = async () => {
    if (reactions.some((r) => r.username === profile.username)) {
      await postService.removeReactionOfPost(postId as string, 'like', {
        like: 0,
        love: 0,
        happy: 0,
        sad: 0,
        wow: 0,
        angry: 0
      })
      return
    } else {
      await postService.addReactionToPost({
        userTo: userId,
        postId,
        type: 'like',
        previousReaction: '',
        postReactions: { like: 1, love: 0, happy: 0, sad: 0, wow: 0, angry: 0 },
        profilePicture: profile.profilePicture
      })
    }
  }

  const handleCommentPost = async () => {
    if (comment === '') return

    await postService.addCommentToPost({
      userTo: userId,
      postId: postId,
      comment: comment,
      profilePicture: profile.profilePicture
    })
    setComment('')
  }

  const handleDeletePost = async (postId: string) => {
    await postService.deletePost(postId)

    setEditPostPopup(false)
    toast.success('Bạn đã xóa bài đăng thành công')
  }

  let imageUrl: string = ''
  let content = <div>{post}</div>

  if (bgColor !== '') {
    content = (
      <div
        className={`rounded-xl md:rounded-md overflow-hidden h-[200px] sm:h-[350px] flex items-center justify-center ${bgColor}`}
      >
        <p className='font-semibold text-base sm:text-xl text-center text-light'>{post}</p>
      </div>
    )
  }

  if (imagePost !== '' && !bgColor && !videoPost && !bgColor) {
    imageUrl = Utils.appImageUrl(imgVersion!, imgId!)
    content = (
      <>
        <div className='group/text'>
          <p className={`text-xs font-medium sm:text-sm ${postSeeMore ? '' : 'line-clamp-3'}`}>{post}</p>
          {post!.length > 200 && (
            <motion.button
              onClick={() => setPostSeeMore((v) => !v)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className='text-xs style-bg-main py-1 px-2 rounded-lg mt-2 outline-none text-light'
            >
              {postSeeMore ? 'Close' : 'See More'}
            </motion.button>
          )}
        </div>

        <div className='rounded-xl md:rounded-md overflow-hidden'>
          <img src={imageUrl} className='w-full h-auto object-contain' alt='' />
        </div>
      </>
    )
  }

  return (
    <>
      <div
        ref={postRef}
        className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-3 sm:mb-6 last:mb-0 relative overflow-hidden'
      >
        <div className='flex flex-col gap-2 md:gap-4'>
          <div className='flex items-center justify-between'>
            <Link to={`/profile/${userId}`}>
              <Avatar avatar={profilePicture} subs={quote} fullName={username} size='md' />
            </Link>

            {profile._id === userId && (
              <div className='relative'>
                <button
                  className='rounded-full py-3.5 px-1 hover:bg-slate-300/25'
                  onClick={() => setEditPostPopup((v) => !v)}
                >
                  <MoreSvg width='25' />
                </button>
                {editPostPopup && (
                  <div className='absolute top-[120%] bg-light dark:bg-dark rounded-md shadow w-[150px] flex flex-col right-0 p-2'>
                    <button
                      onClick={() => {
                        dispatch(toggleOpenEditModal())
                        dispatch(updatePostEdit(currentPost))
                        setEditPostPopup(false)
                      }}
                      className='rounded-md py-1 px-1 hover:bg-slate-300/25'
                    >
                      Edit
                    </button>
                    <button
                      className='rounded-md py-1 px-1 hover:bg-slate-300/25'
                      onClick={() => handleDeletePost(postId as string)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {content}
          <div className='flex items-center md:justify-between select-none'>
            <div className='flex w-2/4 flex-row gap-2 justify-center'>
              <button onClick={handleReactionPost}>
                <LikeSvg username={profile.username} reactions={reactions} className='md:w-8 md:h-8 w-6 h-6' />
              </button>
              <span className='flex items-center gap-2 text-xs md:text-sm'>
                {reactions.length}
                <span className='hidden md:block'>like</span>
              </span>
            </div>
            <div {...getToggleProps()} className='flex w-2/4 flex-row gap-2 md:mr-0 justify-center'>
              <CommentSvg className='md:w-8 md:h-8 w-6 h-6' />
              <span className='flex items-center gap-2 text-xs md:text-sm'>
                {listComment.length} <span className='hidden md:block'>comment</span>
              </span>
            </div>
          </div>
        </div>

        <div {...getCollapseProps()} className='relative'>
          {listComment.length > 0 && (
            <div className='h-auto max-h-[400px] overflow-y-auto mb-12'>
              {listComment.map((comment) => (
                <Link
                  key={comment._id + Math.random()}
                  to={`/profile/${userId}`}
                  className={clsx(
                    'flex flex-col mt-4',
                    profile.username === comment.username ? 'items-end' : 'items-start'
                  )}
                >
                  <div className='flex gap-2 items-start'>
                    <img src={comment.profilePicture} alt='' className='rounded-full object-cover w-8 h-8' />

                    <div className='flex flex-col'>
                      <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                        <span className='text-xs font-semibold'>{comment.username}</span>
                        <span className='text-sm leading-4 font-normal'>{comment.comment}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {listComment.length === 0 && (
            <div className='mb-12 mt-2 text-center py-2 border-t border-slate-400/25 font-semibold'>No comments</div>
          )}
        </div>

        {isExpanded && (
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className='absolute bottom-0 left-0 right-0 w-full h-auto flex items-center gap-2 bg-light dark:bg-dark shadow-shadowMain p-3'
            >
              <img src={profile.profilePicture} alt='' className='object-cover rounded-full w-8 h-8' />

              <div className='flex items-center bg-slate-400/10 rounded-2xl py-1.5 px-3 w-full'>
                <input
                  onChange={(e) => setComment(e.target.value)}
                  type='text'
                  className='outline-none flex-1 bg-transparent'
                  placeholder='Write comment...'
                  value={comment}
                  id={'comment' + postId}
                />
                <button onClick={handleCommentPost} className='outline-none'>
                  <SendSvg width='20' height='20' />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default Post
