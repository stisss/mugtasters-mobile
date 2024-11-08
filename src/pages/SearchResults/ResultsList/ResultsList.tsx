import { View, StyleSheet, Text, FlatList } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { DashboardStackParamList } from "@navigation"
import { theme } from "@styles"
import { Coffee } from "@types"
import LoadingSearchResults from "./LoadingSearchResults"
import SearchNotFound from "./SearchNotFound"
import CoffeeItem from "./CoffeeItem"
import { useCallback } from "react"

interface ResultsListProps {
  results: Coffee[]
  isFechingResults: boolean
  navigation: StackNavigationProp<DashboardStackParamList, "SearchResults">
}

const ResultsList: React.FC<ResultsListProps> = ({
  results,
  isFechingResults,
  navigation,
}) => {
  if (isFechingResults) {
    return (
      <View style={styles.resultsContainer}>
        <LoadingSearchResults />
      </View>
    )
  }

  const goToCoffeeDetails = useCallback((coffeeId: string) => {
    navigation.navigate("CoffeeDetails", { coffeeId })
  }, [])

  return (
    <View style={styles.resultsContainer}>
      {!results.length ? (
        <SearchNotFound />
      ) : (
        <FlatList
          data={results}
          style={styles.listContainer}
          renderItem={({ item }) => (
            <CoffeeItem
              key={item.id}
              id={item.id}
              description={item.roastery.name}
              imageUrl={item.photo}
              name={item.name}
              rating={item.rating}
              onPress={goToCoffeeDetails}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.whitish,
    marginTop: 16,
    alignSelf: "stretch",
    borderRadius: 8,
  },
  listContainer: {
    alignSelf: "stretch",
    paddingTop: 8,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
})

export default ResultsList
