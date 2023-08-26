interface InputCommentProps {
  placeholder: string
}

const InputComment = ({ placeholder }: InputCommentProps) => {
  return (
    <div className='flex items-center bg-light-input rounded-full w-full overflow-hidden'>
      <input type='text' placeholder={placeholder} className='text-input p-2 outline-none w-full h-full' />
    </div>
  )
}

export default InputComment
