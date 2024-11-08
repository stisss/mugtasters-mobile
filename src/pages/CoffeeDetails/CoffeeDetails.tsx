import { ScrollView } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { DashboardStackParamList } from "@navigation"
import BasicInfo from "./BasicInfo"
import { CoffeeContextProvider } from "./CoffeeContext"
import RoasteryInfo from "./RoasteryInfo"
import Description from "./Description"
import RecentActivity from "./RecentActivity"

interface CoffeeDetailsProps {
  route: RouteProp<DashboardStackParamList, "CoffeeDetails">
  navigation: StackNavigationProp<DashboardStackParamList, "CoffeeDetails">
}

const CoffeeDetails: React.FC<CoffeeDetailsProps> = ({ route, navigation }) => {
  const onClickMugShot = () => {
    navigation.navigate("MugShot", { coffeeId: route.params.coffeeId })
  }

  return (
    <CoffeeContextProvider coffeeId={route.params.coffeeId}>
      <ScrollView
        className="flex-1 p-2 bg-secondary"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <BasicInfo onPressMugShot={onClickMugShot} />
        <RoasteryInfo />
        <Description />
        <RecentActivity navigation={navigation} />
      </ScrollView>
    </CoffeeContextProvider>
  )
}

export default CoffeeDetails
