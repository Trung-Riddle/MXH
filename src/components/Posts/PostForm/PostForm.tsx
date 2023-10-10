import { Button } from 'src/components'
import User from 'src/components/User/User'

const PostForm = () => {
  return (
    <div className='bg-light dark:bg-dark w-3/5'>
      <div>
        <h2 className='text-base font-semibold text-dark dark:text-light'>Tạo bài viết</h2>
      </div>

      <User
        source='https://unsplash.com/photos/a-woman-sitting-on-top-of-a-white-chair-next-to-a-pool-9S82-KpAEnE'
        username=''
        alt=''
      >
        <Button>Mọi người</Button>
      </User>

      <input
        type='text'
        className='bg-transparent border-none outline-none placeholder:text-dark dark:placeholder:text-light'
        placeholder='Bạn đang nghĩ gì thế ?'
      />
    </div>
  )
}

export default PostForm
