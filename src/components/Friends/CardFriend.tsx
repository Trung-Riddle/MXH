import { Article, Button } from '..'
interface CardFriendProps {
  avatar: string
  id?: number
  fullName: string
  friends: Array<{ id: number; avatar: string }>
}
const CardFriend = ({ avatar, id, fullName, friends }: CardFriendProps) => {
  return (
    <div className='flex gap-2 items-center w-full bg-light dark:bg-dark shadow-shadowMain rounded-md p-2 sm:p-3'>
      <div className='relative sm:rounded-md overflow-hidden rounded-full w-20 sm:h-20'>
        <div className='aspect-square pt-[100%]'>
          <img className='absolute flex-shrink-0 inset-0 w-full h-full object-cover' src={avatar} alt='' />
        </div>
      </div>

      <div className='flex flex-col flex-1 gap-3'>
        <div className='flex flex-col'>
          <h4 className='text-base sm:text-sm font-semibold text-dark dark:text-light'>{fullName}</h4>
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
            <span className='whitespace-nowrap text-sm sm:text-xs font-normal ml-1 text-dark dark:text-light'>
              32 follow
            </span>
          </div>
        </div>
        <Button className='text-xs ml-auto sm:ml-0 py-1.5 px-3 w-max' rounded='rounded-md sm:rounded-lg'>
          Theo dõi
        </Button>
      </div>
    </div>
  )
}

export default CardFriend
