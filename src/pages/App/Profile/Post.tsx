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
    <div className='flex flex-col-reverse sm:flex-row items-start max-w-7xl mx-auto gap-3 sm:mt-10'>
      <div className='w-full sm:w-8/12'>
        <PostList allPosts={posts} isLoading={isLoading} />
      </div>
      <div className='w-full sm:w-1/3 sm:sticky flex flex-col gap-3 sm:top-0 sm:h-full'>
        <Article margin='mx-0' className='flex flex-col gap-1 sm:gap-3 p-3'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-semibold'>Your latest stories</h3>
            <Button className='sm:py-1 py-0.5 px-2 sm:px-3'>watch all</Button>
          </div>

          <div className='overflow-x-scroll overflow-y-hidden base-hidden-scroll'>
            <div className='flex items-center flex-nowrap gap-2.5 sm:gap-3.5 p-1'>
              <StoryList />
            </div>
          </div>
        </Article>

        <Article className='p-3' margin='mx-0'>
          <div className='flex items-center justify-between mb-1'>
            <h5 className='text-dark dark:text-light font-bold text-sm'>Bạn bè</h5>
            <Link to='/profile/friends' className=''>
              <Button className='py-1 px-3 text-xs' rounded='rounded-md'>
                Xem tất cả
              </Button>
            </Link>
          </div>

          <span className='text-xs font-normal mb-2'>365 người bạn</span>

          <div className='grid grid-cols-3 gap-2'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className='flex flex-col gap-2'>
                <div className='relative'>
                  <div className='pt-[100%] aspect-square'>
                    <img
                      src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/376766745_1341584220122968_7563910848580567245_n.jpg?stp=c0.5000x0.5000f_dst-webp_e15_p345x315_q70_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_cid=0&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fsgn16-1.fna&_nc_cat=105&_nc_ohc=2r8_rqqGzU0AX9vr_Cc&ccb=1-7&_nc_sid=5f2048&oh=00_AfDG7K8CsiiO5vldIgkI0MHCVEGZyo4yFvadKglzeK6tmQ&oe=6553517E'
                      alt=''
                      className='rounded-md absolute inset-0 w-full h-full max-w-full object-cover'
                    />
                  </div>
                </div>
                <h3 className='text-xs font-semibold text-dark dark:text-light truncate'> Ngô Thị thạch thảo</h3>
              </div>
            ))}
          </div>
        </Article>
      </div>
    </div>
  )
}

export default ProfilePost
