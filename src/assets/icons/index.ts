import AddFrendsSvg from './components/friends/AddFriendSvg'
import AllFriendsSvg from './components/friends/AllFriendsSvg'
import CakeSvg from './components/friends/CakeSvg'
import KeepSvg from './components/friends/KeepSvg'
import FriendsSvg from './components/friends/FriendsSvg'

import CommunitySvg from './components/navigations/ComunitySvg'
import ExploreSvg from './components/navigations/ExploreSvg'
import HomeSvg from './components/navigations/HomeSvg'
import MessageSvg from './components/navigations/MessageSvg'
import ToptvSvg from './components/navigations/ToptvSvg'
import PrivacySvg from './components/PrivacySvg'
import AddImageSvg from './components/posts/AddImageSvg'
import AddVideoSvg from './components/posts/AddVideoSvg'
import AddGifSvg from './components/posts/AddGifSvg'
import AddIconsSvg from './components/posts/AddIconsSvg'

const Icons = {
  Navigations: {
    Home: HomeSvg,
    Explore: ExploreSvg,
    TopTv: ToptvSvg,
    Message: MessageSvg,
    Community: CommunitySvg
  },
  NavigationFriends: {
    AddFriend: AddFrendsSvg,
    Cake: CakeSvg,
    AllFriends: AllFriendsSvg,
    Keep: KeepSvg,
    Friends: FriendsSvg
  },
  Privacy: PrivacySvg,
  Post: {
    AddImage: AddImageSvg,
    AddVideo: AddVideoSvg,
    AddGif: AddGifSvg,
    AddIcons: AddIconsSvg
  }
}

export default Icons
