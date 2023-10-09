import { Button } from '..'

interface CardFriendProps {
  avatarUrl: string
  followers: string
  followings: string
  posts: string
  username: string
}

const CardFriend = ({ avatarUrl, followers, followings, posts, username }: CardFriendProps) => {
  return (
    <div className='bg-light shadow-shadowMain dark:bg-dark rounded-md overflow-hidden flex flex-col w-[calc((1_/_7)_*_100%_-_8px)] mx-1 mb-2'>
      <div className='w-full h-[180px] flex-shrink relative'>
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1696513301944-90abb561b935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
      </div>

      <div className='flex flex-col p-3'>
        <h4 className='text-sm font-semibold mt-2 text-dark dark:text-light'>Trungwibuh</h4>
        <div className='flex items-center'>
          <div className='flex -space-x-2'>
            <img
              className='w-5 h-5 object-cover border-2 border-white rounded-full dark:border-gray-800'
              src='https://images.unsplash.com/photo-1696513301944-90abb561b935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='w-5 h-5 object-cover border-2 border-white rounded-full dark:border-gray-800'
              src='https://images.unsplash.com/photo-1696513301944-90abb561b935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <img
              className='w-5 h-5 object-cover border-2 border-white rounded-full dark:border-gray-800'
              src='https://images.unsplash.com/photo-1696513301944-90abb561b935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <span className='text-xs font-normal ml-1 text-dark dark:text-light'>32 follow</span>
        </div>
        <Button className='py-2 px-4 mt-2' rounded='rounded-lg'>
          Theo dõi
        </Button>
      </div>
    </div>
  )
}

export default CardFriend
