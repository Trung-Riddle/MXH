import Icons from 'src/assets/icons'

const AppSettings = {
  NavigationStyles: {
    Active: 'flex items-center justify-center py-4',
    UnActive: 'flex items-center justify-center py-4'
  },
  NavigationFriendsStyles: {
    Active: 'flex items-center text-dark style-main text-sm font-medium gap-4',
    UnActive: 'flex items-center text-dark text-sm font-medium gap-4'
  },
  Routes: [
    {
      pathname: '/home/feeds',
      icon: Icons.Navigations.Home,
      label: 'Feeds'
    },
    {
      pathname: '/message',
      icon: Icons.Navigations.Message,
      label: 'Messages'
    },
    {
      pathname: '/explore',
      icon: Icons.Navigations.Explore,
      label: 'Explore'
    },
    {
      pathname: '/top-tv',
      icon: Icons.Navigations.TopTv,
      label: 'Top Tv'
    },
    {
      pathname: '/friends',
      icon: Icons.Navigations.Community,
      label: 'Community'
    }
  ],
  RoutesFriends: [
    {
      pathname: '',
      icon: Icons.NavigationFriends.Friends,
      label: 'Trang chủ'
    },
    {
      pathname: '/requests',
      icon: Icons.NavigationFriends.AddFriend,
      label: 'Lời mời kết bạn'
    },
    {
      pathname: '/suggestions',
      icon: Icons.NavigationFriends.Keep,
      label: 'Gợi ý'
    },
    {
      pathname: '/list',
      icon: Icons.NavigationFriends.AllFriends,
      label: 'Tất cả bạn bè'
    },
    {
      pathname: '/birthdays',
      icon: Icons.NavigationFriends.Cake,
      label: 'Sinh nhật'
    }
  ],
  RoutesProfile: [
    {
      pathname: '',
      icon: Icons.NavigationFriends.Friends,
      label: 'Bài viết'
    },
    {
      pathname: '/profile/about',
      icon: Icons.NavigationFriends.Friends,
      label: 'Giới thiệu'
    },
    {
      pathname: '/profile/friends',
      icon: Icons.NavigationFriends.Friends,
      label: 'Bạn bè'
    },
    {
      pathname: '/profile/photos',
      icon: Icons.NavigationFriends.Friends,
      label: 'Hình ảnh'
    }
  ]
}

export default AppSettings
