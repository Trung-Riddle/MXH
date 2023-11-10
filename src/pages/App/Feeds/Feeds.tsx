import { Button } from 'src/components'
import { Link } from 'react-router-dom'
import WatchAllSvg from 'src/assets/icons/components/WatchAllSvg'
import useEffectOnce from 'src/hooks/useEffectOnce'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { getAllPostThunk } from 'src/store/api/posts'
import PostList from 'src/components/Posts/PostList'
import StoryList from 'src/components/Stories/StoryList'
import { useEffect, useMemo, useState } from 'react'
import { RootState } from 'src/store'
// import { toast } from 'react-toastify'
// import postService from 'src/services/api/post/post.service'
// import useInfiniteScroll from 'src/hooks/useInfiniteScroll'
// import { uniqBy, orderBy } from 'lodash'

// const PAGE_SIZE = 8

const Feeds = () => {
  // const [currentPage, setCurrentPage] = useState(1)

  // const [postList, setPostList] = useState<any[]>([])
  // const [totalPostCount, setTotalPostCount] = useState(0)

  const profile = useAppSelector((state: RootState) => state.user.profile)
  const dispatch = useAppDispatch()
  const { isLoading, posts } = useAppSelector((state: RootState) => state.allPost)
  const [sortType, setSortType] = useState<string>(localStorage.getItem('sortType')! || 'none')

  const sortedPosts = useMemo(() => {
    if (sortType === 'time') {
      return [...posts].sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
    }
    if (sortType === 'popular') {
      return [...posts].filter((postItem) => postItem.userId === profile._id)
    }
    return posts
  }, [posts, sortType, profile._id])

  useEffect(() => {
    localStorage.setItem('sortType', sortType)
  }, [sortType])

  useEffectOnce(() => {
    dispatch(getAllPostThunk())
  })
  // const addPostRef = useRef<any[]>([])
  // const bodyRef = useRef<any | null>(null)
  // const bottomLineRef = useRef<any | null>(null)

  // const getAllPost = async () => {
  //   try {
  //     const res = await postService.getAllPostImage(currentPage)

  //     if (res.data.posts.length > 0) {
  //       addPostRef.current = [...res.data.posts, ...postList]
  //       const allPostById = uniqBy(addPostRef.current, '_id')
  //       const orderByPost = orderBy(allPostById, ['createdAt'], ['desc'])
  //       setPostList(orderByPost)
  //     }
  //   } catch (error: any) {
  //     toast.error(error.response.data.message)
  //   }
  // }

  // const fetchPostData = async () => {
  //   let pageNumber = currentPage

  //   if (currentPage <= Math.round(totalPostCount / PAGE_SIZE)) {
  //     pageNumber += 1
  //     setCurrentPage(pageNumber)
  //     await getAllPost()
  //   }
  // }

  // const handleClickPostLatest = () => {
  //   postList.filter((item) => item.createdAt)
  // }

  // useInfiniteScroll(bodyRef, bottomLineRef, fetchPostData)

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

        <PostList allPosts={sortedPosts} isLoading={isLoading} />

        {/* <div ref={bottomLineRef}></div> */}
      </div>
    </div>
  )
}

export default Feeds
