import { View, StyleSheet } from "react-native"
import { Button } from "react-native-paper"

const FavoriteSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button mode="contained">sipped mugs (22)</Button>
      <Button mode="contained">friends (12)</Button>
      <Button mode="contained">cafés (19)</Button>
      <Button mode="contained">coffee roasteries (24)</Button>
      <Button mode="contained">wishlist (30)</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 16,
    padding: 16,
    gap: 4,
  },
})

export default FavoriteSection
