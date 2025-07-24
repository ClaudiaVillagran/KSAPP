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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControllerTextInput from "../components/inputs/ControllerTextInput";
import { Ionicons } from "@expo/vector-icons"; // Importar los íconos

const schema = yup
  .object({
    Email: yup
      .string()
      .required("El correo electrónico es obligatorio")
      .email("Correo invalido"),
    Password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    ConfirmPassword: yup
      .string()
      .required("Debes confirmar la contraseña")
      .oneOf([yup.ref("Password"), null], "Las contraseñas no coinciden"), // Validación para que coincidan
  })
  .required();

export default function SignInScreen() {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para la confirmación

  const saveLog = (formData) => {
    console.log(formData);
    navigation.navigate("PrincipalTabs");
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
        name="Email"
        placeholder="Correo electrónico *"
        keyboardType="email-address"
        rules={{
          required: "Este campo es obligatorio",
        }}
      />
      <View style={styles.passwordContainer}>
        <ControllerTextInput
          control={control}
          name="Password"
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
      <View style={styles.passwordContainer}>
        <ControllerTextInput
          control={control}
          name="ConfirmPassword"
          placeholder="Confirmar Contraseña *"
          secureTextEntry={!showConfirmPassword} // Alternar visibilidad
          rules={{
            required: "Este campo es obligatorio",
          }}
        />
        <Pressable
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.eyeIconContainer}
        >
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"} // Cambiar ícono
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
