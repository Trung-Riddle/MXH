import { FaCheck, FaCircle } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'

const ChatListBody = ({ data, profile }: any) => {
  return (
    <div className='flex gap-2 items-center'>
      <p className='text-sm opacity-90 w-28 whitespace-nowrap overflow-hidden overflow-ellipsis'>{data.content}</p>
      {!data.isRead ? (
        <>
          {data.receiverUsername === profile?.username ? (
            <FaCircle size={12} className='icon' />
          ) : (
            <FaCheck size={12} className='icon not-read' />
          )}
        </>
      ) : (
        <>{data.senderUsername === profile?.username && <AiOutlineCheck />}</>
      )}
    </div>
  )
}
export default ChatListBody
