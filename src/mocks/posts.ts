import { Post } from "../types/Post"

export default [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    coffee: {
      name: "Juice Brew",
    },
    cafe: {
      name: "Bez Cukru",
    },
    rating: 4.25,
    roastery: {
      name: "Lacava",
    },
    createdAt: "1 day ago",
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    coffee: {
      name: "Juice Stew",
    },
    roastery: {
      name: "Lacava",
    },
    rating: 4.5,
    createdAt: "2 days ago",
  },
] as Post[]
