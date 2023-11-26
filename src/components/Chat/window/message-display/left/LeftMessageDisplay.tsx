/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Avatar } from 'src/components'
import Reactions from 'src/components/Chat/reactions/Reactions'
import { reactionsMap } from 'src/services/utilities/static.data'
import { timeAgo } from 'src/services/utilities/timeago'

const LeftMessageDisplay = ({
  chat,
  profile,
  toggleReaction,
  showReactionIcon,
  index,
  activeElementIndex,
  reactionRef,
  setToggleReaction,
  handleReactionClick,
  deleteMessage,
  showReactionIconOnHover,
  setActiveElementIndex,
  setSelectedReaction,
  setShowImageModal,
  setImageUrl,
  showImageModal
}: any) => {
  return (
    <div className='flex flex-col gap-2 px-5 py-2 w-full rounded-3xl bg-red-400'>
      <div className='relative w-2/6 bg-[#f3f3f3] text-stone-600 px-3 py-2 rounded-xl '>
        <div className='message-reactions-container'>
          {toggleReaction && index === activeElementIndex && (
            <div ref={reactionRef}>
              <Reactions
                showLabel={false}
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
        <div className='left-message-bubble-container'>
          <div className='message-img'>
            <Avatar
              style={{ color: '#333' }}
              fullName={chat.senderUsername}
              avatar={chat.senderProfilePicture}
              size='sm'
            />
          </div>
          <div className='message-content-container'>
            <div className='message-content-container-wrapper'>
              {/*eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div
                className='message-content'
                onClick={() => {
                  if (!chat?.deleteForMe) {
                    deleteMessage(chat, 'deleteForMe')
                  }
                }}
                onMouseEnter={() => {
                  if (!chat?.deleteForMe) {
                    showReactionIconOnHover(true, index)
                    setActiveElementIndex(index)
                  }
                }}
              >
                {chat?.deleteForMe && chat?.receiverUsername === profile?.username && (
                  <div className='message-bubble left-message-bubble'>
                    <span className='message-deleted'>Tin nhắn đã xoá</span>
                  </div>
                )}

                {!chat?.deleteForMe && (
                  <>
                    {chat?.content !== 'Gửi 1 ảnh động' && chat?.content !== 'Gửi 1 ảnh' && (
                      <div className='message-bubble left-message-bubble'>{chat?.content}</div>
                    )}
                    {chat?.selectedImage && (
                      <div
                        className='message-image'
                        style={{
                          marginTop: `${chat?.content && chat?.content !== 'Gửi 1 ảnh' ? '5px' : ''}`
                        }}
                      >
                        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                          src={chat?.selectedImage}
                          onClick={() => {
                            setImageUrl(chat?.selectedImage)
                            setShowImageModal(!showImageModal)
                          }}
                          alt=''
                        />
                      </div>
                    )}
                    {chat?.gifUrl && (
                      <div className='message-gif'>
                        <img src={chat?.gifUrl} alt='' />
                      </div>
                    )}
                  </>
                )}
              </div>
              {showReactionIcon && index === activeElementIndex && !chat?.deleteForMe && (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
                <div
                  className='w-10 h-10 flex justify-center items-center text-3xl rounded-3xl absolute border bg-white-02 cursor-pointer right-[-50px] bottom-2 text-white'
                  onClick={() => setToggleReaction(true)}
                >
                  &#9786;
                </div>
              )}
            </div>
            {chat?.reaction && chat.reaction.length > 0 && !chat?.deleteForMe && (
              <div className='message-reaction'>
                {chat?.reaction.map((data: any, index: any) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <img
                    src={reactionsMap[data?.type]}
                    alt=''
                    key={index}
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
              <span data-testid='chat-time'>{timeAgo.timeFormat(chat?.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeftMessageDisplay
