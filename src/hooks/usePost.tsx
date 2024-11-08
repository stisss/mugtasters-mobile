import { useState } from "react"
import { Post } from "../types/Post"
import mockedPosts from "../mocks/posts"

type UsePost = (postId: string) => {
  post: Post
  isError: boolean
  isLoading: boolean
}

export const usePost: UsePost = (postId: string) => {
  const [post, setPost] = useState<Post>(mockedPosts[0])
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return { post, isError, isLoading }
}
