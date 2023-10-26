import clsx from 'clsx'
import UserPresence, { AvatarSizes } from './UserPresence'

export interface UserProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string
  source: string
  sloggan?: string
  presence?: string
  alt: string
  size?: AvatarSizes
  styleText?: string
  styleContent?: string
  feeling?: string
}

const User = ({
  username,
  sloggan,
  source,
  presence,
  alt,
  size,
  styleText,
  styleContent,
  feeling,
  ...props
}: UserProps) => {
  return (
    <div {...props} className={clsx('flex items-center gap-3 ', props.className)}>
      <UserPresence alt={alt} presence={presence} source={source} size={size} />

      {/* User informations */}
      <div className={clsx('flex flex-col flex-1', styleContent)}>
        <h4 className={clsx(styleText ? styleText : 'text-sm text-dark dark:text-light font-semibold mb-1')}>
          {username}

          {feeling && (
            <span className='ml-1 text-[10px] text-dark dark:text-light font-semibold'>{`hiện đang ❤️ cảm thấy ${feeling}`}</span>
          )}
        </h4>
        {sloggan && (
          <span className='text-xs text-dark dark:text-light font-normal text-ellipsis line-clamp-1 max-w-[220px] w-full'>
            {sloggan}
          </span>
        )}
        {!sloggan && props.children}
      </div>
    </div>
  )
}

export default User
