import { View, Text, StyleSheet } from "react-native"
import { Rating } from "react-native-ratings"
import { theme } from "@styles"

interface RatingRowProps {
  label: string
  rating: number
}

const RatingRow: React.FC<RatingRowProps> = ({ label, rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Rating
        style={styles.rating}
        fractions={1}
        imageSize={24}
        tintColor={theme.colors.whitish}
        readonly
        startingValue={rating}
      />
      <Text>{rating}</Text>
    </View>
  )
}

export default RatingRow

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  label: {},
  rating: {
    marginLeft: "auto",
    marginRight: 8,
  },
})
