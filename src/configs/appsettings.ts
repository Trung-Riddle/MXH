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
      pathname: '/friends',
      icon: Icons.Navigations.Community,
      label: 'Community'
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
      pathname: '/profile/resources',
      icon: Icons.NavigationFriends.Friends,
      label: 'Tài nguyên'
    }
  ],
  RoutesAbout: [
    {
      pathname: 'about',
      label: 'Tổng quan'
    },
    {
      pathname: 'about-work-and-education',
      label: 'Công việc và học vấn'
    },

    {
      pathname: 'about-family-and-relationships',
      label: 'Gia đình & mối quan hệ'
    },
    {
      pathname: 'about-contact-and-basic-info',
      label: 'Thông tin liên hệ và cơ bản '
    }
  ],
  RoutesProfileFriends: [
    {
      pathname: 'followers-all',
      label: 'Tổng quan'
    },
    {
      pathname: 'following',
      label: 'Đang theo dõi'
    }
  ]
}

export default AppSettings
