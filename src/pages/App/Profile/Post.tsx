import { Article, Button } from 'src/components'

const ProfilePost = () => {
  return (
    <div className='flex items-center max-w-7xl mx-auto'>
      <div className='w-8/12'>Post</div>
      <div className='w-1/3'>
        <Article className='flex flex-col gap-6'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-semibold'>Your latest stories</h3>
            <Button>watch all</Button>
          </div>

          <div className=''></div>
        </Article>

        <Article></Article>
      </div>
    </div>
  )
}

export default ProfilePost
