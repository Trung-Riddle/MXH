import { PostDocuments } from 'src/interfaces/post.interface'
import { Avatar } from '..'
import { CommentSvg, LikeSvg, ShareSvg } from '../icons/posts'
import { RootState } from 'src/store'
import { useAppSelector } from 'src/hooks/useRedux'
import { PostList as PostListMocks } from 'src/services/utilities/static.data'
import { useEffect, useState } from 'react'

interface PostListProps {
  allList: PostDocuments[]
  postLoading: boolean
}

const PostList = ({ allList, postLoading }: PostListProps) => {
  const [loading, setLoading] = useState(true)
  const [postList, setPostList] = useState<PostDocuments[]>([])
  const profile = useAppSelector((state: RootState) => state.user.profile)

  useEffect(() => {
    setPostList(allList)
    setLoading(postLoading)
  }, [allList, postLoading])

  const handleCheckPrivacy = (profile: any, post: any) => {
    const isPrivate = post?.privacy === 'Private' && post?.userId === profile?._id
    const isPublic = post?.privacy === 'Public'
    return isPrivate || isPublic
  }

  if (loading) {
    return <h1>...Loading</h1>
  }

  if (PostList.length > 0 && !loading) {
    return PostListMocks.map(
      (post) =>
        handleCheckPrivacy(profile, post) && (
          <div key={post.id} className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-3'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <Avatar avatar={post.avatar} subs={post.quote} fullName={post.fullName} size='md' />

              <div className='rounded-xl md:rounded-md overflow-hidden'>
                <img src={post.imgPost} className='w-full h-[250px] md:h-[400px] object-cover' alt='' />
              </div>

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

            {/* <div className='flex items-center w-full'>
        <InputComment placeholder='Write your comment...' />
      </div> */}
          </div>
        )
    )
  }

  return <div> Deo co con cat gi het</div>
}

export default PostList
