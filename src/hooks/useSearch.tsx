import { useEffect, useState } from "react"
import coffees from "../mocks/coffees"
import { Coffee } from "../types/Coffee"

export type SearchCategory = "coffee" | "roastery" | "cafe"

type UseSearch = (phrase: string) => {
  isLoading: boolean
  // error: string | null
  searchResults: any[]
  setSearchCategory: (category: SearchCategory) => void
  searchCategory: SearchCategory
}

export const useSearch: UseSearch = (phrase) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchCategory, setSearchCategory] = useState<SearchCategory>("coffee")
  const [searchResults, setSearchResults] = useState<Coffee[]>(coffees)

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, 500)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    delay().then(() => {
      setIsLoading(false)
    })
  }, [phrase, searchCategory])

  return { isLoading, searchResults, setSearchCategory, searchCategory }
}
