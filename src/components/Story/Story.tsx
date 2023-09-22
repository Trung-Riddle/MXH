import { Avatar } from '..'

export interface StoryProps {
  avatar: string
  justPostNow?: boolean
  username?: string
}

const Story = ({ avatar, justPostNow, username }: StoryProps) => {
  return <Avatar name={username ?? ''} alt='' src={avatar} styleText='text-sm' />
}

export default Story
