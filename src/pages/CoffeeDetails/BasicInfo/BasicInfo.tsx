import { Button } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { theme } from "@styles"
import { useCoffee } from "../CoffeeContext"
import RatingRow from "./RatingRow"

interface BasicInforProps {
  onPressMugShot: () => void
}

const BasicInfo: React.FC<BasicInforProps> = ({ onPressMugShot }) => {
  const { coffee, isLoading } = useCoffee()

  if (isLoading) {
    return (
      <View className="bg-whitish rounded-lg p-4">
        <Text>Loading...</Text>
      </View>
    )
  }

  if (!coffee) {
    return null
  }

  return (
    <View className="bg-whitish rounded-lg p-4">
      <View className="flex-row items-center">
        <Image
          source={{ uri: coffee.photo }}
          className="mr-2 rounded h-24 w-24"
        />
        <View className="self-stretch py-2">
          <Text className="text-2xl font-bold">{coffee.name}</Text>
          <Text className="text-darkish">{coffee.roastery.name}</Text>
        </View>
      </View>
      <View className="pt-4 gap-2">
        <TouchableOpacity
          onPress={onPressMugShot}
          activeOpacity={0.8}
          className="flex-row items-center justify-center bg-primary py-2 rounded-full gap-1"
        >
          <Text>Mug shot!</Text>
          <Icon name="coffee" size={20} color={theme.colors.darkish} />
        </TouchableOpacity>
        <Button mode="contained-tonal">Add to list</Button>
      </View>
      <View className="mx-2 my-4">
        <Text className="font-medium mb-2">
          This coffee was sipped 77 times.
        </Text>
        <RatingRow label="You" rating={coffee.rating} />
        <RatingRow label="Friends" rating={coffee.rating} />
        <RatingRow label="Everyone" rating={coffee.rating} />
      </View>
    </View>
  )
}

export default BasicInfo
