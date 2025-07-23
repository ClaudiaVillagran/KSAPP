// NavBar.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShopIcon from "../components/icons/ShopIcon";
import DownIcon from "../components/icons/DownIcon";
import LogoKsa from "../assets/svg/LogoKsa";

export default function NavBar() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View style={styles.containerNavbar}>
      <View style={styles.row}>
        <View style={styles.logoAndLogin}>
          <LogoKsa style={{ width: 50, height: 50, marginRight: 10 }} />
          <Pressable
            onPress={() =>
              navigation.navigate("AuthStack", { screen: "SignInScreen" })
            }
            style={({ pressed }) => [
              {
                ...(Platform.OS === "web" && { cursor: "pointer" }),
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <Text style={styles.loginText}>¡HOLA!</Text>
            <Text style={styles.loginText}>Inicia sesión</Text>
          </Pressable>
          <DownIcon />
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("ServicesStack", { screen: "CartScreen" })
          }
        >
          <ShopIcon />
        </Pressable>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Buscar servicios..."
          value={text}
          onChangeText={setText}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNavbar: {
    minHeight: 60,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 0.5,
  },
  logoAndLogin: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontWeight: "800",
  },
  searchBar: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputSearch: {
    flex: 1,
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
});
