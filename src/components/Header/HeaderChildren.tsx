import NotifySvg from 'src/assets/icons/components/Notify'
import { Button } from '..'
import SearchSvg from 'src/assets/icons/components/SearchSvg'
import ToggleTheme from '../Toggle/ToggleTheme'
import { useAppSelector } from 'src/hooks/useRedux'
import { DefaultAvatar } from 'src/assets/bg'

const HeaderChildren = () => {
  const { profile } = useAppSelector((state) => state.user)

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
        <div>
          <Button className='p-2'>
            <NotifySvg width='20px' height='20px' />
          </Button>
        </div>
        <div className='base-border-main w-10 flex flex-shrink'>
          <div className='aspect-square relative w-full'>
            <img
              loading='lazy'
              src={profile.profilePicture || DefaultAvatar}
              alt={profile.username}
              className='w-full h-full object-cover absolute inset-0 rounded-full border-[1.5px] border-white'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderChildren
