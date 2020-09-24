import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import Container from "../../generales/Container";
import CustomButton from "../../components/CustomButton";
import RegisterIcon from "../../components/Icons/RegisterIcon";

const Registrarse = (props) => {
  return (
    <Container footer={false} styleContainer={styles.screen}>
      <View style={styles.imageContainer}>
        <RegisterIcon height="100%" width="100%" />
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 22 }}>Registrarse</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TextInput style={styles.input} placeholder="Teléfono" />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton>
          <Text style={styles.buttonLabel}>Registrarse</Text>
        </CustomButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    marginVertical: 5,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  form: {
    width: "70%",
    marginVertical: 40,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  buttonContainer: {
    width: 150,
    height: 40,
  },

  buttonLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default Registrarse;
