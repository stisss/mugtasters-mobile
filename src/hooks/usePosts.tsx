import { useState } from "react"
import { Post } from "../types/Post"
import mockedPosts from "../mocks/posts"

type UsePosts = () => {
  posts: Post[]
  error: string | null
  isLoading: boolean
}

export const usePosts: UsePosts = () => {
  const [posts, setPosts] = useState<Post[]>(mockedPosts)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return { posts, error, isLoading }
}
