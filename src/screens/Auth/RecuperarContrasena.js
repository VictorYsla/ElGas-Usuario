import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Container from "../../generales/Container";
import CustomButton from "../../components/CustomButton";
import QuestionIcon from "../../components/Icons/QuestionIcon";
import { sendPassword } from "../../apis/querys";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";

const RecuperarContrasena = (props) => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState({ error: false, mensaje: "" });

  return (
    <Container styleContainer={styles.screen} footer={false}>
      <View style={styles.imageContainer}>
        <QuestionIcon width="100%" height="100%" />
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
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setemail}
        />
        {result.error && (
          <Text
            style={{
              alignSelf: "center",
              fontSize: RFPercentage(1.8),
              color: colores.amarillo,
              marginTop: 5,
            }}
          >
            {"Email no registrado"}
          </Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={loading}
          onPress={() => {
            setloading(true);
            sendPassword(email).then((r) => {
              // console.log("RecuperarContraseña", r);
              setloading(false);
              setresult(r);

              !r.error && alert("Por favor revise su bandeja de entrada");
              !r.error && props.navigation.navigate("Login");
            });
          }}
        >
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
    marginTop: 10,
    textAlign: "center",
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
