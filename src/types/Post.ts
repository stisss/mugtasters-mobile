export type Post = {
  id: string
  author: {
    name: string
    avatar: string
  }
  coffee: {
    name: string
  }
  cafe?: {
    name: string
  }
  rating: number
  roastery: {
    name: string
  }
  createdAt: string
}
