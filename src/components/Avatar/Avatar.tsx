import clsx from 'clsx'

type AvatarSizes = 'sm' | 'lg' | 'md'

const avatarSizes: Record<AvatarSizes, string> = {
  md: '',
  lg: 'w-16 h-16',
  sm: 'w-12 h-12'
}

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string
  subs?: string
  presence?: boolean
  justOfStory?: boolean
  styleText?: string
  size?: AvatarSizes
}

const Avatar = ({ name, styleText, className, subs, alt, size = 'sm', ...props }: AvatarProps) => {
  return (
    <div className={clsx('flex bg-transparent', className ? className : 'items-center justify-center flex-col')}>
      <div className={clsx('base-border-main', avatarSizes[size])}>
        <div className='aspect-square'>
          <img
            loading='lazy'
            alt={alt}
            className='w-full h-full object-cover absolute inset-0 rounded-full border-[1.5px] border-white'
            {...props}
          />
        </div>
      </div>

      <div className={clsx('flex flex-col gap-2', styleText ? styleText : 'text-base')}>
        <h3 className='font-semibold text-[16px]'>{name}</h3>
        <span className='text-stone-200 text-xs'>{subs}</span>
        </div>
    </div>
  )
}

export default Avatar
