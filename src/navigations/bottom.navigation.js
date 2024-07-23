import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailedScreen from "../Screens/Detailed";
import HomeScreen from "../Screens/Home";
import Icon from "react-native-vector-icons/Ionicons"; // react-native-vector-icons kutubxonasidan Ionicons ikonlarini import qilyapmiz

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Detailed") {
            iconName = focused ? "list" : "list-outline";
          }

          // Icon komponentini qaytaramiz
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Detailed"
        component={DetailedScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
