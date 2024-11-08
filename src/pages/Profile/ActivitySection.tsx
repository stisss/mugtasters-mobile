import { View, Text } from "react-native"
import { Activity } from "@components"
import { usePosts } from "@hooks"

const ActivitySection: React.FC = () => {
  const { isError, isLoading, posts } = usePosts()

  return (
    <View className="flex-1 p-4 gap-1">
      <Text className="text-2xl text-whitish font-medium my-2">
        Your activity
      </Text>
      <Activity
        isError={isError}
        isLoading={isLoading}
        onPressCoffee={() => {}}
        onPressComment={() => {}}
        posts={posts}
        className="mx-0.5"
      />
    </View>
  )
}

export default ActivitySection
