import { Text, View, StyleSheet } from "react-native"
import { Avatar } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { theme } from "@styles"

const UserSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundPhoto}>
        <Avatar.Image
          size={80}
          style={styles.avatar}
          source={{
            uri: "https://i.pravatar.cc/100?img=1",
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Icon
          name="pencil"
          size={32}
          style={styles.editIcon}
          color={theme.colors.darkish}
        />
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.description}>
          I'm a coffee lover and I love to try new coffee beans.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexShrink: 0,
    backgroundColor: theme.colors.whitish,
    flexDirection: "column",
  },
  backgroundPhoto: {
    backgroundColor: theme.colors.darkish,
    alignSelf: "stretch",
    height: 128,
    paddingTop: 32,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    bottom: -40,
    left: 16,
  },
  contentContainer: {
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    color: theme.colors.darkish,
  },
  description: {
    fontSize: 16,
    color: theme.colors.darkish,
    marginTop: 8,
  },
  editIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
})

export default UserSection
