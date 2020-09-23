import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { colores } from "../../constantes/Temas";
import Container from "../../generales/Container";

const Button = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View
      style={[
        {
          height: 40,
          width: "75%",
          borderRadius: 30,
          borderWidth: 1,
          overflow:
            Platform.OS === "android" && Platform.Version >= 21
              ? "hidden"
              : "visible",
          backgroundColor: props.color,
          borderColor: "transparent",
        },
        props.style,
      ]}
    >
      <TouchableComponent onPress={() => {}} activeOpacity={0.6}>
        <View
          style={
            !props.horizontal
              ? {
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }
          }
        >
          {props.children}
        </View>
      </TouchableComponent>
    </View>
  );
};

const PantallaLogin = (props) => {
  return (
    <Container styleContainer={styles.screen} footer={false}>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/img/logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.textoBienvenido}>Bienvenido</Text>

      <View style={styles.controles}>
        <View
          style={{
            height: 60,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 14,
              width: 25,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/img/envelop.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={[
              {
                width: "80%",
                height: "60%",
                color: "#FFFFFF",
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                marginLeft: 5,
                marginBottom: 5,
                fontSize: RFPercentage(2.2),
              },
            ]}
            placeholder="E-mail"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 60,
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/img/lock.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={[
              {
                width: "80%",
                height: "60%",
                color: "#FFFFFF",
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
                marginLeft: 5,
                fontSize: RFPercentage(2.2),
              },
            ]}
            placeholder="Password"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.contenedor}>
        <Button color="#fff" style={{ marginBottom: 10 }}>
          <Text style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            Ingresar
          </Text>
        </Button>
        <Button color="#227BC4" horizontal>
          <View
            style={{
              width: "10%",
              height: "100%",
              marginLeft: 25,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/img/fblogo.png")}
              style={{ height: "40%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={{ width: "90%", marginLeft: 5 }}>
            <Text style={{ fontSize: RFPercentage(2.2), color: "#fff" }}>
              Continuar con Facebook
            </Text>
          </View>
        </Button>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ marginVertical: 10 }}
            onPress={() => props.navigation.navigate("Registrarse")}
          >
            <Text style={{ color: "#fff" }}>
              ¿No tienes una cuenta? Créala aquí
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.navigate("RecuperarContrasena")}
          >
            <Text style={{ color: "#fff" }}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colores.bgOscuro,
  },
  logo: {
    width: "100%",
    height: "20%",
    marginTop: 50,
  },
  textoBienvenido: {
    fontSize: RFPercentage(3),
    color: "#fff",
  },
  controles: {
    width: "90%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
  },

  contenedor: {
    height: "30%",
    width: "90%",
    alignItems: "center",
  },
});
export default PantallaLogin;