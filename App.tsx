import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./src/Home/HomeScreen"
import Home from "./src/Home/Home"
import DrivingTestRequest from "./src/Components/DrivingTest/DrivingTestRequest"
import DrivingTestHistory from "./src/Components/DrivingTest/DrivingTestHistory"
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="DrivingTestRequest" component={DrivingTestRequest}/>
          <Stack.Screen name="DrivingTestHistory" component={DrivingTestHistory}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App