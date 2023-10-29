import { Button } from '..'
interface CardFriendProps {
  avatar: string
  id?: number
  fullName: string
  friends: Array<{ id: number; avatar: string }>
}
const CardFriend = ({ avatar, id, fullName, friends }: CardFriendProps) => {
  return (
    <div className='bg-light shadow-shadowMain dark:bg-dark rounded-md overflow-hidden flex flex-col w-[calc((1_/_7)_*_100%_-_8px)] mx-1 mb-2'>
      <div className='w-full h-[180px] flex-shrink relative'>
        <img className='absolute inset-0 w-full h-full object-cover' src={avatar} alt='' />
      </div>

      <div className='flex flex-col p-3'>
        <h4 className='text-sm font-semibold mt-2 text-dark dark:text-light'>{fullName}</h4>
        <div className='flex items-center'>
          <div className='flex -space-x-2'>
            {friends.map((friend) => (
              <img
                key={friend.id}
                className='w-5 h-5 object-cover border-2 border-white rounded-full dark:border-gray-800'
                src={friend.avatar}
                alt=''
              />
            ))}
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
