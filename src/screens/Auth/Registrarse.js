import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import Container from "../../generales/Container";

const Registrarse = (props) => {
  return (
    <Container footer={false} styleContainer={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/img/user-logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
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
        <BotonRegistrar>
          <Text style={styles.buttonLabel}>Registrarse</Text>
        </BotonRegistrar>
      </View>
    </Container>
  );
};

const BotonRegistrar = ({ onPress, children }) => (
  <View style={styles.buttonWrapper}>
    <TouchableNativeFeedback onPress={() => onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableNativeFeedback>
  </View>
);

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
  buttonWrapper: { overflow: "hidden", borderRadius: 10 },
  button: {
    padding: 20,
    backgroundColor: "#F2F2F2",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default Registrarse;