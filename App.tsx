import { IconButton, PaperProvider } from "react-native-paper"
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {
  Dashboard,
  Profile,
  SearchResults,
  CoffeeDetails,
  MugShot,
  PostDetails,
} from "@pages"
import { theme } from "@styles"
import { DashboardStackParamList } from "@navigation"
import { useAlert } from "@hooks"

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator<DashboardStackParamList>()

const DashboardStack: React.FC = () => {
  const { triggerAlert } = useAlert()

  return (
    <Stack.Navigator initialRouteName="DashboardMain">
      <Stack.Screen
        name="DashboardMain"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={({ navigation, route }) => ({
          title: `Search results: ${route.params.search}`,
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="CoffeeDetails"
        component={CoffeeDetails}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
          ),
        })}
      />
      <Stack.Screen
        name="MugShot"
        component={MugShot}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <IconButton
              icon="close"
              onPress={() =>
                triggerAlert({
                  message:
                    "Are you sure you want to exit the MugShot? Your changes will not be saved.",
                  title: "Exit MugShot?",
                  onCancel: () => {},
                  onConfirm: navigation.goBack,
                  confirmLabel: "Exit",
                })
              }
            />
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Tab.Navigator>
          <Tab.Screen
            name="Dashboard"
            options={{
              tabBarLabel: "Dashboard",
              tabBarIcon: () => (
                <Icon name="home" size={32} color={theme.colors.whitish} />
              ),
            }}
          >
            {DashboardStack}
          </Tab.Screen>
          <Tab.Screen
            name="Profile"
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: () => (
                <Icon name="account" size={32} color={theme.colors.whitish} />
              ),
            }}
          >
            {Profile}
          </Tab.Screen>
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  )
}
