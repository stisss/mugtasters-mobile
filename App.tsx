import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation"
import { CommonActions, NavigationContainer } from "@react-navigation/native"
import { StyleSheet, Text, View } from "react-native"
import { PaperProvider } from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Dashboard from "./src/pages/Dashboard"
import { theme } from "./src/styles"

const Tab = createMaterialBottomTabNavigator()

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
            {() => <Dashboard />}
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
            {() => (
              <View>
                <Text>Profile</Text>
              </View>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </PaperProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
