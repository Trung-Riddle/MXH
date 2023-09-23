export interface UserDocuments {
  id: string
  createdAt: Date
  authId: string
  gender: {
    female: boolean
    male: boolean
  }
  profilePicture: string
  postsCount: number
  followers: number
  following: number
  password: string
  relatives: string[]
  blocked: string[]
  social: {
    facebook: string
    github: string
    intagram: string
    youtube: string
  }
  blokedsBy: string[]
  relationship: string
  bgImageCover: string
  work: string
  status: string
  quote: string
  bgImageId: string
  location: string
  fullName: string
  birthday: Date
}
