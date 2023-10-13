import { Button } from 'src/components'
import User from 'src/components/User/User'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store'
import { onCloseFormPost } from 'src/store/slices/modal/modal.slice'
import Icons from 'src/assets/icons'

const PostForm = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state: RootState) => state.modal.isOpenFormPost)
  const testOpen = () => {
    dispatch(onCloseFormPost())
  }
  return (
    isOpen && (
      <div className='fixed w-full h-full inset-0 z-50 bg-black/60 flex items-center justify-center'>
        <div className='bg-light dark:bg-dark w-1/3 px-6 pb-4 rounded-md relative'>
          <div className='text-center py-4'>
            <h2 className='text-base font-bold text-dark dark:text-light'>Tạo bài viết</h2>
          </div>

          <div className='border-linear-color w-3/4 mx-auto'></div>

          <div className='flex flex-col gap-4 my-4'>
            <User
              source='https://images.unsplash.com/photo-1695782098642-b71604fcb72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
              username='Hồ Minh Thành'
              alt='Avatar'
            >
              <Button className='flex items-center py-0.5 px-2 gap-2 text-xs font-normal w-max' rounded='rounded-xl'>
                <Icons.Privacy width='20' height='20' />
                Mọi người
              </Button>
            </User>

            <div className='h-28'>
              <input
                type='text'
                className='bg-transparent border-none w-full outline-none placeholder:text-dark dark:placeholder:text-light text-sm font-medium'
                placeholder='Bạn đang nghĩ gì thế ?'
              />
            </div>

            <div className='rounded-md style-bg-main text-light flex items-center justify-center p-2 w-8 h-8 shadow-shadowMain'>
              A
            </div>

            <div className='border-[#B2A3A3] border flex items-center rounded-lg py-4 px-6 justify-between select-none'>
              <p className='text-sm'>Thêm vào bài viết</p>
              <div className='flex items-center gap-4'>
                <span>
                  <Icons.Post.AddImage width='28' height='28' />
                </span>
                <span>
                  <Icons.Post.AddVideo width='28' height='28' />
                </span>
                <span>
                  <Icons.Post.AddIcons width='28' height='28' />
                </span>
                <span>
                  <Icons.Post.AddGif width='28' height='28' />
                </span>
              </div>
            </div>
          </div>

          <Button className='w-full py-2' rounded='rounded-lg'>
            Đăng
          </Button>

          <button className='absolute top-3 right-3' onClick={testOpen}>
            <svg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 50 50' fill='none'>
              <path
                d='M15 15L35 35M35 15L15 35'
                stroke='#1B1D2A'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <rect x='0.5' y='0.5' width='49' height='49' rx='24.5' stroke='url(#paint0_linear_893_108)' />
              <defs>
                <linearGradient
                  id='paint0_linear_893_108'
                  x1='0'
                  y1='25'
                  x2='50'
                  y2='25'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#2ECEC2' />
                  <stop offset='0.348958' stopColor='#34BAD0' />
                  <stop offset='1' stopColor='#3B89F1' />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    )
  )
}

export default PostForm
