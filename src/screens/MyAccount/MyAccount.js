import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colores } from "../../constantes/Temas";
import MyInformation from "./MyInformation";
import MyFactudata from "../Facturaciones/MyFactudata";
import MyAddress from "./MyAddress";

const MyAccount = ({ navigation }) => {
  const [current, setCurrent] = useState("MyInformation");
  return (
    <Container>
      <BasicHeader title="Mi cuenta" />
      <View
        style={{
          backgroundColor: colores.bgOscuro,
          width: wp(100),
          height: hp(5),
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => setCurrent("MyInformation")}
          style={{
            borderBottomColor:
              current === "MyInformation" ? colores.amarillo : colores.bgOscuro,
            borderBottomWidth: 2,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: current === "MyInformation" ? colores.amarillo : "#fff",
              fontSize: hp(2),
              fontWeight: current === "MyInformation" ? "bold" : "100",
              textAlign: "center",
            }}
          >
            Mi informacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent("MyAddresses")}
          style={{
            borderBottomColor:
              current === "MyAddresses" ? colores.amarillo : colores.bgOscuro,
            borderBottomWidth: 2,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: current === "MyAddresses" ? colores.amarillo : "#fff",
              fontSize: hp(2),
              fontWeight: current === "MyAddresses" ? "bold" : "100",
              textAlign: "center",
            }}
          >
            Mis direcciones
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrent("MyFacturData")}
          style={{
            borderBottomColor:
              current === "MyFacturData" ? colores.amarillo : colores.bgOscuro,
            borderBottomWidth: 2,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: current === "MyFacturData" ? colores.amarillo : "#fff",
              fontSize: hp(2),
              fontWeight: current === "MyFacturData" ? "bold" : "100",
              textAlign: "center",
              textAlignVertical: "top",
            }}
          >
            Mis datos de facturación
          </Text>
        </TouchableOpacity>
      </View>
      {current === "MyInformation" ? (
        <MyInformation navigation={navigation} miCuenta={true} />
      ) : current === "MyFacturData" ? (
        <MyFactudata navigation={navigation} miCuenta={true} />
      ) : (
        <MyAddress navigation={navigation} miCuenta={true} />
      )}
    </Container>
  );
};

export default MyAccount;
