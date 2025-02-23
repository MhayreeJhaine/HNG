import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
};

export default MainLayout;
