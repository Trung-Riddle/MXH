import { RootState } from 'src/store'
import { useAppSelector } from 'src/hooks/useRedux'
import ListPostSkeleton from './skeletons/ListPostSkeleton'
import Post from './Post/Post'

interface PostListProps {
  allPosts: any[]
  isLoading: boolean
}

const PostList = ({ allPosts, isLoading }: PostListProps) => {
  const profile = useAppSelector((state: RootState) => state.user.profile)

  const handleCheckPrivacy = (profile: any, post: any) => {
    const isPrivate = post?.privacy === 'private' && post?.userId === profile?._id
    const isPublic = post?.privacy === 'public'
    return isPrivate || isPublic
  }

  if (isLoading) {
    return <ListPostSkeleton />
  }

  if (allPosts.length > 0) {
    return allPosts.map(
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
    )
  }

  return <div>Error Boundary</div>
}

export default PostList
