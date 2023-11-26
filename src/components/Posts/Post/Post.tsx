import { Avatar } from 'src/components'
import { CommentSvg, LikeSvg } from 'src/components/icons/posts'
import Utils from 'src/services/utilities/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import { useCollapse } from 'react-collapsed'
import { Link } from 'react-router-dom'
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

import moment from 'moment'

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

type ItemWithCreatedAt = {
  createdAt: string
}

function sortDatesByOldestFirst<T extends ItemWithCreatedAt>(list: T[]) {
  return list.sort((a, b) => {
    return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt))
  })
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
  const dispatch = useAppDispatch()
  const postRef = useRef<HTMLDivElement | null>(null)
  const profile = useAppSelector((state: RootState) => state.user.profile)
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const [postSeeMore, setPostSeeMore] = useState(false)
  const [editPostPopup, setEditPostPopup] = useState(false)

  const [comment, setComment] = useState('')
  const [reactions, setReactions] = useState<any[]>([])
  const [listComment, setListComment] = useState<any[]>([])
  const [clicked, setClicked] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const userHasEmotion = reactions.some((r) => r.username === profile.username)

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
      setListComment(sortDatesByOldestFirst(result.data.comments))
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
    socketService.socket?.on('typing', (data: { typing: boolean }) => {
      setIsTyping(data.typing)
    })
  }, [])

  useEffect(() => {
    if (comment === '') {
      socketService.socket?.emit('typing', { typing: false })
    }
  }, [comment])

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
    setClicked(true)

    if (userHasEmotion) {
      await postService.removeReactionOfPost(postId as string, 'like', {
        like: 0,
        love: 0,
        happy: 0,
        sad: 0,
        wow: 0,
        angry: 0
      })
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

    setTimeout(() => setClicked(false), 400)
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
        className={`rounded-xl md:rounded-md overflow-hidden h-[200px] md:h-[300px] lg:h-[350px] flex items-center justify-center ${bgColor}`}
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
        className='bg-light shadow-shadowMain w-full default-animations dark:bg-dark rounded-md px-3 py-4 mb-3 lg:mb-6 last:mb-0 relative overflow-hidden'
      >
        <div className='flex flex-col gap-2 lg:gap-4'>
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
            <div className='flex w-2/4 justify-center'>
              <button onClick={handleReactionPost} className='flex items-center gap-4 outline-none'>
                <i
                  className={clsx(
                    'fa-heart md:text-xl lg:text-2xl style-main',
                    clicked ? 'fa-solid fa-bounce' : 'fa-regular',
                    userHasEmotion ? 'fa-solid' : 'fa-regular'
                  )}
                ></i>
                <span className='flex items-center gap-1 text-xs md:text-sm font-medium'>
                  {reactions.length}
                  <span className='hidden md:block'>Like</span>
                </span>
              </button>
            </div>
            <div {...getToggleProps()} className='flex w-2/4 flex-row gap-4 md:mr-0 justify-center'>
              <i className='fa-regular fa-message md:text-xl lg:text-2xl style-main vertical-align'></i>
              <span className='flex items-center gap-1 text-xs md:text-sm'>
                {listComment.length}
                <span className='hidden md:block'>comment</span>
              </span>
            </div>
          </div>
        </div>

        <div {...getCollapseProps()} className='relative mt-3'>
          {listComment.length > 0 && (
            <div className='h-auto max-h-[400px] overflow-y-auto mb-16 flex flex-col -mx-3 px-3 border-t border-slate-400/25'>
              {listComment.map((comment, index) => {
                const usernamesMatch = profile.username === comment.username
                const viTime = moment.utc(comment.createdAt).clone().utcOffset(7).format('h:mm A')
                const isAdjacentCommenting = index && listComment[index].username === listComment[index - 1].username
                const showDateAtAdjacentEnd =
                  index === listComment.length - 1 || listComment[index].username !== listComment[index + 1].username

                return (
                  <div
                    key={comment._id}
                    className={clsx(
                      'flex flex-1 items-center gap-4',
                      usernamesMatch ? 'ml-auto flex-row-reverse' : '',
                      isAdjacentCommenting ? 'mt-1' : 'mt-4'
                    )}
                  >
                    <div className={clsx('flex gap-2 items-start', usernamesMatch ? 'flex-row-reverse' : '')}>
                      {!isAdjacentCommenting ? (
                        <img
                          src={comment.profilePicture}
                          alt={comment.username}
                          className='rounded-full object-cover max-w-full w-8 h-8 flex-shrink-0'
                        />
                      ) : (
                        <span className='mr-[32px]'></span>
                      )}
                      <div className='flex flex-col bg-slate-300/25 rounded-md py-2 px-3'>
                        {!isAdjacentCommenting && (
                          <span className={clsx('text-xs font-bold  max-w-[300px]', usernamesMatch ? 'ml-auto' : '')}>
                            {comment.username}
                          </span>
                        )}
                        <span className={clsx('text-sm font-medium', usernamesMatch ? 'ml-auto' : '')}>
                          {comment.comment}
                        </span>
                      </div>
                    </div>
                    {showDateAtAdjacentEnd && <time className='text-slate-400 text-[11px]'>{viTime}</time>}
                  </div>
                )
              })}
            </div>
          )}

          {listComment.length === 0 && (
            <div className='mb-12 mt-2 text-center py-2 border-t border-slate-400/25 font-semibold'>No comments</div>
          )}
          {isTyping && (
            <div className='shadow-shadowMain absolute -bottom-4 left-0 p-2 m-2 rounded-md w-max'>
              <div className='loader gap-1'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        {isExpanded && (
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ ease: 'easeInOut', duration: 1.2 }}
              className='absolute bottom-0 left-0 right-0 w-full h-auto rounded-ss-lg rounded-se-lg flex items-center gap-2 bg-light dark:bg-dark shadow-shadowMain p-3'
            >
              <img src={profile.profilePicture} alt='' className='object-cover rounded-full w-8 h-8' />

              <div className='flex items-center bg-gray-100 dark:bg-gray-400/25 rounded-md py-2 px-3 w-full'>
                <input
                  onChange={(e) => {
                    socketService.socket?.emit('typing', { typing: true })
                    setComment(e.target.value)
                  }}
                  type='text'
                  className='outline-none font-medium placeholder:text-dark placeholder:dark:text-light flex-1 text-sm bg-transparent'
                  placeholder='Write comment...'
                  value={comment}
                  id={'comment' + postId}
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.8 }}
                transition={{ type: 'spring', damping: 5 }}
                onClick={handleCommentPost}
                className='rounded-md outline-none flex items-center justify-center p-1.5 hover:bg-gray-100 dark:hover:bg-gray-400/25 text-sm transition-all ease-linear duration-150'
              >
                <SendSvg width='22' height='22' />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default Post
