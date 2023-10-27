import { Button } from 'src/components'
import CardFriend from 'src/components/Friends/CardFriend'
import { ListFollow } from 'src/services/utilities/static.data'

const Friends = () => {
  return (
    <div className='flex w-full h-full flex-col px-6'>
      <h2 className='text-base font-bold mb-4 block text-dark dark:text-light'>Tất cả người theo dõi</h2>

      <div className='flex items-center flex-wrap -mx-1'>
        {ListFollow.map((follow) => (
          <CardFriend key={follow.id} avatar={follow.avatar} friends={follow.friends} fullName={follow.fullName} />
        ))}
      </div>

      <Button
        bg='bg-light'
        textColor='text-dark dark:text-light'
        className='py-3 rounded-md shadow-shadowMain mt-4 dark:bg-dark'
      >
        Xem thêm
      </Button>

      <h2 className='text-base font-bold mb-4 block mt-6 text-dark dark:text-light'>Những người bạn có thể biết</h2>

      <div className='flex items-center flex-wrap -mx-1'>
        {ListFollow.map((follow) => (
          <CardFriend key={follow.id} avatar={follow.avatar} friends={follow.friends} fullName={follow.fullName} />
        ))}
      </div>

      <Button
        bg='bg-light'
        textColor='text-dark dark:text-light'
        className='py-3 rounded-md shadow-shadowMain mt-4 dark:bg-dark'
      >
        Xem thêm
      </Button>
    </div>
  )
}

export default Friends
