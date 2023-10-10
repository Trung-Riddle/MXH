import { Link } from 'react-router-dom'
import { Article } from 'src/components'

const TrendingFeeds = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1617631458201-5c120f4e2483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1616427724713-061d064eebab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },

  {
    id: 3,
    image:
      'https://plus.unsplash.com/premium_photo-1673624400256-7f26339a334c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1502736842968-bcaab72d0700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBwaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }
]

const UserSuggestions = [
  {
    id: 1,
    avatar: 'https://24365withblinks.com/images/about/profile_jisoo.jpg',
    name: 'Kim Jisoo'
  },
  {
    id: 2,
    avatar: 'https://24365withblinks.com/images/about/profile_jennie.jpg',
    name: 'Jennie Kim'
  },
  {
    id: 3,
    avatar: 'https://24365withblinks.com/images/about/profile_rose.jpg',
    name: 'Roseanne Park'
  },
  {
    id: 4,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 4,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 4,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  },
  {
    id: 4,
    avatar: 'https://24365withblinks.com/images/about/profile_lisa.jpg',
    name: 'Lalisa Manoban'
  }
]
export default function SidebarRight() {
  return (
    <aside className='md:flex hidden flex-col max-w-1/5 sticky inherits-h-header overflow-auto gap-3 py-3 base-hidden-scroll'>
      <Article className='p-3 flex flex-col justify-evenly'>
        <h2 className='font-bold text-base text-dark dark:text-light mb-3 text-center'>Trending feed</h2>

        <div className='grid grid-cols-2 gap-2'>
          {TrendingFeeds.map(({ image, id }) => (
            <div key={id} className='w-full relative'>
              <div className='aspect-2/1'>
                <img alt='' src={image} className='absolute inset-0 rounded-md w-full h-full object-cover' />
              </div>
            </div>
          ))}
        </div>
      </Article>

      <Article className='flex flex-col justify-evenly p-3'>
        <h2 className='font-bold text-base text-dark dark:text-light mb-3 text-center'>Suggestions for you</h2>

        <div className='base-hidden-scroll overflow-y-scroll flex flex-col flex-grow'>
          <div className='flex flex-col max-h-80 gap-5'>
            {UserSuggestions.map(({ id, avatar, name }) => (
              <Link key={id} to={'' + id} className='flex flex-row items-center gap-2'>
                <div className='relative w-10 h-10'>
                  <div className='aspect-square'>
                    <img
                      loading='lazy'
                      src={avatar}
                      alt=''
                      className='absolute rounded-full w-full h-full object-cover inset-0'
                    />
                  </div>
                </div>
                <h4 className='text-sm'>{name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </Article>

      <Article className='p-3 flex justify-evenly items-center'>
        <h2 className='font-bold text-base text-dark dark:text-light mb-3 text-center'>Content creator</h2>

        <div className='mt-3 flex -space-x-2 overflow-hidden justify-center mb-1'>
          {UserSuggestions.slice(0, 4).map(({ id, avatar }) => (
            <div key={id} className='h-8 w-8 relative inline-block'>
              <div className='aspect-square'>
                <img
                  className='h-full w-full rounded-full object-cover absolute inset-0 ring-2 ring-white'
                  src={avatar}
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>
        <p className='text-center text-xs'>
          More than 142k people became content creators, become a content creator of Lime8
        </p>
      </Article>
    </aside>
  )
}
