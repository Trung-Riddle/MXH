import { Article, Button, Story } from 'src/components'

const ProfilePost = () => {
  return (
    <div className='flex items-center max-w-7xl mx-auto'>
      <div className='w-8/12'>Post</div>
      <div className='w-1/3'>
        <Article className='flex flex-col gap-3 p-3'>
          <div className='flex items-center justify-between'>
            <h3 className='text-sm font-semibold'>Your latest stories</h3>
            <Button className='py-1 px-3'>watch all</Button>
          </div>

          <div className='overflow-x-scroll overflow-y-hidden base-hidden-scroll'>
            <div className='flex items-center flex-nowrap gap-3.5 p-1'>
              <Story username='Add story' avatar='' size='lg' />

              {Array(6)
                .fill(1)
                .map((_, index) => (
                  <Story
                    size='lg'
                    key={index}
                    avatar='https://plus.unsplash.com/premium_photo-1664204234222-3d77d5fb2b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    username='Babi'
                  />
                ))}
            </div>
          </div>
        </Article>
      </div>
    </div>
  )
}

export default ProfilePost
