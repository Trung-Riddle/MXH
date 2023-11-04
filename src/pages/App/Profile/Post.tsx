import { Link } from 'react-router-dom'
import { Article, Button, Story } from 'src/components'
import PostList from 'src/components/Posts/PostList'
import StoryList from 'src/components/Stories/StoryList'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getAllPostThunk } from 'src/store/api/posts'

const UserSuggestions = [
  {
    id: 1,
    avatar: 'https://24365withblinks.com/images/about/profile_jisoo.jpg',
    name: 'Kim Jisoo'
  },
  {
    id: 2,
    avatar: 'https://24365withblinks.com/images/about/profile_jennie.jpg',
    name: 'Jennie Kim'
  },
  {
    id: 3,
    avatar: 'https://24365withblinks.com/images/about/profile_rose.jpg',
    name: 'Roseanne Park'
  },
  {
    id: 4,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 5,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 6,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 7,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  }
]
const ProfilePost = () => {
  const dispatch = useAppDispatch()

  const { isLoading, posts } = useAppSelector((state) => state.allPost)

  useEffectOnce(() => {
    dispatch(getAllPostThunk())
  })

  return (
    <div className='flex items-start max-w-7xl mx-auto gap-3 mt-10'>
      <div className='w-8/12'>
        <PostList allPosts={posts} isLoading={isLoading} />
      </div>
      <div className='w-1/3 sticky flex flex-col gap-3 top-0 h-full'>
        <Article className='flex flex-col gap-3 p-3'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-semibold'>Your latest stories</h3>
            <Button className='py-1 px-3'>watch all</Button>
          </div>

          <div className='overflow-x-scroll overflow-y-hidden base-hidden-scroll'>
            <div className='flex items-center flex-nowrap gap-3.5 p-1'>
              <StoryList />
            </div>
          </div>
        </Article>

        <Article className='flex flex-col justify-evenly p-3'>
          <h2 className='font-bold text-base text-dark dark:text-light mb-3 text-center'>Suggestions for you</h2>

          <div className='base-hidden-scroll overflow-y-scroll flex flex-col flex-grow'>
            <div className='flex flex-col max-h-80 gap-5'>
              {UserSuggestions.map(({ id, avatar, name }) => (
                <Link key={id} to={'' + id} className='flex flex-row items-center gap-2'>
                  <div className='relative w-10 h-10'>
                    <div className='aspect-square'>
                      <img
                        loading='lazy'
                        src={avatar}
                        alt=''
                        className='absolute rounded-full w-full h-full object-cover inset-0'
                      />
                    </div>
                  </div>
                  <h4 className='text-sm'>{name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </Article>
      </div>
    </div>
  )
}

export default ProfilePost
