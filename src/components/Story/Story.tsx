import { Avatar } from '..'
import { AvatarSizes } from '../Avatar/Avatar'

export interface StoryProps {
  avatar: string
  justPostNow?: boolean
  username?: string
  size?: AvatarSizes
}

const Story = ({ avatar, justPostNow, username, size }: StoryProps) => {
  return <Avatar name={username ?? ''} alt='' size={size} src={avatar} styleText='text-sm' />
}

export default Story
