import { useCallback, useState } from "react"
import { View, Text } from "react-native"
import { SegmentedButtons } from "react-native-paper"
import { StackNavigationProp } from "@react-navigation/stack"
import { usePosts } from "@hooks"
import { Activity } from "@components"
import { DashboardStackParamList } from "@navigation"

interface RecentActivityProps {
  navigation: StackNavigationProp<DashboardStackParamList>
}

type ActivityFilter = "friends" | "everyone"

const RecentActivity: React.FC<RecentActivityProps> = ({ navigation }) => {
  const [activityFilter, setActivityFilter] =
    useState<ActivityFilter>("friends")
  const { isError, isLoading, posts } = usePosts()

  const goToCoffeeDetails = useCallback((coffeeId: string) => {
    navigation.push("CoffeeDetails", { coffeeId })
  }, [])

  const goToPostDetails = useCallback((postId: string) => {
    navigation.push("PostDetails", { postId })
  }, [])

  return (
    <View className="flex-1 w-full mt-4">
      <Text className="ml-2 text-xl text-whitish font-bold my-2">Activity</Text>
      <SegmentedButtons
        style={{ paddingBottom: 16 }}
        value={activityFilter}
        onValueChange={(v) => setActivityFilter(v as ActivityFilter)}
        buttons={[
          {
            value: "friends",
            label: "Friends",
          },
          {
            value: "everyone",
            label: "Everyone",
          },
        ]}
      />
      <Activity
        posts={posts}
        onPressCoffee={goToCoffeeDetails}
        onPressComment={goToPostDetails}
        isError={isError}
        isLoading={isLoading}
      />
    </View>
  )
}

export default RecentActivity
