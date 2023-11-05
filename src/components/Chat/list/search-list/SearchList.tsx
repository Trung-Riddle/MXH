/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { Avatar, User } from 'src/components'

interface SearchListProps {
  result: any[]
  isSearching: boolean
  searchTerm: string
  setSelectedUser: React.Dispatch<React.SetStateAction<any>>
  setSearch: (term: string) => void
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>
  setSearchResult: React.Dispatch<React.SetStateAction<any>>
  setComponentType: (type: string) => void
}
const SearchList = ({
  result,
  isSearching,
  searchTerm,
  setSelectedUser,
  setSearch,
  setIsSearching,
  setSearchResult,
  setComponentType
}: SearchListProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const addUsernameToUrlQuery = (user: any) => {
    setComponentType('searchList')
    setSelectedUser(user)
    const url = `${location.pathname}?${createSearchParams({ username: user.username.toLowerCase(), id: user._id })}`
    navigate(url)
    setSearch('')
    setIsSearching(false)
    setSearchResult([])
  }
  return (
    <div className='overflow-y-scroll h-[800px] w-full'>
      <div className='p-0 w-full'>
        {!isSearching && result.length > 0 && (
          <>
            {result.map((user) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div className='w-full' key={user._id} onClick={() => addUsernameToUrlQuery(user)}>
                <Avatar avatar={user.profilePicture} fullName={user.username} />
              </div>
            ))}
          </>
        )}
        {searchTerm && isSearching && result.length === 0 && (
          <div>
            <span>Searching...</span>
          </div>
        )}
        {searchTerm && !isSearching && result.length === 0 && (
          <div>
            <span>Hông tìm thấy gì hết á ba.</span>
            <p>Không tìm thấy cho từ khoá {searchTerm}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchList
