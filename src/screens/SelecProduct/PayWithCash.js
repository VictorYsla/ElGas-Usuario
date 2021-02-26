import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

import Container from "../../generales/Container";
import CustomButton from "../../components/CustomButton";
import QuestionIcon from "../../components/Icons/QuestionIcon";
import { sendPassword } from "../../apis/querys";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";

const PayWithCash = (props) => {
  const [monto, setMonto] = useState("");
  const [loading, setloading] = useState(false);

  const handleNavigateOrderDetails = () => {
    props.navigation.navigate("OrderDetails", { payWith: parseFloat(monto) });
  };

  return (
    <Container styleContainer={styles.screen} footer={false}>
      <Image
        style={{
          width: 80,
          height: 25,
          resizeMode: "contain",
          marginTop: 8,
          marginBottom: 8,
        }}
        source={require("../../imagenes/efectivo.png")}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Ingrese el monto
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Monto"
          onChangeText={setMonto}
          keyboardType={"numeric"}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={loading}
          onPress={() => {
            handleNavigateOrderDetails();
          }}
        >
          <Text style={styles.buttonLabel}>Continuar</Text>
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

export default PayWithCash;
