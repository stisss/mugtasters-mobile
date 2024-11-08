import { useCallback } from "react"
import { ScrollView, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { DashboardStackParamList } from "@navigation"
import { Activity } from "@components"
import { usePosts } from "@hooks"
import Search from "./Search"

interface DashboardProps {
  navigation: StackNavigationProp<DashboardStackParamList, "DashboardMain">
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const { isError, isLoading, posts } = usePosts()

  const search = (phrase: string) => {
    navigation.navigate("SearchResults", { search: phrase })
  }

  const goToCoffeeDetails = useCallback((coffeeId: string) => {
    navigation.navigate("CoffeeDetails", { coffeeId })
  }, [])

  const goToPostDetails = useCallback((postId: string) => {
    navigation.navigate("PostDetails", { postId })
  }, [])

  return (
    <View className="flex-1 bg-secondary justify-start items-center px-4 pt-12">
      <Search onSearch={search} />
      <ScrollView
        className="flex-1 w-full mx-4 mt-4"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Activity
          posts={posts}
          onPressCoffee={goToCoffeeDetails}
          onPressComment={goToPostDetails}
          isError={isError}
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  )
}

export default Dashboard
