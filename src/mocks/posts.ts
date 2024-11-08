import { type Post } from "@types"

export default [
  {
    id: "1",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    description: "Very tasty coffee but a bit too sour for me.",
    coffee: {
      name: "Juicy Brew",
      photo:
        "https://cdn-prod.coffeedesk.io/media/d9/65/a1/1706256502/2792216b406f4b399374a5702b84bc97.jpg",
    },
    cafe: {
      name: "Bez Cukru",
    },
    rating: 4.25,
    roastery: {
      name: "Lacava",
    },
    createdAt: "1 day ago",
    comments: [
      {
        id: "1",
        text: "Great coffee!",
        createdAt: "1 day ago",
        author: {
          name: "Jane Doe",
          avatar: "https://i.pravatar.cc/100?img=3",
        },
      },
    ],
    likes: [
      {
        userId: "1",
        userName: "Jane Doe",
      },
      {
        userId: "2",
        userName: "John Doe",
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    coffee: {
      name: "Juicy Stew",
    },
    roastery: {
      name: "Lacava",
    },
    rating: 4.5,
    createdAt: "2 days ago",
  },
  {
    id: "3",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    coffee: {
      name: "Juicy Glue",
    },
    roastery: {
      name: "Lacava",
    },
    rating: 3.5,
    createdAt: "2 days ago",
  },
] as Post[]
