import { Button, Search } from '..'
import { AddSvg, FangSvg, HeartSvg, NotifySvg, SendSvg } from '../icons'

export default function Header() {
  return (
    <header className='h-[70px] shadow-md w-full flex items-center px-6 bg-light-main dark:bg-dark-main'>
      <div className='flex items-center'>
        <div className='flex items-center gap-2'>
          <FangSvg width='39' height='39' styleText='text-3xl' />
        </div>

        <Search />

        <Button className='flex items-center flex-shrink-0 justify-center gap-2 px-3 py-1 ml-10'>
          <AddSvg width='24' height='24' />
          Create new post
        </Button>
      </div>

      <ul className='flex items-center gap-2 ml-auto'>
        <li>
          <Button className='p-2'>
            <HeartSvg width='20' height='20' />
          </Button>
        </li>
        <li>
          <Button className='p-2'>
            <NotifySvg width='20' height='20' />
          </Button>
        </li>
        <li>
          <Button className='p-2'>
            <SendSvg width='20' height='20' />
          </Button>
        </li>
      </ul>
    </header>
  )
}
