import { SegmentedButtons } from "react-native-paper"
import { SearchCategory } from "../../hooks/useSearch"

interface SearchTabsProps {
  searchCategory: SearchCategory
  setSearchCategory: (searchCategory: SearchCategory) => void
}

const SearchTabs: React.FC<SearchTabsProps> = ({
  searchCategory,
  setSearchCategory,
}) => {
  const handleSearchCategory = (category: string) => {
    setSearchCategory(category as SearchCategory)
  }
  return (
    <SegmentedButtons
      value={searchCategory}
      onValueChange={handleSearchCategory}
      buttons={[
        {
          value: "coffee",
          label: "Coffee",
        },
        {
          value: "roastery",
          label: "Roastery",
        },
        { value: "cafe", label: "Café" },
      ]}
    />
  )
}

export default SearchTabs
