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
      pathname: '/feeds',
      icon: Icons.Navigations.Home,
      iconActivated: Icons.Navigations.Home,
      label: ''
    },
    {
      pathname: '/message',
      icon: Icons.Navigations.Message,
      iconActivated: Icons.Navigations.Message,
      label: ''
    },
    {
      pathname: '/explore',
      icon: Icons.Navigations.Explore,
      iconActivated: Icons.Navigations.Explore,
      label: ''
    },
    {
      pathname: '/top-tv',
      icon: Icons.Navigations.TopTv,
      iconActivated: Icons.Navigations.TopTv,
      label: ''
    },
    {
      pathname: '/friends/',
      icon: Icons.Navigations.Community,
      iconActivated: Icons.Navigations.Community,
      label: ''
    }
  ],
  RoutesFriends: [
    {
      pathname: '/',
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
  ]
}

export default AppSettings
