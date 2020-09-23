import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import Container from "../../generales/Container";

const RecuperarContrasena = (props) => {
  return (
    <Container styleContainer={styles.screen} footer={false}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/img/question.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>
          ¿Olvidó su clave?
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginTop: 10 }}>
          Ingrese el correo que usted usó para crear su cuenta y le enviaremos
          un link para resetear su clave
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>

      <View style={styles.buttonContainer}>
        <BotonRegistrar>
          <Text style={styles.buttonLabel}>ENVIAR MAIL</Text>
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
    marginTop: 40,
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

export default RecuperarContrasena;
