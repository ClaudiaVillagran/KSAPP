import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoKsa from "../../assets/svg/LogoKsa";
import ItemCart from "./ItemCart"; // puedes mapear múltiples

export default function CartScreen() {
  const subtotal = 20000;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoKsa width={100} height={50} />
      </View>

      <View style={styles.body}>
          <ItemCart />

        <View style={styles.footer}>
          <View style={styles.subtotalRow}>
            <Text style={styles.subtotalLabel}>Subtotal:</Text>
            <Text style={styles.subtotalValue}>${subtotal.toLocaleString()}</Text>
          </View>

          <Pressable style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Finalizar compra</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  subtotalLabel: {
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
  },
  subtotalValue: {
    fontSize: 16,
    color: "#111",
    fontWeight: "700",
  },
  checkoutButton: {
    backgroundColor: "#348ba8",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom:20
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
