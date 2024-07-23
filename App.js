import React from "react";
import { View, StyleSheet } from "react-native";
import AppNavigation from "./src/navigations/app.navigation";
import BottomNavigation from "./src/navigations/bottom.navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
