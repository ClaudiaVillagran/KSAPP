import {  StyleSheet, View } from "react-native";
import React from "react";

import AuthStack from "../navigation/AuthStack";
import PrincipalTabs from "../navigation/PrincipalTabs";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesStack from "../navigation/ServicesStack";

const Stack = createStackNavigator();
export default function MainScreen() {
  return (
    <View style={styles.containerMain}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PrincipalTabs" component={PrincipalTabs} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="ServicesStack" component={ServicesStack} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingTop: 50,
  },
});
