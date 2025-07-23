import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AvailableProducts } from "../../data/availableProducts/AvailableProducts";
import AvailableProductsCard from "../../components/cards/AvailableProductsCard";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
export default function OurProducts() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>
        Conoce nuestros servicios destacados
      </Text>
      <FlatList
        horizontal={true}
        data={AvailableProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AvailableProductsCard
            image={item.image}
            title={item.title}
            price={item.price}
            author={item.author}
            onAddToCartPress={() => dispatch(addItemToCart(item))}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        extraData={AvailableProducts} // Fuerza el re-renderizado
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 12,
    color: "#222",
  },
  listContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
});
