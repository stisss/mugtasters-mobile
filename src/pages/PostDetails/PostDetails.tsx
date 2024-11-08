import { useState } from "react"
import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native"
import {
  Avatar,
  Button,
  Divider,
  Searchbar,
  TextInput,
} from "react-native-paper"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { DashboardStackParamList } from "@navigation"
import { usePost } from "@hooks"
import { Rating } from "react-native-ratings"
import { theme } from "@styles"

interface PostDetailsProps {
  route: RouteProp<DashboardStackParamList, "PostDetails">
  navigation: StackNavigationProp<DashboardStackParamList, "PostDetails">
}

const PostDetails: React.FC<PostDetailsProps> = ({ navigation, route }) => {
  const { post } = usePost(route.params.postId)

  const [searchText, setSearchText] = useState("")

  const onPressAuthor = () => {
    console.log("Author pressed")
  }

  const onAddComment = (value: string) => {
    console.log("Add comment pressed")
  }

  return (
    <>
      <ScrollView
        className="flex-1 p-2 bg-secondary"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <View className="bg-whitish p-4 rounded-lg mt-2">
          <Text className="mb-2">{post.createdAt}</Text>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity onPress={onPressAuthor}>
              <Avatar.Image source={{ uri: post.author.avatar }} size={32} />
            </TouchableOpacity>
            <Text className="font-medium">{post.author.name}</Text>
          </View>
          <View className="mt-4 border border-gray-400 rounded p-2">
            <View className="flex-row items-center">
              <Image
                source={{ uri: post.coffee.photo }}
                className="mr-2 rounded h-16 w-16"
              />
              <View className="self-stretch py-2">
                <Text className="text-xl font-bold">{post.coffee.name}</Text>
                <Text className="text-darkish">{post.roastery.name}</Text>
              </View>
            </View>
            {post.description && (
              <Text className="mt-4">{post.description}</Text>
            )}
            <View className="flex-row items-center gap-2 mt-2">
              <Rating
                fractions={1}
                imageSize={24}
                tintColor={theme.colors.whitish}
                readonly
                startingValue={post.rating}
              />
              <Text>{post.rating}</Text>
            </View>
            <Divider className="my-4" />
            <View className="flex-row gap-2">
              <Button mode="contained-tonal" onPress={() => {}}>
                Comment
              </Button>
              <Button mode="contained">Like</Button>
            </View>
          </View>
          {!!post.likes.length && (
            <View className="flex-row mt-2">
              <Text>{post.likes[0].userName}</Text>
              {post.likes.length > 1 && (
                <Text>{` and ${post.likes.length - 1} others liked this`}</Text>
              )}
            </View>
          )}
        </View>
        {post?.comments.map((comment) => (
          <View key={comment.id} className="bg-whitish p-4 rounded-lg mt-2">
            <Text className="mb-2">{comment.createdAt}</Text>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={onPressAuthor}>
                <Avatar.Image
                  source={{ uri: comment.author.avatar }}
                  size={32}
                />
              </TouchableOpacity>
              <Text className="font-medium">{comment.author.name}</Text>
            </View>
            <Text className="mt-2">{comment.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View className="bg-gray-700 border-t flex-row items-center">
        <TextInput
          placeholder="Leave a comment..."
          onChangeText={setSearchText}
          value={searchText}
          style={{ flex: 1 }}
          onSubmitEditing={(e) => {
            onAddComment(e.nativeEvent.text)
          }}
          right={<TextInput.Icon icon="send" onPress={() => {}} />}
        />
      </View>
    </>
  )
}

export default PostDetails
