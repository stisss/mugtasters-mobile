import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { type Coffee } from "@types"
import coffees from "../../mocks/coffees"

type CoffeeContext = {
  coffee: Coffee | null
  isLoading: boolean
  isError: boolean
}

const initialState: CoffeeContext = {
  coffee: null,
  isLoading: false,
  isError: false,
}

const CoffeeContext = createContext<CoffeeContext>(initialState)

interface CoffeeContextProviderProps {
  children: React.ReactNode
  coffeeId: string
}

const CoffeeContextProvider: React.FC<CoffeeContextProviderProps> = ({
  children,
  coffeeId,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [coffee, setCoffee] = useState<Coffee | null>(coffees[0])

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, 1000)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    delay().then(() => {
      setIsLoading(false)
    })
  }, [])

  const value = useMemo(
    () => ({
      coffee,
      isLoading,
      isError,
    }),
    [coffee, isLoading]
  )

  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
  )
}

const CoffeeContextConsumer = CoffeeContext.Consumer

const useCoffee = (): CoffeeContext => {
  const context = useContext(CoffeeContext)
  if (context === undefined) {
    throw new Error("useCoffee must be used within a CoffeeContextProvider")
  }
  return context
}

export { useCoffee, CoffeeContextProvider, CoffeeContextConsumer }
