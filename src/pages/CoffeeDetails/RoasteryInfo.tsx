import { View, Text, StyleSheet, Image } from "react-native"
import { theme } from "@styles"
import { useCoffee } from "./CoffeeContext"

const RoasteryInfo: React.FC = () => {
  const { coffee, isLoading } = useCoffee()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!coffee) {
    return null
  }

  const { roastery } = coffee

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roastery</Text>
      <View style={styles.contentContainer}>
        <Image source={{ uri: roastery.photo }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{roastery.name}</Text>
          <Text style={styles.description}>{roastery.description}</Text>
        </View>
      </View>
    </View>
  )
}

export default RoasteryInfo

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.whitish,
    borderRadius: 8,
    marginTop: 8,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    marginRight: 8,
    borderRadius: 4,
    height: 96,
    width: 96,
  },
  detailsContainer: {
    paddingVertical: 8,
    alignSelf: "stretch",
    alignItems: "flex-start",
    maxWidth: "60%",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: theme.colors.darkish,
  },
})
