import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

const Search = () => {
  const [searchText, setSearchText] = useState("")

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search coffee, café, or roastery..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
})

export default Search
