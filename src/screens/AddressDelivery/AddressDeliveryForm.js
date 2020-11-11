import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
//importaciones necesarias para redux//
import { connect } from "react-redux";
import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TextInputBottomBorder from "../../components/TextInput/TextInputBottomBorder";
import useForm from "../../hooks/useForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MapView, { Marker } from "react-native-maps";
import MarkerIcon from "../../components/Icons/Marker";
import CancelIcon from "../../components/Icons/CancelIcon";
import * as Location from "expo-location";
import { updateCollectionArray } from "../../apis/querys";
const initialValues = { city: "", address: "", addressDetails: "" };

const AddressDeliveryForm = ({ user, navigation }) => {
  const form = useForm({ initialValues });

  const [tipo, settipo] = useState("Domicilio");
  const [loading, setloading] = useState(false);

  const [location, setLocation] = useState({
    latitude: 74.0,
    longitude: -4.0,
  });

  useEffect(() => {
    GetCurrentLocation();
  }, []);

  async function GetCurrentLocation() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({});

    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  const agregarDireccion = () => {
    setloading(true);
    updateCollectionArray("plant_usuarios", user.id, "direcciones", {
      location: location,
      tipo: tipo,
      ...form.fields,
    }).then((r) => {
      setloading(false);

      r
        ? navigation.goBack()
        : alert("Sucedió un error desconocido, lo sentimos!");
    });
  };

  //   console.log("AddressDeliveryForm", form);

  return (
    <Container isloading={loading}>
      <BasicHeader title="Direccion de entrega" icon={() => <CancelIcon />} />
      <View
        style={{
          marginTop: hp(5),
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: wp(12),
        }}
      >
        <CustomButton tipo={tipo} settipo={settipo} title="Domicilio" />
        <CustomButton tipo={tipo} settipo={settipo} title="Oficina" />
        <CustomButton tipo={tipo} settipo={settipo} title="Otro" />
      </View>
      <View style={{ marginTop: hp(2) }}>
        <KeyboardAwareScrollView>
          <TextInputBottomBorder form={form.getInput("city")} title="Ciudad" />
          <TextInputBottomBorder
            form={form.getInput("address")}
            title="Dirección completa y numeración"
          />
          <TextInputBottomBorder
            form={form.getInput("addressDetails")}
            title="Edificio/torre/departamento"
          />
        </KeyboardAwareScrollView>
      </View>
      <View style={{ flex: 1, marginTop: hp(5), justifyContent: "center" }}>
        <MapView
          style={{ flex: 1 }}
          onRegionChangeComplete={setLocation}
          initialRegion={{
            ...location,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          showsMyLocationButton
          showsUserLocation
        ></MapView>
        <View
          style={{
            position: "absolute",
            // backgroundColor: "red",
            alignSelf: "center",

            width: 50,
            height: 100,
            paddingBottom: 60,
          }}
        >
          <MarkerIcon />
        </View>
        <TouchableOpacity
          onPress={agregarDireccion}
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
            width: "60%",
            backgroundColor: colores.bgOscuro,
            height: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: RFPercentage(2.2),
              fontWeight: "bold",
            }}
          >
            Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const CustomButton = ({
  image = () => <CancelIcon width={wp(10)} height={hp(5)} />,
  title = "tittle",
  press,
  tipo,
  settipo,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        settipo(title);
      }}
      style={{
        justifyContent: "center",
        width: wp(20),
        backgroundColor: tipo == title ? colores.amarillo : "white",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
      }}
    >
      {/* <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} /> */}
      {image()}
      <Text style={{ fontSize: RFPercentage(2), textAlign: "center" }}>
        {title}{" "}
      </Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(AddressDeliveryForm);
