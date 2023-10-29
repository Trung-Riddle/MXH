import { ListFriendMocks } from 'src/mocks/data/message'
import { SearchSvg } from '../icons'
import { useEffect, useRef, useState } from 'react'
import LoadingSmall from '../Global/SearchLoading'
import { debounce } from 'lodash'

const fetchUsers = async (searchTerm: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return ListFriendMocks.filter((result) => result.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
}

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [focus, setFocus] = useState(false)
  const [listUser, setListUser] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearch = useRef(
    debounce(async (searchTerm) => {
      if (searchTerm === '') {
        setListUser([])
      } else {
        setLoading(true)
        setListUser(await fetchUsers(searchTerm))
        setLoading(false)
      }
    }, 500)
  ).current

  useEffect(() => {
    return () => debouncedSearch.cancel()
  }, [debouncedSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div className='flex ml-32 w-[400px] items-center select-none bg-inputLight dark:bg-inputDark rounded-full relative'>
      <label htmlFor='search' className='block mr-10 ml-1'>
        <SearchSvg width='24' height='24' />
      </label>
      <input
        type='text'
        id='search'
        className='outline-none bg-transparent peer-focus py-1 flex flex-1 text-sm'
        placeholder='search explore...'
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoComplete='off'
        value={searchTerm}
      />
      <div className='absolute top-[100%] left-0 peer-focus:block bg-light dark:bg-dark shadow-shadowMain w-full rounded-lg'>
        {loading && (
          <div className='p-2 flex items-center justify-center gap-6'>
            <LoadingSmall />
          </div>
        )}
        {!loading &&
          focus &&
          listUser.map((friend) => (
            <div key={friend.id} className='flex items-center  py-1 px-4 gap-5 hover:bg-[#f4f4f4]'>
              <div className='w-[60px] h-[60px]'>
                <div className='rounded-full overflow-hidden relative pt-[100%]'>
                  <img src={friend.profilePicture} className='absolute w-full h-full object-cover inset-0' alt='' />
                </div>
              </div>

              <div className='text-sm font-semibold'>{friend.fullName}</div>
              <div className=''></div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Search
