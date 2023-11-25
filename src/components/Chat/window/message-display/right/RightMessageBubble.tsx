/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

const RightMessageBubble = ({ chat, showImageModel, setImageUrl, setShowImageModel }: any) => {
  return (
    <>
      {chat?.content !== 'Gửi 1 ảnh động' && chat?.content !== 'Gửi 1 ảnh' && (
        <div className='text-md p-1'>{chat?.content}</div>
      )}
      {chat?.selectedImage && (
        <div className=' max-w-[540px]'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, prettier/prettier */}
          <img
            className='object-cover w-full'
            src={chat?.selectedImage}
            alt=''
            onClick={() => {
              setImageUrl(chat?.selectedImage)
              setShowImageModel(!showImageModel)
            }}
          />
        </div>
      )}
      {chat?.gifUrl && (
        <div className='message-gif max-w-[430px]'>
          <img
            className='object-cover w-full'
            src={chat?.gifUrl}
            onClick={() => {
              setImageUrl(chat?.gifUrl)
              setShowImageModel(!showImageModel)
            }}
            alt=''
          />
        </div>
      )}
    </>
  )
}

export default RightMessageBubble
