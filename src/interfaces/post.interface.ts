export interface PostDocuments {
  id: string
  userId: string
  username: string
  email: string
  avatarColor: string
  profilePicture: string
  bgColor: string
  post: string
  commentCount: string
  imgPost: string
  imgId: string
  videoPost: string
  videoId: string
  feelings: string
  gifUrl: string
  privacy: string
  reactions: {
    angry: number
    happy: number
    like: number
    love: number
    sad: number
    wow: number
  }
  createdAt: Date
}