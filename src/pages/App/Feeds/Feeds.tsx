import { Avatar, Button, InputComment, Story } from 'src/components'
import SidebarRight from 'src/components/Sidebar/home/SidebarRight'
import { CommentSvg, LikeSvg, ShareSvg } from 'src/components/icons/posts'

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
    <>
      <div className='w-3/5 h-full flex flex-col flex-grow overflow-y-scroll base-hidden-scroll'>
        <div className=''>
          <h2 className='text-lg font-bold mb-3'>Stories</h2>

          <div className='base-hidden-scroll flex flex-col flex-shrink-0 overflow-x-scroll bg-white rounded-md dark:bg-dark-main p-3'>
            <div className='relative flex items-center p-[2px] justify-between'>
              {UserSuggestions.map(({ id, avatar, name }) => (
                <Story key={id} avatar={avatar} name={name} justPostNow={false} />
              ))}
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex items-center justify-between mb-3'>
            <h2 className='text-lg font-bold'>Feeds</h2>

            <div className='flex items-center gap-2'>
              <Button className='py-2 px-5 shadow-md' textColor='text-light' bg='bg-light-main dark:bg-dark-main'>
                Latest
              </Button>
              <Button className='py-2 px-5 shadow-md'>Popular</Button>
            </div>
          </div>

          <div className='bg-light-main w-full dark:bg-dark-main rounded-md px-3 py-4'>
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

      <SidebarRight />
    </>
  )
}

export default Feeds
