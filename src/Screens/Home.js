import React from "react";
import { View, Text, Button } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View className=" flex-1 items-center justify-center bg-red-600">
      <Text className=" text-amber-500 ">Home page</Text>
      <Button
        title="Go to Detailed"
        onPress={() => navigation.navigate("Detailed")}
      />
    </View>
  );
};
export default Home;
