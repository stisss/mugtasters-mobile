import { View, StyleSheet } from "react-native"
import Search from "./Search"
import Feed from "./Feed"
import { theme } from "../../styles/theme"

const Dashboard: React.FC = () => {
  return (
    <View style={{ ...styles.container }}>
      <Search />
      <Feed />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 48,
  },
})

export default Dashboard
