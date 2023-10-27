import { Avatar, Button, Story } from 'src/components'
import { CommentSvg, LikeSvg, ShareSvg } from 'src/components/icons/posts'
import { Link } from 'react-router-dom'
import WatchAllSvg from 'src/assets/icons/components/WatchAllSvg'
import { AddSvg } from 'src/components/icons'
import { PostList, StoryList } from 'src/services/utilities/static.data'

const Feeds = () => {
  return (
    <div className='max-w-[60%] flex h-full flex-col flex-shrink p-3'>
      <div className='md:flex hidden items-center justify-between select-none mb-3'>
        <h2 className='text-lg font-bold text-dark dark:text-light'>Stories</h2>
        <Link to='' className='flex items-center font-bold text-sm gap-2'>
          Watch all
          <WatchAllSvg width='15' height='15' />
        </Link>
      </div>

      <div className='w-full'>
        <div className='base-hidden-scroll flex flex-col flex-shrink-0 overflow-x-scroll bg-light rounded-md dark:bg-dark md:p-3 md:shadow-shadowMain'>
          <div className='relative flex items-center p-[2px] justify-between gap-2 md:gap-5'>
            <Story
              size='lg'
              justPostNow={true}
              username='Add Story'
              className='w-full h-full flex items-center justify-center'
            >
              <AddSvg width='20' height='20' className='-m-[2px]' />
            </Story>
            {StoryList.map((story) => (
              <Story
                key={story.id}
                size='lg'
                avatar={story.avatar}
                justPostNow={story.justPostedNow}
                username={story.username}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-3 flex flex-col'>
        <div className='md:flex hidden items-center justify-between mb-3'>
          <h2 className='text-lg font-bold'>Feeds</h2>

          <div className='flex items-center gap-2'>
            <Button className='py-2 px-5 shadow-md' textColor='text-dark dark:text-light' bg='bg-light dark:bg-dark'>
              Latest
            </Button>
            <Button className='py-2 px-5 shadow-md'>Popular</Button>
          </div>
        </div>

        {PostList.map((post) => (
          <div key={post.id} className='bg-light shadow-shadowMain w-full dark:bg-dark rounded-md px-3 py-4 mb-3'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <Avatar avatar={post.avatar} subs={post.quote} fullName={post.fullName} size='md' />

              <div className='rounded-xl md:rounded-md overflow-hidden'>
                <img src={post.imgPost} className='w-full h-[250px] md:h-[400px] object-cover' alt='' />
              </div>

              <div className='flex items-center md:justify-between'>
                <div className='flex flex-row gap-2 mr-4'>
                  <LikeSvg className='md:w-8 md:h-8 w-6 h-6' />
                  <span className='flex items-center gap-2 text-xs md:text-sm'>
                    280.4k
                    <span className='hidden md:block'>like</span>
                  </span>
                </div>
                <div className='flex flex-row gap-2 md:mr-0'>
                  <CommentSvg className='md:w-8 md:h-8 w-6 h-6' />
                  <span className='flex items-center gap-2 text-xs md:text-sm'>
                    88 <span className='hidden md:block'>comment</span>
                  </span>
                </div>
                <div className='flex flex-row gap-2 md:ml-0 ml-auto'>
                  <ShareSvg className='md:w-8 md:h-8 w-6 h-6' />
                  <span className='hidden md:block'>12 share</span>
                </div>
              </div>
            </div>

            {/* <div className='flex items-center w-full'>
              <InputComment placeholder='Write your comment...' />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feeds
