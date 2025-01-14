import { useState } from "react"
import { Post } from "../types/Post"
import mockedPosts from "../mocks/posts"

type UsePosts = () => {
  posts: Post[]
  isError: boolean
  isLoading: boolean
}

export const usePosts: UsePosts = () => {
  const [posts, setPosts] = useState<Post[]>(mockedPosts)
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return { posts, isError, isLoading }
}
