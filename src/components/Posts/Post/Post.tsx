import { Avatar } from 'src/components'
import { CommentSvg, LikeSvg, ShareSvg } from 'src/components/icons/posts'
import Utils from 'src/services/utilities/utils'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import { useCollapse } from 'react-collapsed'
import { Link } from 'react-router-dom'
import SendSvg from 'src/assets/icons/components/messages/SendSvg'

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
}

const Post = ({
  imagePost,
  profilePicture,
  quote,
  username,
  bgColor,
  gifUrl,
  post,
  videoPost,
  imgId,
  imgVersion
}: PostProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const [postSeeMore, setPostSeeMore] = useState(false)
  const postRef = useRef<HTMLDivElement | null>(null)

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
    <div
      ref={postRef}
      className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-3 sm:mb-6 last:mb-0 relative overflow-hidden'
    >
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex items-center justify-between'>
          <Avatar avatar={profilePicture} subs={quote} fullName={username} size='md' />

          <button className='rounded-full py-3.5 px-1 hover:bg-slate-300/25'>
            <MoreSvg width='25' />
          </button>
        </div>
        {content}
        <div className='flex items-center md:justify-between select-none'>
          <div className='flex flex-row gap-2 mr-4'>
            <LikeSvg className='md:w-8 md:h-8 w-6 h-6' />
            <span className='flex items-center gap-2 text-xs md:text-sm'>
              280.4k
              <span className='hidden md:block'>like</span>
            </span>
          </div>
          <div {...getToggleProps()} className='flex flex-row gap-2 md:mr-0'>
            <CommentSvg className='md:w-8 md:h-8 w-6 h-6' />
            <span className='flex items-center gap-2 text-xs md:text-sm'>
              88 <span className='hidden md:block'>comment</span>
            </span>
          </div>
          <div className='flex flex-row gap-2 md:ml-0 ml-auto'>
            <ShareSvg className='md:w-8 md:h-8 w-6 h-6' />
            <span className='hidden md:block'>12 share</span>
          </div>
        </div>
      </div>

      <div {...getCollapseProps()} className='relative'>
        <div className='h-[400px] overflow-y-scroll mb-12'>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to='' className='flex flex-col mt-4'>
            <div className='flex gap-2 items-start'>
              <img
                src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
                alt=''
                className='rounded-full object-cover w-8 h-8'
              />

              <div className='flex flex-col'>
                <div className='flex flex-col bg-slate-300/25 rounded-2xl py-2 px-3'>
                  <span className='text-xs font-semibold'>Hồ Minh Thành</span>
                  <span className='text-sm leading-4 font-normal'>Hello</span>
                </div>
                <div className='flex items-center gap-4 ml-2 mt-1'>
                  <span className='text-xs font-semibold'>Like</span>
                  <span className='text-xs font-semibold'>Respone</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
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
            <img
              src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/355326753_982786799627215_3244822015486104293_n.jpg?stp=cp6_dst-jpg_p48x48&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sR5PjEfWfvUAX91cxmC&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDOh8DDOD5li46YiWza_0vWAtCy_7w3xS06JXBvHIe_cg&oe=654FFEE5'
              alt=''
              className='object-cover rounded-full w-8 h-8'
            />

            <div className='flex items-center bg-slate-400/10 rounded-2xl py-1.5 px-3 w-full'>
              <input type='text' className='outline-none flex-1 bg-transparent' placeholder='Write comment...' />
              <SendSvg width='20' height='20' />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default Post
