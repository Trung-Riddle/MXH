import { Button } from 'src/components'
import CardFriend from 'src/components/Friends/CardFriend'

const Friends = () => {
  return (
    <div className='flex w-full h-full flex-col px-6'>
      <h2 className='text-base font-bold mb-4 block text-dark dark:text-light'>Tất cả người theo dõi</h2>

      <div className='flex items-center flex-wrap -mx-1'>
        {Array(12)
          .fill(1)
          .map((_, index) => (
            <CardFriend
              key={index}
              avatarUrl='https://s120-ava-talk.zadn.vn/c/2/1/9/8/120/af240160c9d3f895e9c3cffa58caa8bb.jpg'
              followers='12'
              followings='11k'
              posts='12'
              username='Hồ Minh Thành'
            />
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
        {Array(12)
          .fill(1)
          .map((_, index) => (
            <CardFriend
              key={index}
              avatarUrl='https://s120-ava-talk.zadn.vn/c/2/1/9/8/120/af240160c9d3f895e9c3cffa58caa8bb.jpg'
              followers='12'
              followings='11k'
              posts='12'
              username='Hồ Minh Thành'
            />
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
