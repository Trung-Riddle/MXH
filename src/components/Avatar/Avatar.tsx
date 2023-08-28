import clsx from 'clsx'

type AvatarSizes = 'sm' | 'lg' | 'md'

const avatarSizes: Record<AvatarSizes, string> = {
  md: '',
  lg: 'w-16 h-16',
  sm: ''
}

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string
  presence?: boolean
  justOfStory?: boolean
  styleText?: string
  size?: AvatarSizes
}

const Avatar = ({ name, styleText, className, alt, size = 'lg', ...props }: AvatarProps) => {
  return (
    <div className={clsx('flex bg-transparent', className ? className : 'items-center justify-center flex-col')}>
      <div className={clsx('base-border-main', avatarSizes[size])}>
        <div className='aspect-square'>
          <img
            loading='lazy'
            alt={alt}
            className='w-full h-full object-cover absolute inset-0 rounded-full border-[2.5px] border-white'
            {...props}
          />
        </div>
      </div>

      <h4 className={clsx('mt-2 font-bold', styleText ? styleText : 'text-base')}>{name}</h4>
    </div>
  )
}

export default Avatar
