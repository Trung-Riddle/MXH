import { linearGradient } from 'src/mocks/linear-gradient-backgrounds'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { useAppDispatch } from 'src/hooks/useRedux'
import { changeBgColor } from 'src/store/slices/post/post.slice'
import { toggleOpenBackground } from 'src/store/slices/modal/modal.slice'

interface ToggleBackgroundProps {
  onToggleBackground: React.Dispatch<React.SetStateAction<boolean>>
  isToggle: boolean
}

export default function ToggleBackground({ onToggleBackground, isToggle }: ToggleBackgroundProps) {
  const [isActive, setIsActive] = useState(-1)
  const dispatch = useAppDispatch()

  const handleToggleBackground = useCallback(() => {
    onToggleBackground((v) => !v)
    dispatch(toggleOpenBackground())
    dispatch(changeBgColor(''))
    setIsActive(-1)
  }, [onToggleBackground, dispatch])

  const handleChangeBackground = useCallback(
    (linearColor: string, index: number) => {
      if (isActive === index) {
        return
      } else {
        dispatch(changeBgColor(linearColor))
        setIsActive(index)
      }
    },
    [isActive, dispatch]
  )

  return (
    <div className={`flex items-center justify-between p-2 ${linearGradient[isActive] ? 'mt-0' : 'mt-auto'}`}>
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onClick={handleToggleBackground}
        className={`rounded-md w-8 h-8 shadow-shadowMain ${
          isToggle ? 'bg-[#E3E3E3] text-[#666666]' : 'style-bg-main text-light'
        }`}
      >
        A
      </motion.button>

      {isToggle &&
        linearGradient.map((linearColor, index) => (
          <motion.button
            key={index}
            initial={{ x: -30 }}
            animate={{ x: 0 }}
            exit={{ x: -30, opacity: 0 }}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => handleChangeBackground(linearColor.color, index)}
            className={`rounded-md w-8 h-8 shadow-shadowMain ${linearColor.color} ${
              index === isActive && 'border-2 border-white'
            }`}
          ></motion.button>
        ))}
    </div>
  )
}
