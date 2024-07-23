import React from "react";
import HomeScreen from "../Screens/Home";
import DetailedScreen from "../Screens/Detailed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detailed"
        component={DetailedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
