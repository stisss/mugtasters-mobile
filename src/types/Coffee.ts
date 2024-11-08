export type Coffee = {
  id: string
  name: string
  photo: string
  rating: number
  roastery: {
    name: string
    photo: string
    description: string
  }
  createdAt: string
  tastingNotes: string[]
  countryOfOrigin: string
  method: string
  producer: string
  region: string
  varietal: string
  elevation: number
  tags: string[]
}
