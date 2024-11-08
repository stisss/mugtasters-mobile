import { SafeAreaView, StyleSheet } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { theme } from "@styles"
import { useSearch } from "@hooks"
import { type DashboardStackParamList } from "@navigation"
import SearchTabs from "./SearchTabs"
import ResultsList from "./ResultsList"

interface SearchResultsProps {
  navigation: StackNavigationProp<DashboardStackParamList, "SearchResults">
  route: RouteProp<DashboardStackParamList, "SearchResults">
}

const SearchResults: React.FC<SearchResultsProps> = ({ navigation, route }) => {
  const { isLoading, searchCategory, setSearchCategory, searchResults } =
    useSearch(route.params.search)

  return (
    <SafeAreaView style={styles.container}>
      <SearchTabs
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <ResultsList
        results={searchResults}
        isFechingResults={isLoading}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.whitish,
    marginTop: 16,
    alignSelf: "stretch",
    borderRadius: 8,
  },
})

export default SearchResults
