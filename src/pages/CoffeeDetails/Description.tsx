import { View, Text, StyleSheet, Image } from "react-native"
import { theme } from "@styles"
import { useCoffee } from "./CoffeeContext"

const Description: React.FC = () => {
  const { coffee, isLoading } = useCoffee()

  if (isLoading) {
    return (
      <View className="bg-whitish p-4 rounded-lg mt-2">
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!coffee) {
    return null
  }

  return (
    <View className="bg-whitish p-4 rounded-lg mt-2">
      <Text className="text-xl font-bold mb-4">Description</Text>
      <View className="mt-4 gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Tasting notes:</Text>
          <Text>{coffee.tastingNotes.join(", ")}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Country:</Text>
          <Text>{coffee.countryOfOrigin}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Elevation:</Text>
          <Text>{coffee.elevation} masl</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Method:</Text>
          <Text>{coffee.method}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Producer:</Text>
          <Text>{coffee.producer}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Region:</Text>
          <Text>{coffee.region}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-medium">Varietal:</Text>
          <Text>{coffee.varietal}</Text>
        </View>
      </View>
      <View className="mt-4">
        <Text className="font-medium">Tags</Text>
        <View className="flex-row gap-2 mt-1 flex-wrap">
          {coffee.tags.map((tag) => (
            <View className="bg-primary px-4 py-2 rounded-full" key={tag}>
              <Text className="text-darkish">{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Description
