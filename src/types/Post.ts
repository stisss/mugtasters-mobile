export type Post = {
  id: string
  author: {
    name: string
    avatar: string
  }
  coffee: {
    name: string
    photo: string
  }
  cafe?: {
    name: string
  }
  rating: number
  roastery: {
    name: string
  }
  createdAt: string
  comments: {
    id: string
    text: string
    createdAt: string
    author: {
      name: string
      avatar: string
    }
  }[]
  likes: {
    userId: string
    userName: string
  }[]
  description: string
}
