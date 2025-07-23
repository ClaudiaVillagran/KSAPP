import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import LogoKsa from "../assets/svg/LogoKsa";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <LogoKsa width={180} height={90} />
      </View>
      <Text style={styles.motivationalText}>
        Inicia sesión y accede a más de 300 servicios para tu hogar, en un solo
        lugar.
      </Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        placeholderTextColor="#777"
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor="#777"
      />

      <Pressable
        style={styles.loginButton}
        onPress={() => navigation.navigate("PrincipalTabs")}
      >
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      <Pressable
        style={styles.registerButton}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6", // color claro de fondo
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#2563EB", // azul fuerte
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerButton: {
    marginTop: 15,
  },
  registerButtonText: {
    color: "#2563EB",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  motivationalText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 50,
  },
});
