/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiphyUtils } from 'src/services/utilities/gif'

const GifBox = ({ handleGiphyClick }: any) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    GiphyUtils.getTrendingGifs(setGifs, setLoading)
  }, [])
  return (
    <div className='h-[360px] absolute bottom-14 rounded-md bg-white overflow-hidden'>
      <div className='flex items-center text-stone-600 min-h-[50px] my-2 mx-3 px-2 border border-stone-600 rounded-2xl'>
        <FaSearch size={28} />
        <input
          id='gif'
          name='gif'
          type='text'
          className='flex-1 outline-none px-5 h-full'
          placeholder='tìm kiếm ảnh động'
          onChange={(e: any) => GiphyUtils.searchGifs(e.target.value, setGifs, setLoading)}
        />
      </div>
      {loading && <div>Loading...</div>}
      <div className='overflow-y-auto h-full'>
        {gifs.map((gif: any, index) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div key={index} onClick={() => handleGiphyClick(gif.images.original.url)}>
            <img className='w-[470px] object-cover' src={`${gif.images.original.url!}`} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GifBox
