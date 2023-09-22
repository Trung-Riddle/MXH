import EditSvg from 'src/assets/icons/components/EditSvg'
import { Button } from 'src/components'
import User from 'src/components/User/User'
import { AddSvg } from 'src/components/icons'

const Profile = () => {
  return (
    <div className='w-full h-full'>
      <div className='-mt-[72px] h-2/5 relative z-10'>
        <img
          src='https://images.unsplash.com/photo-1694544484120-ec99280802a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
          alt=''
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      <div className='-mt-20 z-20 relative max-w-7xl mx-auto flex items-center'>
        <User
          size='xl'
          alt=''
          source='https://images.unsplash.com/photo-1695200194179-532a62a35b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
          username='Hồ Minh Thành'
          styleText='text-white font-semibold text-xl'
          styleContent='gap-10 ml-4'
        >
          <div className='flex items-center text-dark'>
            <nav className='flex items-center gap-6'>
              <span>Bài viết</span>
              <span>Giới thiệu</span>
              <span>Bạn bè</span>
              <span>Hình ảnh</span>
              <span>Xem thêm</span>
            </nav>
          </div>
        </User>

        <div className='flex items-end flex-1 flex-col gap-10'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-3'>
                <span className='text-sm font-semibold text-light'>73</span>
                <p className='text-sm font-semibold text-light'>Posts</p>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-sm font-semibold text-light'>11.7k</span>
                <p className='text-sm font-semibold text-light'>Flollowing</p>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-sm font-semibold text-light'>120</span>
                <p className='text-sm font-semibold text-light'>Followers</p>
              </div>
            </div>
            <Button className='flex items-center gap-1 py-2 px-3'>
              <EditSvg width='24px' height='24px' />
              Edit
            </Button>
          </div>
          <Button className='flex items-center flex-shrink-0 justify-center gap-2 px-3 py-2 ml-10'>
            <AddSvg width='24' height='24' />
            Create new post
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
