import { SearchSvg } from '../icons'

const Search = () => {
  return (
    <div className='flex ml-32 w-[400px] items-center select-none bg-inputLight dark:bg-inputDark rounded-full overflow-hidden'>
      <label htmlFor='search' className='block mr-10 ml-1'>
        <SearchSvg width='24' height='24' />
      </label>
      <input
        type='text'
        id='search'
        className='outline-none bg-transparent py-1 flex flex-1 text-sm'
        placeholder='search explore...'
      />
    </div>
  )
}

export default Search
