import { linearGradient } from 'src/mocks/linear-gradient-backgrounds'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

interface ToggleBackgroundProps {
  onToggleBackground: React.Dispatch<React.SetStateAction<boolean>>
  onChangeBackground: React.Dispatch<React.SetStateAction<string>>
  isToggle: boolean
}

export default function ToggleBackground({ onToggleBackground, isToggle, onChangeBackground }: ToggleBackgroundProps) {
  const [isActive, setIsActive] = useState(-1)

  const handleToggleBackground = useCallback(() => {
    onToggleBackground((v) => !v)
    onChangeBackground('')
    setIsActive(-1)
  }, [onChangeBackground, onToggleBackground])

  const handleChangeBackground = useCallback(
    (linearColor: string, index: number) => {
      if (isActive === index) {
        return
      } else {
        setIsActive(index)
        onChangeBackground(linearColor)
      }
    },
    [onChangeBackground, isActive]
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
            initial={{ x: -30 }}
            animate={{ x: 0 }}
            exit={{ x: -30, opacity: 0 }}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            key={index}
            onClick={() => handleChangeBackground(linearColor.color, index)}
            className={`rounded-md w-8 h-8 shadow-shadowMain ${linearColor.color} ${
              index === isActive && 'border-2 border-white'
            }`}
          ></motion.button>
        ))}
    </div>
  )
}
