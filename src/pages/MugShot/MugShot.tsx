import { ScrollView, Text, View, Image } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { DashboardStackParamList } from "@navigation"
import {
  CoffeeContextConsumer,
  CoffeeContextProvider,
} from "../CoffeeDetails/CoffeeContext"
import { useState } from "react"
import { Button, Divider, TextInput } from "react-native-paper"
import { theme } from "@styles"
import { Rating } from "react-native-ratings"

interface MugShotProps {
  route: RouteProp<DashboardStackParamList, "MugShot">
  navigation: StackNavigationProp<DashboardStackParamList, "MugShot">
}

const MugShot: React.FC<MugShotProps> = ({ navigation, route }) => {
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(undefined)

  return (
    <CoffeeContextProvider coffeeId={route.params.coffeeId}>
      <CoffeeContextConsumer>
        {({ coffee }) => (
          <>
            <ScrollView
              className="flex-1 p-2 bg-secondary"
              contentContainerStyle={{ paddingBottom: 16 }}
            >
              {coffee && (
                <>
                  <View className="bg-whitish p-4 rounded-lg mt-2">
                    <View className="flex-row items-center">
                      <Image
                        source={{ uri: coffee.photo }}
                        className="mr-2 rounded h-16 w-16"
                      />
                      <View className="self-stretch py-2">
                        <Text className="text-2xl font-bold">
                          {coffee.name}
                        </Text>
                        <Text className="text-darkish">
                          {coffee.roastery.name}
                        </Text>
                      </View>
                    </View>
                    <TextInput
                      className="bg-whitish mt-4"
                      placeholderTextColor={theme.colors.secondary}
                      textColor={theme.colors.darkish}
                      placeholder="How was it? Leave a note"
                      multiline
                      mode="outlined"
                      numberOfLines={4}
                      value={description}
                      onChangeText={setDescription}
                    />
                    <Divider className="mt-4" />
                    <View className="mt-2">
                      <View className="flex-row items-center justify-between">
                        <Text className="text-xl font-medium">Rating</Text>
                        <Text>
                          {rating === undefined ? "Not rated" : rating}
                        </Text>
                      </View>
                      <Rating
                        type="custom"
                        fractions={1}
                        jumpValue={0.5}
                        tintColor={theme.colors.whitish}
                        ratingColor={theme.colors.primary}
                        ratingBackgroundColor={theme.colors.secondary}
                        ratingCount={5}
                        imageSize={24}
                        startingValue={rating}
                        onFinishRating={setRating}
                      />
                    </View>
                    <Divider className="mt-4" />
                    <View className="mt-2">
                      <Text className="text-xl font-medium">Serving style</Text>
                      <View className="flex-row gap-2 mt-1 flex-wrap">
                        {[
                          "Chemex",
                          "V60",
                          "Aeropress",
                          "Coffee pot",
                          "Pressure machine",
                        ].map((tag) => (
                          <View
                            className="bg-primary px-4 py-2 rounded-full"
                            key={tag}
                          >
                            <Text className="text-darkish">{tag}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    <Divider className="mt-4" />
                    <View className="mt-2">
                      <Text className="text-xl font-medium">Tag friends</Text>
                      <View className="flex-row gap-2 mt-1 flex-wrap">
                        {[
                          "+ John Doe",
                          "+ John Foe",
                          "+ John Hoe",
                          "+ John Poe",
                        ].map((tag) => (
                          <View
                            className="bg-primary px-4 py-2 rounded-full"
                            key={tag}
                          >
                            <Text className="text-darkish">{tag}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                    <Divider className="mt-4" />
                    <View className="mt-2">
                      <Text className="text-xl font-medium">
                        Flavor profile
                      </Text>
                      <View className="flex-row gap-2 mt-1 flex-wrap">
                        {["+ Juicy", "+ Berries", "+ Apple", "+ Cinamon"].map(
                          (tag) => (
                            <View
                              className="bg-primary px-4 py-2 rounded-full"
                              key={tag}
                            >
                              <Text className="text-darkish">{tag}</Text>
                            </View>
                          )
                        )}
                      </View>
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
            <View className="p-4 bg-gray-700 border-t ">
              <Button mode="contained" onPress={() => navigation.goBack()}>
                Save
              </Button>
            </View>
          </>
        )}
      </CoffeeContextConsumer>
    </CoffeeContextProvider>
  )
}

export default MugShot
