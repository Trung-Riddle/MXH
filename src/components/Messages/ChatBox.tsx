import MoreSvg from 'src/assets/icons/components/MoreSvg'
import User, { UserProps } from '../User/User'

interface ChatBoxProps extends UserProps {
  message: string
}

const ChatBox = ({ message, presence, username, source, alt }: ChatBoxProps) => {
  return (
    <div className='bg-chatBoxLight dark:bg-chatBoxDark shadow-md w-full px-4 rounded-lg flex h-max py-4 items-center'>
      <User username={username} alt={alt} source={source} presence={presence}>
        <span className='text-xs text-ellipsis line-clamp-1'>{message}</span>
      </User>
      <span className='cursor-pointer p-1'>
        <MoreSvg fill='#99999999' opacity='0.6' width='20px' height='4px' />
      </span>
    </div>
  )
}

export default ChatBox
