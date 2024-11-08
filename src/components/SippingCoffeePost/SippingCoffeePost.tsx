import { useCallback, useMemo } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { Avatar, Button, Divider } from "react-native-paper"
import { Rating } from "react-native-ratings"
import { theme } from "@styles"
import { TouchableText } from "../TouchableText"

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
  likes?: {
    userId: string
    userName: string
  }[]
  commentsCount: number
  onPressCoffee?: () => void
  onPressComment?: () => void
}

export const SippingCoffeePost: React.FC<SippingCoffeePostProps> = ({
  author,
  coffee,
  rating,
  cafe,
  roastery,
  createdAt,
  commentsCount,
  likes,
  onPressCoffee,
  onPressComment,
}) => {
  const onPressAuthor = useCallback(() => {
    console.log("Author pressed")
  }, [])

  const onPressRoastery = useCallback(() => {
    console.log("Roastery pressed")
  }, [])

  const onPressCafe = useCallback(() => {
    console.log("Cafe pressed")
  }, [])

  const content = useMemo(() => {
    const cafeComponent = cafe ? (
      <Text>
        {" at "}
        <TouchableText onPress={onPressCafe}>{cafe.name}</TouchableText>
      </Text>
    ) : (
      ""
    )
    const roasteryComponent = roastery ? (
      <Text>
        {" from "}
        <TouchableText onPress={onPressRoastery}>{roastery.name}</TouchableText>
      </Text>
    ) : (
      ""
    )
    const authorComponent = (
      <TouchableText onPress={onPressAuthor}>{author.name}</TouchableText>
    )
    const coffeeComponent = (
      <TouchableText onPress={onPressCoffee}>{coffee.name}</TouchableText>
    )
    return (
      <Text>
        {authorComponent}
        {` is sipping `}
        {coffeeComponent}
        {roasteryComponent}
        {cafeComponent}
        {"."}
      </Text>
    )
  }, [])

  return (
    <View className="border border-secondary bg-whitish p-4 rounded-lg">
      <Text className="mb-2">{createdAt}</Text>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={onPressAuthor}>
          <Avatar.Image source={{ uri: author.avatar }} size={32} />
        </TouchableOpacity>
        <View className="flex-1 px-2">
          <Text>{content}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2 mt-2">
        <Rating
          fractions={1}
          imageSize={24}
          tintColor={theme.colors.whitish}
          readonly
          startingValue={rating}
        />
        <Text>{rating}</Text>
      </View>
      <Divider className="my-4" />
      <View className="flex-row gap-2">
        <Button mode="contained-tonal" onPress={onPressComment}>
          Comment
        </Button>
        <Button mode="contained">Like</Button>
      </View>
      {!!likes?.length && (
        <View className="flex-row mt-4">
          <Text className="font-semibold text-secondary">
            {likes[0].userName}
          </Text>
          {likes.length > 1 && (
            <Text>{` and ${likes.length - 1} others liked this`}</Text>
          )}
        </View>
      )}
      {commentsCount > 0 && (
        <Text className="mt-1 font-semibold">{commentsCount} comments</Text>
      )}
    </View>
  )
}
