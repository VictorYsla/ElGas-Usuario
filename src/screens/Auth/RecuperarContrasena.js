import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Container from "../../generales/Container";
import CustomButton from "../../components/CustomButton";

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
        <CustomButton>
          <Text style={styles.buttonLabel}>ENVIAR MAIL</Text>
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

  buttonLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default RecuperarContrasena;
