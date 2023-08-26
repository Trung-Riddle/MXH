import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Avatar, Header, Metric } from 'src/components'
import { Navbars } from 'src/mocks/data'
import { IsActive, NotActive } from 'src/styles'
import Article from 'src/components/Article/Article'

export default function Social() {
  const location = useLocation()

  const currentUser = {
    name: 'Minh Thành',
    avatar: 'https://s120-ava-talk.zadn.vn/1/0/a/d/13/120/a6740d4fbdb661f360e03b10e6f115c2.jpg',
    alt: '',
    presence: true
  }

  const Metrics = [
    {
      id: 1,
      label: 'posts',
      count: 623
    },
    {
      id: 2,
      label: 'Follower',
      count: 775.2
    },
    {
      id: 3,
      label: 'Following',
      count: 88
    }
  ]

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
    }
  ]

  return (
    <div className='w-full h-full'>
      <Header />
      <div className='flex items-start gap-6 mx-auto w-4/5 flex-row mt-3 flex-grow h-full flex-shrink min-w-0 relative'>
        <aside className='min-h-0 w-1/5 sticky flex flex-col flex-grow'>
          <Article className='p-3 flex flex-col gap-2'>
            <Avatar name={currentUser.name} alt='' src={currentUser.avatar} />

            <div className='flex items-center justify-between'>
              {Metrics.map(({ count, id, label }) => (
                <Metric key={id} count={count} label={label} />
              ))}
            </div>
          </Article>

          <Article className='flex flex-col gap-5 p-3'>
            {Navbars.map(({ icon: Icon, id, path, value }) => (
              <NavLink key={id} to={path} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
                <Icon height='25' width='25' active={location.pathname === path} />
                {value}
              </NavLink>
            ))}
          </Article>

          <Article className='flex flex-col gap-5 p-3'>
            <NavLink to={'/home/settings'} className={({ isActive }) => (isActive ? IsActive : NotActive)}>
              Settings
            </NavLink>
            <button className={NotActive}>Logout</button>
          </Article>

          <Article className='p-3'>
            <h2 className='font-bold text-base text-light dark:text-dark mb-2'>Contact us</h2>
            <address className='text-[#1B1D2ACC] text-xs mb-1'>lime8@gmail.com</address>
            <p className='text-[#1B1D2ACC] whitespace-pre-wrap break-words text-xs'>
              Copyright © COGNOSPHERE. All Rights Reserved.
            </p>
          </Article>
        </aside>

        <Outlet />

        <aside className='min-h-0 w-1/5 sticky flex flex-col flex-grow'>
          <Article className='p-3'>
            <h2 className='font-bold text-base text-light dark:text-dark mb-3 text-center'>Trending feed</h2>

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

          <Article className='flex flex-col p-3'>
            <h2 className='font-bold text-base text-light dark:text-dark mb-3 text-center'>Suggestions for you</h2>

            <div className='flex flex-col gap-5'>
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
          </Article>

          <Article className='p-3'>
            <h2 className='font-bold text-base text-light dark:text-dark mb-3 text-center'>Content creator</h2>

            <div className='mt-3 flex -space-x-2 overflow-hidden justify-center mb-1'>
              {UserSuggestions.map(({ id, avatar }) => (
                <div key={id} className='h-10 w-10 relative inline-block'>
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
      </div>
    </div>
  )
}
