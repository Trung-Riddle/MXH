import { Avatar } from '..'

interface StoryProps {
  avatar: string
  justPostNow: boolean
  name: string
}

const Story = ({ avatar, justPostNow, name }: StoryProps) => {
  return <Avatar name={name} alt='' src={avatar} styleText='text-sm' />
}

export default Story
