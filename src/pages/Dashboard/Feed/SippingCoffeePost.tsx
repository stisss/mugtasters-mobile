import { useMemo } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Avatar, Button, Divider } from "react-native-paper"
import { Rating } from "react-native-ratings"
import { theme } from "@styles"

interface SippingCoffeePostProps {
  author: {
    name: string
    avatar: string
  }
  coffee: {
    name: string
  }
  cafe?: {
    name: string
  }
  rating: number
  roastery: {
    name: string
  }
  createdAt: string
}

const SippingCoffeePost: React.FC<SippingCoffeePostProps> = ({
  author,
  coffee,
  rating,
  cafe,
  roastery,
  createdAt,
}) => {
  const content = useMemo(() => {
    const cafeText = cafe ? ` at ${cafe.name}` : ""
    const roasteryText = roastery ? ` from ${roastery.name}` : ""
    return `${author.name} is sipping ${coffee.name}${roasteryText}${cafeText}.`
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Avatar.Image
          source={{ uri: author.avatar }}
          size={32}
          style={styles.avatar}
        />
        <View style={styles.textWrapper}>
          <Text>{content}</Text>
        </View>
      </View>
      <Rating
        style={styles.rating}
        fractions={1}
        imageSize={24}
        tintColor={theme.colors.whitish}
        readonly
        startingValue={rating}
      />
      <Divider style={styles.divider} />
      <View style={styles.buttonsContainer}>
        <Button mode="contained">Like</Button>
        <Button mode="contained">Comment</Button>
      </View>
      <Text style={styles.date}>{createdAt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.whitish,
    padding: 16,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {},
  textWrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
  rating: {
    marginTop: 8,
  },
  divider: {
    marginVertical: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  date: {
    marginTop: 8,
  },
})

export default SippingCoffeePost
