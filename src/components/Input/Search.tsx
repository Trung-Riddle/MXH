import { SearchSvg } from '../icons'
import { useEffect, useRef, useState } from 'react'
import LoadingSmall from '../Global/SearchLoading'
import { debounce } from 'lodash'
import userService from 'src/services/api/user/user.service'

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [focus, setFocus] = useState(false)
  const [listUser, setListUser] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchHistories, setSearchHistories] = useState<string[]>([])
  const listSearchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const searchHistories = localStorage.getItem('searchHistory')

    if (searchHistories) {
      setSearchHistories(JSON.parse(searchHistories))
    }
  }, [])

  const debouncedSearch = useRef(
    debounce(async (searchTerm) => {
      if (searchTerm === '') {
        setListUser([])
      } else {
        const response = await userService.searchUsers(searchTerm)
        setLoading(true)
        setListUser(response.data.search)
        setLoading(false)
      }
    }, 500)
  ).current

  const saveToLocalStorage = (term: string) => {
    const updatedHistories = [...searchHistories, term]
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistories))
    setSearchHistories(updatedHistories)
  }

  useEffect(() => {
    return () => debouncedSearch.cancel()
  }, [debouncedSearch])

  const timeoutRef = useRef<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearchTerm(newSearch)

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      if (newSearch === '') return
      saveToLocalStorage(newSearch)
    }, 1500)

    debouncedSearch(newSearch)
  }

  const handleDeleteSearchHistory = (index: number) => {
    const updatedHistory = [...searchHistories]
    updatedHistory.splice(index, 1)
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))
    setSearchHistories(updatedHistory)
  }

  return (
    <div className={`md:ml-14 ml-32 p-2 flex flex-col relative flex-shrink-0 top-0`}>
      <div className='flex md:w-[200px] lg:w-[400px] max-w-full flex-shrink-0 md:gap-2 gap-8 items-center select-none bg-inputLight dark:bg-inputDark rounded-full relative z-[9999]'>
        <span className='md:mx-1 lg:mx-3 cursor-pointer'>
          {loading ? <LoadingSmall /> : <SearchSvg width='24' height='24' />}
        </span>
        <input
          type='text'
          id='search'
          className='outline-none bg-transparent py-1.5 flex flex-1 text-sm'
          placeholder='search explore...'
          onChange={handleChange}
          value={searchTerm}
          onFocus={() => {
            setFocus(true)

            if (listSearchRef.current) {
              listSearchRef.current.style.display = 'block'
            }
          }}
          onBlur={() => {
            setTimeout(() => {
              setFocus(false)

              if (listSearchRef.current) {
                listSearchRef.current.style.display = 'none'
              }
            }, 100)
          }}
          autoComplete='off'
        />
      </div>
      <div
        ref={listSearchRef}
        className='absolute hidden left-0 top-0 w-full pt-12 py-2.5 bg-light rounded-md shadow-shadowMain px-2.5'
      >
        {listUser.length > 0 && !loading ? (
          <>
            <div className='py-1.5 pb-3 font-medium text-sm'>Kết quả tìm kiếm</div>
            {listUser.map((user) => (
              <div key={user.id} className='flex rounded-md items-center py-2 px-4 gap-5 hover:bg-[#f4f4f4]'>
                <div className='w-[45px] h-[45px]'>
                  <div className='rounded-full overflow-hidden relative pt-[100%]'>
                    <img src={user.profilePicture} className='absolute w-full h-full object-cover inset-0' alt='' />
                  </div>
                </div>

                <div className='flex flex-col'>
                  <div className='text-sm font-bold'>{user.username}</div>
                  <div className=''></div>
                </div>
              </div>
            ))}
          </>
        ) : searchHistories && searchHistories.length > 0 ? (
          <>
            <div className='py-1.5 pb-3 font-medium text-sm'>Tìm kiếm gần đây</div>
            {searchHistories.slice(0, 5).map((word, index) => (
              <div
                key={index}
                className='relative hover:bg-[#f4f4f4] cursor-pointer rounded-md flex items-center py-2 px-3'
              >
                <button
                  onClick={() => {
                    setSearchTerm(word)
                    debouncedSearch(word)
                  }}
                  className='flex items-center gap-5 w-full'
                >
                  <SearchSvg width='24' height='24' />
                  <div className='text-sm font-medium truncate'>{word}</div>
                </button>

                <button
                  className='ml-auto absolute top-2/4 -translate-y-2/4 right-2.5 z-50 hover:bg-slate-400/25 rounded-full'
                  onClick={() => handleDeleteSearchHistory(index)}
                >
                  <span className='py-3 px-1.5'>&#10006;</span>
                </button>
              </div>
            ))}
          </>
        ) : (
          <div className='text-center font-medium text-sm pb-3 py-1.5'>Không có tìm kiếm nào gần đây</div>
        )}
      </div>
    </div>
  )
}

export default Search
