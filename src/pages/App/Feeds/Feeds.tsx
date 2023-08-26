import { Avatar, Button, InputComment, Story } from 'src/components'

const Feeds = () => {
  const UserSuggestions = [
    {
      id: 1,
      avatar: 'https://24365withblinks.com/images/about/profile_jisoo.jpg',
      name: 'Jisoo'
    },
    {
      id: 2,
      avatar: 'https://24365withblinks.com/images/about/profile_jennie.jpg',
      name: 'Jennie'
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
      id: 6,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    },
    {
      id: 7,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    },
    {
      id: 8,
      avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
      name: 'lisa'
    }
  ]

  return (
    <div className='w-3/5 h-full overflow-y-scroll'>
      <h2 className='text-lg font-bold mb-3'>Stories</h2>

      <div className='base-hidden-scroll relative overflow-x-scroll bg-white rounded-md dark:bg-dark-main p-3'>
        <div className='relative flex flex-grow flex-row items-center p-[2px] gap-5'>
          {UserSuggestions.map(({ id, avatar, name }) => (
            <Story key={id} avatar={avatar} name={name} justPostNow={false} />
          ))}
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold mb-3'>Feeds</h2>
          <Button>Popular</Button>
        </div>

        <div className='bg-light-main dark:bg-dark-main rounded-md px-3'>
          <div className='flex flex-col gap-4'>
            <Avatar
              name='Hồ Minh Thành'
              src='https://images.unsplash.com/photo-1692680887038-db37974e11ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
              alt=''
              className='flex flex-row'
              styleText='text-xs'
            />

            <div className='rounded-md overflow-hidden'>
              <img
                src='https://f58-zpg-r.zdn.vn/7177377810965329116/5fd013b0b03c62623b2d.jpg'
                className='w-full h-auto'
                alt=''
              />
            </div>

            <div className='flex items-center'>
              <span>280.4k like</span>
              <span>88 comment</span>
              <span>12 share</span>
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
