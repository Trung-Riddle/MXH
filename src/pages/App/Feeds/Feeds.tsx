import { Avatar, Button, InputComment, Story } from 'src/components'
import { CommentSvg, LikeSvg, ShareSvg } from 'src/components/icons/posts'
import { Link } from 'react-router-dom'
import WatchAllSvg from 'src/assets/icons/components/WatchAllSvg'

const Feeds = () => {
  const UserSuggestions = [
    {
      id: 1,
      avatar: 'https://24365withblinks.com/images/about/profile_jisoo.jpg',
      name: 'Jisoo'
    },
    {
      id: 3,
      avatar: 'https://24365withblinks.com/images/about/profile_rose.jpg',
      name: 'Rose'
    },
    {
      id: 4,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    },
    {
      id: 5,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    },
    {
      id: 10,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    },
    {
      id: 6,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    }
  ]

  return (
    <div className='flex-[6] flex h-full flex-col flex-shrink p-3'>
      <div className='md:flex hidden items-center justify-between select-none mb-3'>
        <h2 className='text-lg font-bold text-dark dark:text-light'>Stories</h2>
        <Link to='' className='flex items-center font-bold text-sm gap-2'>
          Watch all
          <WatchAllSvg width='15' height='15' />
        </Link>
      </div>

      <div className='base-hidden-scroll flex flex-col flex-shrink-0 overflow-x-scroll bg-transparent md:bg-light rounded-md md:dark:bg-dark md:p-3 md:shadow-shadowMain'>
        <div className='relative flex items-center p-[2px] justify-between'>
          <Story avatar={''} justPostNow={false} />
          {UserSuggestions.map(({ id, avatar, name }) => (
            <Story key={id} avatar={avatar} justPostNow={false} />
          ))}
        </div>
      </div>

      <div className='mt-3 flex flex-col'>
        <div className='md:flex hidden items-center justify-between mb-3'>
          <h2 className='text-lg font-bold'>Feeds</h2>

          <div className='flex items-center gap-2'>
            <Button className='py-2 px-5 shadow-md' textColor='text-dark dark:text-light' bg='bg-light dark:bg-dark'>
              Latest
            </Button>
            <Button className='py-2 px-5 shadow-md'>Popular</Button>
          </div>
        </div>

        <div className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-10'>
          <div className='flex flex-col gap-4 mb-6'>
            <Avatar
              name='Hồ Minh Thành'
              src='https://images.unsplash.com/photo-1692680887038-db37974e11ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
              alt='avt'
              className='gap-3 items-center'
              styleText='text-xs'
              subs='Hanoi, vietnam'
            />

            <div className='rounded-md overflow-hidden'>
              <img
                src='https://f58-zpg-r.zdn.vn/7177377810965329116/5fd013b0b03c62623b2d.jpg'
                className='w-full h-auto'
                alt=''
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex flex-row gap-2'>
                <LikeSvg width='25' height='25' />
                <span>280.4k like</span>
              </div>
              <div className='flex flex-row gap-2'>
                <CommentSvg width='25' height='25' />
                <span>88 comment</span>
              </div>
              <div className='flex flex-row gap-2'>
                <ShareSvg width='25' height='25' />
                <span>12 share</span>
              </div>
            </div>
          </div>

          <div className='flex items-center w-full'>
            <InputComment placeholder='Write your comment...' />
          </div>
        </div>

        <div className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4'>
          <div className='flex flex-col gap-4 mb-6'>
            <Avatar
              name='Hồ Minh Thành'
              src='https://images.unsplash.com/photo-1692680887038-db37974e11ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
              alt='avt'
              className='gap-3 items-center'
              styleText='text-xs'
              subs='Hanoi, vietnam'
            />

            <div className='rounded-md overflow-hidden'>
              <img
                src='https://f58-zpg-r.zdn.vn/7177377810965329116/5fd013b0b03c62623b2d.jpg'
                className='w-full h-auto'
                alt=''
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex flex-row gap-2'>
                <LikeSvg width='25' height='25' />
                <span>280.4k like</span>
              </div>
              <div className='flex flex-row gap-2'>
                <CommentSvg width='25' height='25' />
                <span>88 comment</span>
              </div>
              <div className='flex flex-row gap-2'>
                <ShareSvg width='25' height='25' />
                <span>12 share</span>
              </div>
            </div>
          </div>

          <div className='flex items-center w-full'>
            <InputComment placeholder='Write your comment...' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeds
