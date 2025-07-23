import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AreasToResolve } from "../../data/AreasToResolve";
import AreaToRelsoveCard from "../../components/cards/AreaToRelsoveCard";
import { vs } from "react-native-size-matters";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesStack from "../../navigation/ServicesStack";
export default function AreaToResolve() {
  return (
    <View style={styles.containerArea}>
      <Text style={styles.title}>Áreas que resolvemos</Text>
    
      <FlatList
        horizontal={true}
        data={AreasToResolve}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AreaToRelsoveCard
            imageUrl={item.image}
            title={item.title}
            description={item.description}
            navigateTo={item.screen}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
      {/* {AreasToResolve.map((item) => (
        <AreaToRelsoveCard
          key={item.id}
          imageUrl={item.image}
          title={item.title}
          description={item.description}
        />
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerArea: {
    minHeight: 200,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
});
