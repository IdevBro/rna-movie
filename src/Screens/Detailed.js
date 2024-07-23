import React from "react";
import { View, Text, Button } from "react-native";

export default function Detailed({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center   ">
      <Text className="text-red-300">Detailed</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
