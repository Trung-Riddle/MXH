import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import CallSvg from 'src/assets/icons/components/messages/CallSvg'
import IconSvg from 'src/assets/icons/components/messages/IconSvg'
import LinkSvg from 'src/assets/icons/components/messages/LinkSvg'
import PhoneSvg from 'src/assets/icons/components/messages/PhoneSvg'
import User from 'src/components/User/User'
import { SearchSvg, SendSvg } from 'src/components/icons'

const message = [
  {
    id: 1,
    message: 'Bực mình rồi á nhen, đợi quài!',
    status: 'sender'
  },
  {
    id: 2,
    message: 'Khùng quá trới khùng!',
    status: 'receiver'
  },
  {
    id: 3,
    message: 'Nói nhiều, ra dẻ',
    status: 'receiver'
  },
  {
    id: 4,
    message: 'Lười mà làm như siêng',
    status: 'sender'
  },
  {
    id: 5,
    message: 'Ngu như khỉ ngu như bò!',
    status: 'sender'
  },
  {
    id: 6,
    message: 'Sao m chửi tao',
    status: 'receiver'
  },
  {
    id: 7,
    message: 'Lười làm thích gáy!',
    status: 'sender'
  },
  {
    id: 8,
    message: 'Oke',
    status: 'sender'
  },
  {
    id: 9,
    message: 'Oke',
    status: 'receiver'
  }
]

const usersMessagesBox = [
  {
    id: 1,
    messages: [
      {
        senderMessage: 'Hé lô Idol Quãng Nôm Lê Bảo',
        receivedMessage: 'Sao dậy anh nghe nè Fan Club'
      }
    ],
    receivedImageUrl: 'https://s120-ava-talk.zadn.vn/1/0/a/d/13/120/a6740d4fbdb661f360e03b10e6f115c2.jpg',
    receivedUsername: 'Lê Gia Báo'
    // senderUsername: 'Hồ Minh Thành',
  }
]

const SingleChatBox = () => {
  const { userMessageId } = useParams()

  const conversation = usersMessagesBox.find((item) => item.id.toString() === userMessageId)

  return (
    <div className='w-full flex flex-col h-full bg-white flex-1'>
      <header className='flex items-center justify-between px-6 my-5'>
        <User
          username={conversation?.receivedUsername || ''}
          source={conversation?.receivedImageUrl || ''}
          alt={conversation?.receivedUsername || ''}
          presence='active'
        >
          <span className='text-xs text-dark font-normal'>Online</span>
        </User>
        <div className='flex items-center gap-4'>
          <span>
            <SearchSvg width='24px' height='24px' />
          </span>
          <span>
            <CallSvg width='24px' height='28px' />
          </span>
          <span>
            <PhoneSvg width='22px' height='22px' />
          </span>
          <span>
            <MoreSvg width='24px' height='5px' />
          </span>
        </div>
      </header>
      {/* Chat Box */}
      <div className='flex flex-col h-full overflow-auto px-6'>
        <div className='flex flex-col gap-4'>
          {message.map((message, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-full px-4 py-2 w-max text-sm font-normal',
                message.status === 'sender' ? 'ml-auto style-bg-main text-light' : 'mr-auto bg-messageLight text-dark'
              )}
            >
              {message.message}
            </div>
          ))}
        </div>
      </div>
      {/* Input Chat */}
      <div className='flex items-center w-full gap-6 mt-auto px-6 py-6'>
        <div className='base-border-main flex flex-1'>
          <div className=' bg-inputLight w-full flex items-center rounded-full'>
            <span className='px-6'>
              <LinkSvg height='24px' width='24px' />
            </span>
            <input
              type='text'
              placeholder='Type a message here...'
              className='outline-none border-none bg-transparent py-2 flex-1'
            />
            <button className='px-6 relative' onClick={() => {}}>
              <IconSvg height='24px' width='24px' />
            </button>
          </div>
        </div>

        <span>
          <SendSvg height='24px' width='24px' />
        </span>
      </div>
    </div>
  )
}

export default SingleChatBox
