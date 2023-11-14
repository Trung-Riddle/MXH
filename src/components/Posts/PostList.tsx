import { RootState } from 'src/store'
import { useAppSelector } from 'src/hooks/useRedux'
import ListPostSkeleton from './skeletons/ListPostSkeleton'
import Post from './Post/Post'
import postService from 'src/services/api/post/post.service'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import InfiniteScroll from './InfiniteScroll'
import { AnimatePresence, motion } from 'framer-motion'
import { cloneDeep } from 'lodash'
import socketService from 'src/services/socket/socket.service'

interface PostListProps {
  allPosts: any[]
  isLoading: boolean
}

const PostList = ({ allPosts, isLoading }: PostListProps) => {
  const profile = useAppSelector((state: RootState) => state.user.profile)
  const [postList, setPostList] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(0)

  const handleCheckPrivacy = (profile: any, post: any) => {
    const isPrivate = post?.privacy === 'private' && post?.userId === profile?._id
    const isPublic = post?.privacy === 'public'
    return isPrivate || isPublic
  }
  const socketIOPost = (statePosts: any, setStatePost: any) => {
    statePosts = cloneDeep(statePosts)
    socketService?.socket?.on('add post', (post: any) => {
      statePosts = [post, ...statePosts]
      setStatePost(statePosts)
    })
  }
  useEffect(() => setPostList(allPosts), [allPosts])
  useEffect(() => socketIOPost(allPosts, setPostList), [allPosts])
  const getAllPost = async () => {
    try {
      const res = await postService.getAllPost(currentPage)
      if (res.data.posts.length > 0) {
        setPostList([...postList, ...res.data.posts])
        setCurrentPage(currentPage + 1)
        setPageSize(postList.length + res.data.posts.length)
      } else {
        setHasMore(false)
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  if (isLoading) {
    return <ListPostSkeleton />
  }

  if (postList.length > 0) {
    return (
      <InfiniteScroll
        currentPage={currentPage}
        pageSize={pageSize}
        next={getAllPost}
        hasMore={hasMore}
        loader={<ListPostSkeleton />}
        endMessage={
          <AnimatePresence>
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className='bg-light dark:bg-dark rounded-full w-full py-1 shadow text-center font-medium'
            >
              No more posts
            </motion.div>
          </AnimatePresence>
        }
      >
        {postList.map(
          (post, index) =>
            handleCheckPrivacy(profile, post) && (
              <Post
                key={index}
                bgColor={post.bgColor}
                post={post.post}
                imagePost={post.imagePost}
                username={post.username}
                profilePicture={post.profilePicture}
                imgVersion={post.imgVersion}
                imgId={post.imgId}
              />
            )
        )}
      </InfiniteScroll>
    )
  }

  return <div>Error Boundary</div>
}

export default PostList
