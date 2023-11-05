import { FaCheck, FaCircle } from 'react-icons/fa'
import { FaReadme } from 'react-icons/fa'

const ChatListBody = ({ data, profile }: any) => {
  return (
    <div className='conversation-message'>
      <span>{data.body}</span>
      {!data.isRead ? (
        <>
          {data.receiverUsername === profile?.username ? (
            <FaCircle className='icon' />
          ) : (
            <FaCheck className='icon not-read' />
          )}
        </>
      ) : (
        <>{data.senderUsername === profile?.username && <FaReadme />}</>
      )}
    </div>
  )
}
export default ChatListBody
