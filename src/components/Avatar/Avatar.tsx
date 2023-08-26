import clsx from 'clsx'

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string
  presence?: boolean
  justOfStory?: boolean
  styleText?: string
}

const Avatar = ({ name, styleText, className, alt, ...props }: AvatarProps) => {
  return (
    <div className={clsx('flex bg-transparent', className ? className : 'items-center justify-center flex-col')}>
      <div className='h-16 w-16 base-border-main'>
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
