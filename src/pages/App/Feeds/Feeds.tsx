import { Button } from 'src/components'
import { Link } from 'react-router-dom'
import WatchAllSvg from 'src/assets/icons/components/WatchAllSvg'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch } from 'src/hooks/useRedux'
import { getAllPostThunk } from 'src/store/api/posts'
import PostList from 'src/components/Posts/PostList'
import StoryList from 'src/components/Stories/StoryList'
import { useEffect, useState } from 'react'

const Feeds = () => {
  const dispatch = useAppDispatch()
  const [sortType, setSortType] = useState<string>(localStorage.getItem('sortType')! || 'none')

  useEffect(() => {
    localStorage.setItem('sortType', sortType)
  }, [sortType])

  useEffectOnce(() => {
    dispatch(getAllPostThunk())
  })

  return (
    <div className='w-full md:max-w-[60%] flex h-full flex-col flex-shrink p-3'>
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
            <StoryList />
          </div>
        </div>
      </div>

      <div className='mt-3 flex flex-col'>
        <div className='md:flex hidden items-center justify-between mb-3'>
          <h2 className='text-lg font-bold'>Feeds</h2>

          <div className='flex items-center gap-2'>
            <Button
              onClick={() => setSortType('time')}
              className='py-2 px-5 shadow-md'
              textColor='text-dark dark:text-light'
              bg='bg-light dark:bg-dark'
            >
              Latest
            </Button>
            <Button onClick={() => setSortType('popular')} className='py-2 px-5 shadow-md'>
              Popular
            </Button>
          </div>
        </div>

        <PostList sortType={sortType} />
      </div>
    </div>
  )
}

export default Feeds
