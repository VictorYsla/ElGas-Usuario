import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Container from "../../generales/Container";
import useForm from "../../hooks/useForm";
import { ValidateForm } from "../../functions/ValidateForm";
import { postCollection, singUp } from "../../apis/querys";
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
const Registrarse = ({ dispatch, navigation }) => {
  const [loading, setloading] = useState(true);

  const form = useForm({ initialValues });
  const register = () => {
    setloading(true);
    console.log("Press", ValidateForm(form));
    const { name, email, password, phone } = form.fields;
    if (ValidateForm(form)) {
      singUp(email, name, password, phone).then((resp) => {
        if (resp.type !== "error") {
          postCollection("plant_usuarios", {
            ...resp.value,
            phoneNumber: phone,
          });
          dispatch(actions.setUser({ ...resp.value, phoneNumber: phone }));
          dispatch(actions.actualizarLogin({ ...resp.value, isLogged: true }));
          setloading(false);
        }
      });
    } else {
      setloading(false);
      Alert.alert("Todos los campos son obligatorios");
    }
  };

  return (
    <Container
      isloading={loading}
      footer={false}
      styleContainer={styles.screen}
    >
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
