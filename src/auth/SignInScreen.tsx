import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert, // Importar Alert para mostrar los mensajes
} from "react-native";
import React, { useState } from "react";
import LogoKsa from "../assets/svg/LogoKsa";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControllerTextInput from "../components/inputs/ControllerTextInput";
import { Ionicons } from "@expo/vector-icons"; // Importar los íconos
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const schema = yup
  .object({
    email: yup
      .string()
      .required("El correo electrónico es obligatorio")
      .email("Correo invalido"),
    password: yup.string().required("La contraseña es obligatoria"),
  })
  .required();

export default function SignInScreen() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  const saveLog = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      
      navigation.navigate("PrincipalTabs");
      console.log("usercredentials", userCredential);
    } catch (error) {
      let errorMessage = "";
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuario no encontrado";
      } else if (error.code === "auth/invalid-credential") {
        errorMessage = "Correo o contraseña incorrecta";
      } else {
        errorMessage = "Ocurrió un error al iniciar sesión";
      }

      // Usar Alert.alert para mostrar el mensaje de error
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <LogoKsa width={180} height={90} />
      </View>
      <Text style={styles.motivationalText}>
        Inicia sesión y accede a más de 300 servicios para tu hogar, en un solo
        lugar.
      </Text>
      <ControllerTextInput
        control={control}
        name="email"
        placeholder="Correo electrónico *"
        keyboardType="email-address"
        rules={{
          required: "Este campo es obligatorio",
        }}
      />
      <View style={styles.passwordContainer}>
        <ControllerTextInput
          control={control}
          name="password"
          placeholder="Contraseña *"
          secureTextEntry={!showPassword}
          rules={{
            required: "Este campo es obligatorio",
          }}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIconContainer}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"} // Cambiar ícono
            size={24}
            color="#2563EB"
          />
        </Pressable>
      </View>

      <Pressable style={styles.loginButton} onPress={handleSubmit(saveLog)}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </Pressable>

      <Pressable
        style={styles.registerButton}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </Pressable>

      {/* Botón para continuar sin iniciar sesión */}
      <Pressable
        style={styles.skipButton}
        onPress={() => navigation.navigate("PrincipalTabs")}
      >
        <Text style={styles.skipButtonText}>Continuar sin iniciar sesión</Text>
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
    marginTop: 20,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2563EB", // bordes azules
    backgroundColor: "transparent", // fondo transparente
    alignItems: "center",
  },
  registerButtonText: {
    color: "#2563EB",
    fontSize: 15,
  },
  skipButton: {
    marginTop: 15,
  },
  skipButtonText: {
    color: "#2563EB",
    fontSize: 15,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  motivationalText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
