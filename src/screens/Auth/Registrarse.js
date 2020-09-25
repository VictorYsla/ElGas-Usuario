import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import Container from "../../generales/Container";
import useForm from "../../hooks/useForm";
import { ValidateForm } from "../../functions/ValidateForm";
import { auth } from "../../apis/querys";
import { connect } from "react-redux";
import { actions } from "../../redux/index";
import CustomButton from "../../components/CustomButton";
import RegisterIcon from "../../components/Icons/RegisterIcon";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
const Registrarse = ({ dispatch }) => {
  const form = useForm({ initialValues });
  const [registerResponse, setRegisterResponse] = useState(null);
  const register = () => {
    console.log("Press", ValidateForm(form));
    const { name, email, password, phone } = form.fields;
    if (ValidateForm(form)) {
      console.log("Sii");
      auth(email, name, password, phone, setRegisterResponse);
    } else {
      Alert.alert("Todos los campos son obligatorios");
    }
  };
  useEffect(() => {
    console.log(form, registerResponse);
    if (registerResponse) {
      if (registerResponse.type === "sucess") {
        // console.log( 'values', registerResponse.value)
        // console.log('dis:', dispatch)
        dispatch(
          actions.actualizarLogin({ ...registerResponse.value, isLoged: true })
        );
      }
    }
  }, [registerResponse]);
  return (
    <Container footer={false} styleContainer={styles.screen}>
      <View style={styles.imageContainer}>
        <RegisterIcon height="100%" width="100%" />
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 22 }}>Registrarse</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          {...form.getInput("name")}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          {...form.getInput("email")}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          {...form.getInput("password")}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="number-pad"
          {...form.getInput("phone")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton onPress={register}>
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
const mapStateToProps = (state) => ({
  user: state.login.login?.userName,
  login: state.login.login,
});
export default connect(mapStateToProps)(Registrarse);
