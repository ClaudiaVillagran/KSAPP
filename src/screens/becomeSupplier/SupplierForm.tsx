import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from "react-native";

const SupplierForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    rut: "",
    companyName: "",
    businessType: "",
    address: "",
    number: "",
    department: "",
    city: "",
    region: "",
    commune: "",
    phone: "",
    email: "",
    yearsInBusiness: "",
    document: null,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Aquí podrías agregar validación y luego enviar el formulario
    onSubmit(formData);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>
        Ingrese a continuación los datos de tu empresa:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="RUT Empresa (Con guión y dígito verificador)"
        value={formData.rut}
        onChangeText={(text) => handleInputChange("rut", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre Empresa / Razón Social"
        value={formData.companyName}
        onChangeText={(text) => handleInputChange("companyName", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Giro comercial de la empresa"
        value={formData.businessType}
        onChangeText={(text) => handleInputChange("businessType", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección Comercial Calle / Avda / Otro"
        value={formData.address}
        onChangeText={(text) => handleInputChange("address", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="N° calle"
        value={formData.number}
        onChangeText={(text) => handleInputChange("number", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Depto. / Edificio"
        value={formData.department}
        onChangeText={(text) => handleInputChange("department", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={formData.city}
        onChangeText={(text) => handleInputChange("city", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Región (Casa matriz)"
        value={formData.region}
        onChangeText={(text) => handleInputChange("region", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Comuna (Casa matriz)"
        value={formData.commune}
        onChangeText={(text) => handleInputChange("commune", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono de contacto (+56)"
        value={formData.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Email de contacto"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        placeholderTextColor="#777"
      />
      <TextInput
        style={styles.input}
        placeholder="Años de antigüedad de la empresa (N°)"
        value={formData.yearsInBusiness}
        onChangeText={(text) => handleInputChange("yearsInBusiness", text)}
        placeholderTextColor="#777"
      />
      <Button
        title="Adjuntar documento"
        onPress={() => alert("Selecciona un archivo")}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Suscribirse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    paddingLeft: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SupplierForm;
