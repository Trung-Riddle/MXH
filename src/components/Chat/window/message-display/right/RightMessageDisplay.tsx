/* eslint-disable jsx-a11y/no-static-element-interactions */
import Reactions from 'src/components/Chat/reactions/Reactions'
import { reactionsMap } from 'src/services/utilities/static.data'
import { timeAgo } from 'src/services/utilities/timeago'
import doubleCheckmark from 'src/assets/reactions/doublecheck.png'
import RightMessageBubble from './RightMessageBubble'

const RightMessageDisplay = ({
  chat,
  profile,
  handleReactionClick,
  delMessage,
  toggleReaction,
  setToggleReaction,
  reactionRef,
  index,
  activeElementIndex,
  setActiveElementIndex,
  showReactionIconOnHover,
  showReactionIcon,
  setSelectedReaction,
  lastChatMessage,
  showImageModel,
  setShowImageModel,
  setImageUrl
}: any) => {
  return (
    <div className='flex flex-col items-end gap-2 px-5 py-2 w-full rounded-3xl'>
      <div className='w-2/6 style-bg-main px-3 py-2 rounded-xl relative'>
        <div className='container'>
          {toggleReaction && index === activeElementIndex && !chat?.deleteForEveryone && (
            <div ref={reactionRef}>
              <Reactions
                handleClick={(event: any) => {
                  const body = {
                    conversationId: chat?.conversationId,
                    messageId: chat?._id,
                    reaction: event,
                    type: 'add'
                  }
                  handleReactionClick(body)
                  setToggleReaction(false)
                }}
              />
            </div>
          )}
        </div>
        <div className='message-right-container'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div
            className='message-content'
            onClick={() => {
              if (!chat?.deleteForEveryone) {
                delMessage(chat, 'deleteForEveryone')
              }
            }}
            onMouseEnter={() => {
              if (!chat?.deleteForEveryone) {
                showReactionIconOnHover(true, index)
                setActiveElementIndex(index)
              }
            }}
          >
            {chat?.deleteForEveryone && chat?.deleteForMe && (
              <div>
                <span>Tin nhắn đã xoá</span>
              </div>
            )}
            {!chat?.deleteForEveryone && chat?.deleteForMe && chat?.senderUsername === profile?.username && (
              <div>
                <span>Tin nhắn đã xoá</span>
              </div>
            )}
            {!chat?.deleteForEveryone && !chat?.deleteForMe && (
              <RightMessageBubble
                chat={chat}
                showImageModel={showImageModel}
                setShowImageModel={setShowImageModel}
                setImageUrl={setImageUrl}
              />
            )}
            {!chat?.deleteForEveryone && chat?.deleteForMe && chat.senderUsername === profile?.username && (
              <RightMessageBubble
                chat={chat}
                showImageModel={showImageModel}
                setShowImageModel={setShowImageModel}
                setImageUrl={setImageUrl}
              />
            )}
          </div>
          {showReactionIcon && index === activeElementIndex && !chat?.deleteForEveryone && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              onClick={() => {
                setToggleReaction(true)
              }}
              className='w-10 h-10 flex justify-center items-center text-3xl rounded-3xl absolute border bg-white-02 cursor-pointer left-[-50px] bottom-2'
            >
              &#9786;
            </div>
          )}
        </div>
        <div className='message-bottom'>
          {chat?.reaction && chat?.reaction.length > 0 && !chat.deleteForEveryone && (
            <div className='message-reaction'>
              {chat?.reaction.map((data: any, index: number) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <img
                  className='w-5 h-5 object-cover rounded-lg'
                  key={index}
                  src={reactionsMap[data?.type]}
                  alt=''
                  onClick={() => {
                    if (data?.senderName === profile?.username) {
                      const body = {
                        conversationId: chat?.conversationId,
                        messageId: chat?._id,
                        reaction: data?.type,
                        type: 'remove'
                      }
                      setSelectedReaction(body)
                    }
                  }}
                />
              ))}
            </div>
          )}
          <div className='message-time'>
            {chat?.senderUsername === profile?.username && !chat?.deleteForEveryone && (
              <>
                {lastChatMessage?.isRead ? (
                  <img className='w-[13px]' src={doubleCheckmark} alt='' />
                ) : (
                  <>{chat?.isRead && <img className='w-[13px]' src={doubleCheckmark} alt='' />}</>
                )}
              </>
            )}
            <span>{timeAgo.timeFormat(chat?.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightMessageDisplay
