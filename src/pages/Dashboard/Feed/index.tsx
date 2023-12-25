import { View, StyleSheet, FlatList } from "react-native"
import { usePosts } from "../../../hooks/usePosts"
import SippingCoffeePost from "./SippingCoffeePost"

const Feed = () => {
  const { error, isLoading, posts } = usePosts()

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <SippingCoffeePost {...item} createdAt={item.createdAt} />
        )}
        keyExtractor={({ id }) => id}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 16,
  },
  contentContainer: {
    gap: 8,
  },
})

export default Feed
