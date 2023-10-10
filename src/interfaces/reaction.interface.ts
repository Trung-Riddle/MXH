export interface ReactionsDocuments {
  id: string
  username: string
  avatarColor: string
  type: string
  profilePicture: string
  postId: string
  userTo: string
  comment: string
  createdAt: Date
}
export interface IReactions {
  angry: number
  happy: number
  like: number
  love: number
  sad: number
  wow: number
}
