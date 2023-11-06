import { RootState } from 'src/store'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import ListPostSkeleton from './skeletons/ListPostSkeleton'
import Post from './Post/Post'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getAllPostThunk } from 'src/store/api/posts'
import postService from 'src/services/api/post/post.service'
import { toast } from 'react-toastify'
import { updateMorePosts } from 'src/store/slices/post/posts.slice'
import { useEffect, useState } from 'react'

interface PostListProps {
  allPosts: any[]
  isLoading: boolean
}

const PostList = ({ allPosts, isLoading }: PostListProps) => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector((state: RootState) => state.user.profile)
  const [postList, setPostList] = useState<any[]>([])

  const handleCheckPrivacy = (profile: any, post: any) => {
    const isPrivate = post?.privacy === 'private' && post?.userId === profile?._id
    const isPublic = post?.privacy === 'public'
    return isPrivate || isPublic
  }

  useEffect(() => {
    setPostList(allPosts)
  }, [])

  const getAllPost = async () => {
    try {
      const res = await postService.getAllPost(2)
      await new Promise((resolve) => setTimeout(resolve, 3000))
      if (res.data.posts.length > 0) {
        setPostList(prev => [...prev, ...res.data])
        dispatch(updateMorePosts(res.data))
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
        inverse={true}
        next={getAllPost}
        hasMore={true}
        dataLength={postList?.length}
        height={500}
        loader={<div>Loading...</div>}
        endMessage='Het roi'
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
