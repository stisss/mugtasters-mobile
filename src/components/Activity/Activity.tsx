import { useCallback } from "react"
import { FlatList, View, Text } from "react-native"
import { Post } from "@types"
import { SippingCoffeePost } from "../SippingCoffeePost"

interface ActivityProps {
  isLoading: boolean
  isError: boolean
  posts: Post[]
  onPressCoffee: (id: string) => void
  onPressComment: (id: string) => void
  className?: string
}

export const Activity: React.FC<ActivityProps> = ({
  isError,
  isLoading,
  onPressCoffee,
  onPressComment,
  posts,
  className,
}) => {
  const handlePressCoffee = useCallback(
    (id: string) => () => {
      onPressCoffee(id)
    },
    []
  )
  const handlePressComment = useCallback(
    (id: string) => () => {
      onPressComment(id)
    },
    []
  )

  if (isError) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!posts.length) {
    return (
      <View>
        <Text>No activity yet</Text>
      </View>
    )
  }

  return (
    <View className={`w-full ${className}`}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <SippingCoffeePost
            {...item}
            commentsCount={item.comments?.length}
            createdAt={item.createdAt}
            onPressCoffee={handlePressCoffee(item.id)}
            onPressComment={handlePressComment(item.id)}
          />
        )}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{ gap: 8 }}
        scrollEnabled={false}
      />
    </View>
  )
}
