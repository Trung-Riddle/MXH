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
    <div className='bg-light rounded-lg p-2 flex items-center shadow-md gap-3 w-[calc(25%_-_16px)]'>
      <div className='relative h-full w-1/4 rounded-full overflow-hidden flex-shrink-0'>
        <div className='aspect-square relative'>
          <img src={avatarUrl} alt='Test' className='max-w-full object-cover w-full h-full absolute inset-0' />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <h4 className='text-sm font-semibold text-dark mb-1'>{username}</h4>

        <div className='flex items-center gap-1'>
          <span className='text-dark text-xs font-normal'>{followers}</span>
          <p className='text-dark text-xs font-normal'>Followers</p>
        </div>

        <Button className='py-1 px-3 ml-auto text-xs mt-2'>Theo dõi</Button>
      </div>
    </div>
  )
}

export default CardFriend
