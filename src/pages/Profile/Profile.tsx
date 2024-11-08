import { StyleSheet, ScrollView } from "react-native"
import { theme } from "@styles"
import UserSection from "./UserSection"
import FavoriteSection from "./FavoritesSection"
import ActivitySection from "./ActivitySection"

const Profile: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <UserSection />
      <FavoriteSection />
      <ActivitySection />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    gap: 8,
  },
})

export default Profile
