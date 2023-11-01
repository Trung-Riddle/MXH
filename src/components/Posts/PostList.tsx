import { Avatar } from '..'
import { CommentSvg, LikeSvg, ShareSvg } from '../icons/posts'
import { RootState } from 'src/store'
import { useAppSelector } from 'src/hooks/useRedux'
import ListPostSkeleton from './skeletons/ListPostSkeleton'

interface PostListProps {
  allPosts: any[]
  isLoading: boolean
}

const PostList = ({ allPosts, isLoading }: PostListProps) => {
  const profile = useAppSelector((state: RootState) => state.user.profile)

  const handleCheckPrivacy = (profile: any, post: any) => {
    const isPrivate = post?.privacy === 'Private' && post?.userId === profile?._id
    const isPublic = post?.privacy === 'Public'
    return isPrivate || isPublic
  }

  if (isLoading) {
    return <ListPostSkeleton />
  }

  if (allPosts.length > 0) {
    return allPosts.map(
      (post) =>
        handleCheckPrivacy(profile, post) && (
          <div key={post.id} className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-3'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <Avatar avatar={post.profilePicture} subs={post.quote} fullName={post.username} size='md' />

              <div className='rounded-xl md:rounded-md overflow-hidden'>
                <img src={post.imagePost} className='w-full h-[250px] md:h-[400px] object-cover' alt='' />
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

  return <div>Error Boundary</div>
}

export default PostList
