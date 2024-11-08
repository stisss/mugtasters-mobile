import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { Searchbar } from "react-native-paper"

interface SearchProps {
  onSearch: (phrase: string) => void
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search coffee, café, or roastery..."
        onChangeText={setSearchText}
        value={searchText}
        style={styles.input}
        onSubmitEditing={(e) => {
          onSearch(e.nativeEvent.text)
        }}
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
