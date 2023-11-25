import { useCallback, useEffect, useState } from 'react'
import { Button } from 'src/components'
import CardFriend from 'src/components/Friends/CardFriend'
import { useAppSelector } from 'src/hooks/useRedux'
import followService from 'src/services/api/follow/follow.service'
import profileService from 'src/services/api/profile/profile.service'
import socketService from 'src/services/socket/socket.service'

const Friends = () => {
  const [listUser, setListUser] = useState<any[]>([])
  const [followings, setFollowings] = useState<any[]>([])

  const { profile } = useAppSelector((state) => state.user)
  const isFollow = useCallback((userId: string) => followings.some((f) => f._id === userId), [followings])

  useEffect(() => {
    const getAllUser = async () => {
      const result = await profileService.getAllUser()
      setListUser(result.data.users)
    }
    getAllUser()
  }, [])

  useEffect(() => {
    const getFollowings = async () => {
      const result = await followService.getFollowings()
      setFollowings(result.data.following)
    }
    getFollowings()
  }, [])

  useEffect(() => {
    socketService.socket?.on('add follower', (data: any) => {
      if (isFollow(data._id)) {
        setFollowings([...followings.filter((f) => f._id !== data._id)])
      } else {
        setFollowings([...followings, data])
        setListUser([
          ...listUser.map((u) => {
            if (u._id === data._id) {
              return {
                ...u,
                followersCount: data.followersCount,
                followingCount: data.followingCount
              }
            }
            return u
          })
        ])
      }
    })
  }, [isFollow, followings, listUser])

  const handleFollowUser = useCallback(
    async (userId: string) => {
      if (isFollow(userId)) {
        await followService.unFollowUser(profile._id, userId)
        setListUser([...listUser.map((u) => (u._id === userId ? { ...u, followersCount: u.followersCount - 1 } : u))])
      } else {
        await followService.followUser(userId)
      }
    },
    [isFollow, profile._id, listUser]
  )

  return (
    <div className='flex w-full h-full flex-col px-3 sm:px-6'>
      <h2 className='text-base font-bold mb-4 block mt-6 text-dark dark:text-light'>Những người bạn có thể biết</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {listUser.map((user) => (
          <CardFriend
            key={user._id}
            onClick={() => handleFollowUser(user._id)}
            avatar={user.profilePicture}
            followers={user.followersCount}
            following={user.followingCount}
            fullName={user.username}
            text={isFollow(user._id) ? 'Un Follow' : 'Follow'}
          />
        ))}
      </div>

      <Button
        bg='bg-light'
        textColor='text-dark dark:text-light'
        className='py-3 rounded-md shadow-shadowMain mt-4 dark:bg-dark'
      >
        Xem thêm
      </Button>
    </div>
  )
}

export default Friends
