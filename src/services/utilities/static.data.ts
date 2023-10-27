import Icons from 'src/assets/icons'

export const AvatarColor = [
  '#f44336',
  '#e91e63',
  '#2196f3',
  '#9c27b0',
  '#3f51b5',
  '#00bcd4',
  '#4caf50',
  '#ff9800',
  '#8bc34a',
  '#009688',
  '#03a9f4',
  '#cddc39',
  '#2962ff',
  '#448aff',
  '#84ffff',
  '#00e676',
  '#43a047',
  '#d32f2f',
  '#ff1744',
  '#ad1457',
  '#6a1b9a',
  '#1a237e',
  '#1de9b6',
  '#d84315'
]

export const PrivacyList = [
  {
    icon: Icons.Privacy.Public,
    label: 'Công khai',
    description: 'Bất kì ai ở trên hoặc ngoài Lime8',
    value: 'public'
  },
  {
    icon: Icons.Privacy.Friends,
    label: 'Bạn bè',
    description: 'Bạn bè của bạn trên Lime8',
    value: 'friends'
  },
  {
    icon: Icons.Privacy.FriendsExcept,
    label: 'Bạn bè ngoại trừ',
    description: 'Không hiển thị với một số bạn bè',
    value: 'except'
  },
  {
    icon: Icons.Privacy.SpecificFriends,
    label: 'Bạn bè cụ thể',
    description: 'Chỉ hiển thị với một số bạn bè',
    value: 'specific'
  },
  {
    icon: Icons.Privacy.OnlyMe,
    label: 'Chỉ mình tôi',
    value: 'onlyMe'
  }
]

export const FeelingList = [
  {
    name: 'Hạnh phúc',
    icon: '🤣'
  },
  {
    name: 'Buồn tình',
    icon: '😍'
  },
  {
    name: 'Tức giận',
    icon: '🤬'
  },
  {
    name: 'bất ngờ',
    icon: '😊'
  },
  {
    name: 'Đang mắc địch',
    icon: '👌'
  },
  {
    name: 'yêu thương',
    icon: '❤️'
  }
]

export const PostList = [
  {
    id: 1,
    fullName: 'Ngô Lê Lợi',
    avatar: '',
    quote: 'Hải phòng không lòng vòng',
    imgPost:
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/362998647_1199336594072065_3860460511219135481_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s552x414&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lz7LMuawixEAX-Dne4g&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAjpBfnXf4hMxqylzNsLhx7blElnEOCNXKgvUCmd_rVSw&oe=653FAA16'
  },
  {
    id: 2,
    fullName: 'Lê Thị Mỹ Tho',
    quote: 'Bé iu của bảo',
    imgPost: 'https://i.pinimg.com/474x/9e/93/ed/9e93eda9ebdca2b9e612c52187207287.jpg',
    avatar: 'https://i.pinimg.com/474x/52/1f/7e/521f7e14bf2032715aefc35245f95d2b.jpg'
  }
]

export const StoryList = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'Jisoo',
    justPostedNow: false
  },
  {
    id: 3,
    avatar:
      'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'Rose',
    justPostedNow: false
  },
  {
    id: 4,
    avatar:
      'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'leola',
    justPostedNow: false
  },
  {
    id: 5,
    avatar:
      'https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'lisa',
    justPostedNow: false
  },
  {
    id: 10,
    avatar:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'mono',
    justPostedNow: false
  },
  {
    id: 6,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  },
  {
    id: 7,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  },
  {
    id: 8,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  }
]

export const SuggesList = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'Jisoo',
    justPostedNow: false
  },
  {
    id: 3,
    avatar:
      'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'Rose',
    justPostedNow: false
  },
  {
    id: 4,
    avatar:
      'https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'leola',
    justPostedNow: false
  },
  {
    id: 5,
    avatar:
      'https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fHww',
    username: 'lisa',
    justPostedNow: false
  },
  {
    id: 10,
    avatar:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'mono',
    justPostedNow: false
  },
  {
    id: 6,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  },
  {
    id: 7,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  },
  {
    id: 8,
    avatar:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D',
    username: 'sontum',
    justPostedNow: true
  }
]
