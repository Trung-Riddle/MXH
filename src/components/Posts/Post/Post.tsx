import { Avatar } from 'src/components'
import { CommentSvg, LikeSvg, ShareSvg } from 'src/components/icons/posts'
import Utils from 'src/services/utilities/utils'
import { motion, useScroll } from 'framer-motion'
import { useMemo, useState } from 'react'
import MoreSvg from 'src/assets/icons/components/MoreSvg'

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
  const [postSeeMore, setPostSeeMore] = useState(false)
  let imageUrl: string = ''
  let content = <div>{post}</div>

  if (bgColor !== '') {
    content = (
      <div className={`rounded-xl md:rounded-md overflow-hidden h-[350px] flex items-center justify-center ${bgColor}`}>
        <p className='font-semibold text-xl text-light'>{post}</p>
      </div>
    )
  }

  if (imagePost !== '' && !bgColor && !videoPost && !bgColor) {
    imageUrl = Utils.appImageUrl(imgVersion!, imgId!)
    content = (
      <>
        <div className='group/text'>
          <p className={`text-sm ${postSeeMore ? '' : 'line-clamp-3'}`}>{post}</p>
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
          <img src={imageUrl} className='w-full h-[250px] md:h-auto object-contain' alt='' />
        </div>
      </>
    )
  }

  return (
    <div className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-6 last:mb-0'>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex items-center justify-between'>
          <Avatar avatar={profilePicture} subs={quote} fullName={username} size='md' />

          <button className='rounded-full py-3.5 px-1 hover:bg-slate-300/25'>
            <MoreSvg width='25' />
          </button>
        </div>
        {content}
        <div className='flex items-center md:justify-between'>
          <div className='flex flex-row gap-2 mr-4'>
            <LikeSvg className='md:w-8 md:h-8 w-6 h-6' />
            <span className='flex items-center gap-2 text-xs md:text-sm'>
              280.4k
              <span className='hidden md:block'>like</span>
            </span>
          </div>
          <div className='flex flex-row gap-2 md:mr-0'>
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
    </div>
  )
}

export default Post
