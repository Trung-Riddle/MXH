import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import ToggleBackground from '../ToggleBackground/ToggleBackground'
import InputFile from '../InputFile/InputFile'
import { useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store'

interface FormProps {
  onChangeContent: (content: string) => void
}

const Form = ({ onChangeContent }: FormProps) => {
  const contentEditableRef = useRef<HTMLDivElement | null>(null)
  const [toggleBackground, setToggleBackground] = useState(false)
  const [content, setContent] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('Nhập nội dung ở đây...')

  const inputFileIsOpen = useAppSelector((state: RootState) => state.modal.inputFileIsOpen)
  const bgColor = useAppSelector((state: RootState) => state.post.bgColor)

  const handleChangeContent = (e: ContentEditableEvent) => {
    const text = e.target.value
    if (text.length > 50) {
      contentEditableRef.current!.style.fontSize = '12px'
    } else {
      contentEditableRef.current!.style.fontSize = '16px'
    }
    setContent(text)
    onChangeContent(text)
  }
  const handleFocus = () => {
    setPlaceholder('')
  }
  const handleBlur = () => {
    if (!content.trim()) {
      setPlaceholder('Nhập nội dung ở đây...')
    }
  }

  return (
    <motion.div
      animate={bgColor && { scale: [1, 1.02, 1] }}
      transition={{ ease: 'easeOut', bounce: 0.25 }}
      className={`rounded-md flex flex-col ${bgColor} ${
        bgColor ? 'min-h-[350px]' : !bgColor && inputFileIsOpen ? 'h-[300px]' : 'h-52'
      }`}
    >
      <ContentEditable
        html={content || placeholder}
        onBlur={handleBlur}
        onFocus={handleFocus}
        innerRef={contentEditableRef}
        onChange={handleChangeContent}
        className={`p-2 outline-none text-dark dark:text-light overflow-y-scroll h ${
          bgColor && 'text-light text-center my-auto max-h-[302px] overflow-x-hidden'
        }`}
      />

      {inputFileIsOpen && <InputFile />}
      {!inputFileIsOpen && <ToggleBackground isToggle={toggleBackground} onToggleBackground={setToggleBackground} />}
    </motion.div>
  )
}

export default Form
