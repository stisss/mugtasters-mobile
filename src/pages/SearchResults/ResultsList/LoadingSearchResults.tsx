import { View, Text, StyleSheet } from "react-native"

const LoadingSearchResults: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
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

export default LoadingSearchResults
