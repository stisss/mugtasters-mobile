import { View, Text, StyleSheet } from "react-native"

const SearchNotFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Results not found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default SearchNotFound
