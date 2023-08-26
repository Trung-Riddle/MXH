import { SearchSvg } from '../icons'

const Search = () => {
  return (
    <div className='flex ml-40 w-[400px] items-center select-none bg-light-input dark:bg-dark-input rounded-full overflow-hidden'>
      <label htmlFor='search' className='block mr-10 ml-5'>
        <SearchSvg width='24' height='24' />
      </label>
      <input type='text' id='search' className='outline-none bg-transparent py-2' placeholder='search explore...' />
    </div>
  )
}

export default Search
