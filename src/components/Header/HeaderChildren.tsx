import NotifySvg from 'src/assets/icons/components/Notify'
import { Button } from '..'
import SearchSvg from 'src/assets/icons/components/SearchSvg'
import ToggleTheme from '../Toggle/ToggleTheme'

const HeaderChildren = () => {
  return (
    <div className='w-full sm:flex items-center px-6 py-4 bg-transparent sticky z-50 top-0 right-0 hidden'>
      <div className='flex flex-1'>
        <label
          htmlFor='SearchInputBar'
          className='bg-inputLightSecondary rounded-full mx-auto w-2/5 flex items-center cursor-text select-none'
        >
          <span className='cursor-pointer pr-6 pl-2'>
            <SearchSvg width='24px' height='24px' />
          </span>
          <input
            type='text'
            className='text-xs font-light border-none outline-none bg-transparent py-2 px-2 placeholder:text-light'
            placeholder='Search explore...'
            id='SearchInputBar'
          />
        </label>
      </div>
      <div className='flex items-center gap-5'>
        <ToggleTheme />
        <Button className='p-2'>
          <NotifySvg width='20px' height='20px' />
        </Button>
        <div className='base-border-main w-10 flex flex-shrink'>
          <div className='aspect-square relative w-full'>
            <img
              loading='lazy'
              src={
                'https://images.unsplash.com/photo-1694793587915-38b73970e73d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              alt={'test'}
              className='w-full h-full object-cover absolute inset-0 rounded-full border-[1.5px] border-white'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderChildren
