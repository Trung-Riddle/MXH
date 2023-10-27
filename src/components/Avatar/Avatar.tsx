export type AvatarSizes = 'sm' | 'lg' | 'md'

const avatarSizes: Record<AvatarSizes, string> = {
  md: 'md:w-14 md:h-14 w-10 h-10',
  lg: 'w-16 h-16',
  sm: 'w-12 h-12'
}

interface AvatarProps {
  subs?: string
  size?: AvatarSizes
  fullName: string
  avatar: string
}

const Avatar = ({ fullName, avatar, size = 'sm', subs }: AvatarProps) => {
  return (
    <div className='flex items-center gap-2 text-dark dark:text-light'>
      <div className={`${avatarSizes[size]}`}>
        <div className='rounded-full overflow-hidden relative pt-[100%]'>
          <img src={avatar} className='absolute w-full h-full object-cover inset-0' alt='' />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <h3 className='font-bold text-xs md:text-sm'>{fullName}</h3>
        <span className='text-[10px] md:text-xs font-medium'>{subs}</span>
      </div>
    </div>
  )
}

export default Avatar
