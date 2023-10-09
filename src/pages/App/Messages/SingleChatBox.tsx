import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import CallSvg from 'src/assets/icons/components/messages/CallSvg'
import IconSvg from 'src/assets/icons/components/messages/IconSvg'
import LinkSvg from 'src/assets/icons/components/messages/LinkSvg'
import PhoneSvg from 'src/assets/icons/components/messages/PhoneSvg'
import User from 'src/components/User/User'
import { SearchSvg, SendSvg } from 'src/components/icons'
import { Messages } from 'src/mocks/data/message'

const SingleChatBox = () => {
  const { userMessageId } = useParams()

  const conversation = Messages.find((item) => item.id === userMessageId)

  return (
    <div className='w-full flex flex-col h-screen bg-light dark:bg-[#0C0F1D] flex-1'>
      <header className='flex items-center justify-between px-6 my-5'>
        <User
          username={conversation?.receiverUsername || ''}
          source={conversation?.receiverAvatarColor || ''}
          alt={conversation?.receiverUsername || ''}
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
          {conversation?.contents.map((message, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-full px-4 py-2 w-max text-sm font-normal',
                conversation.senderId
                  ? 'ml-auto style-bg-main text-light'
                  : 'mr-auto dark:bg-messageDark bg-messageLight text-dark dark:text-light'
              )}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      {/* Input Chat */}
      <div className='flex items-center w-full gap-6 mt-auto px-6 py-6'>
        <div className='base-border-main flex flex-1'>
          <div className='bg-inputLight dark:bg-inputDark w-full flex items-center rounded-full'>
            <span className='px-6'>
              <LinkSvg height='24px' width='24px' />
            </span>
            <input
              type='text'
              placeholder='Type a message here...'
              className='outline-none border-none bg-transparent py-1.5 flex-1'
            />
            <button className='px-6 relative' onClick={() => {}}>
              <IconSvg height='24px' width='24px' />
            </button>
          </div>
        </div>

        <span>
          <SendSvg height='32' width='32' />
        </span>
      </div>
    </div>
  )
}

export default SingleChatBox
