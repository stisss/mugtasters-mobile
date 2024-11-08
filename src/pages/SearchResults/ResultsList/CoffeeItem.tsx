import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { Rating } from "react-native-ratings"
import { Divider } from "react-native-paper"
import { theme } from "@styles"

interface CoffeeItemProps {
  id: string
  name: string
  description: string
  imageUrl: string
  rating: number
  onPress: (coffeeId: string) => void
}

const CoffeeItem: React.FC<CoffeeItemProps> = ({
  id,
  description,
  imageUrl,
  name,
  rating,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onPress(id)}
        activeOpacity={0.8}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.ratingContainer}>
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
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: 8,
    justifyContent: "flex-start",
  },
  image: {
    marginRight: 8,
    borderRadius: 4,
    height: 96,
    width: 96,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: theme.colors.darkish,
  },
  ratingContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rating: {
    alignSelf: "flex-start",
  },
  divider: {
    backgroundColor: theme.colors.secondary,
    marginVertical: 8,
  },
})

export default CoffeeItem
