import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import LogoKsa from "../assets/svg/LogoKsa";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <LogoKsa width={180} height={90} />
      </View>

      <TextInput
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#777"
      />

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

      <TextInput
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor="#777"
      />
      <Text style={styles.motivationalText}>
        Tu hogar merece lo mejor. Estamos aquí para ayudarte a hacerlo realidad.
      </Text>
      <Pressable style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </Pressable>

      <Pressable
        style={styles.loginRedirect}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        <Text style={styles.loginRedirectText}>
          ¿Ya tienes cuenta? Inicia sesión
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  logoContainer: {
    marginBottom: 30,
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
  registerButton: {
    backgroundColor: "#2563EB", // verde moderno
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  loginRedirect: {
    marginTop: 20,
  },
  loginRedirectText: {
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
  },
});
