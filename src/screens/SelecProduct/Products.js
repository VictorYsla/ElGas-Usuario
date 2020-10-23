import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";
import ElGasLogo from "../../components/Icons/ElGasLogo";
import BasketIcon from "../../components/Icons/BasketIcon";
import SearchIcon from "../../components/Icons/SearchIcon";
import ChevronLeftIcon from "../../components/Icons/ChevronLeftIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import { colores, pantalla } from "../../constantes/Temas";
import { getCollection } from "../../apis/querys";
import { actions } from "../../redux";
import { registerForPushNotificationsAsync } from "../../functions/Notificaciones";



const Product = (props) => {
  const dispatch = useDispatch();
  const routeName = props.route.name;
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const actualizarRuta = (ruta) =>
      dispatch(actions.actualizarUbicacion(ruta));
    actualizarRuta(routeName);

    setLoading(true);
    const getProducts = async () =>
      await getCollection("plant_productos").then((response) =>
        dispatch(actions.fetchProducts(response))
      );

    getProducts().then(() => setLoading(false));

    registerForPushNotificationsAsync().then((token) =>
      dispatch(actions.setPushToken(token))
    );
  }, []);

  const navigation = useNavigation();

  const CenterComponet = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        <ElGasLogo width={wp(10)} height={hp(5)} />
      </View>
    );
  };
  if (useIsFocused()) {
    var items = cart.length;
  }


  const RightComponent = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyCart")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: colores.amarillo,
              width: wp(3.5),
              height: hp(1.9),
              top: 2,
              left: 15,
              borderRadius: wp(100),
              justifyContent: "center",
              position: "absolute",
              zIndex: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: RFPercentage(1.5),
                fontWeight: "bold",
              }}
            >
              {items}
            </Text>
          </View>
          <BasketIcon width={wp(7.5)} height={hp(3.5)} />
        </TouchableOpacity>
      </>
    );
  };


  return (
    <Container>
      <BasicHeader
        title='Direccion de entrega'
        icon={() => <SearchIcon width={wp(7)} height={hp(5)} />}
        centerComponent={() => CenterComponet()}
        rigthComponent={() => RightComponent()}
      />
      <ScrollView
        style={{ height: "100%", width: "100%" }}
        contentContainerStyle={[{ paddingVertical: 10 }]}
      >
        <View style={{ marginTop: hp(5) }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(3),
              fontWeight: "bold",
            }}
          >
            ¡Hola!
          </Text>
          <Text style={{ textAlign: "center", fontSize: RFPercentage(2.5) }}>
            ¿Qué deseas comprar hoy?
          </Text>
        </View>
        <View style={{ marginTop: hp(5) }}>
          <ImageCarrousel />
        </View>
        <View style={{ flex: 1, marginTop: hp(5) }}>
          <View
            style={{
              backgroundColor: "#eee",
              width: wp(100),
              height: hp(5),
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: RFPercentage(2.5),
                fontWeight: "bold",
              }}
            >
              Cilindros de gas
            </Text>
          </View>
          <View style={{ marginTop: hp(2) }}>
            {loading ? (
              <View
                style={[{ width: "100%", height: 50, alignItems: "center" }]}
              >
                <ActivityIndicator size='large' color={colores.amarillo} />
              </View>
            ) : (
                <ScrollView horizontal style={{ alignSelf: "center" }}>
                  {products
                    .filter((value) => value.category.name === "Cilindro")
                    .map((value, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("ProductInfo", { item: value })
                          }
                          key={index}
                          style={{ marginLeft: wp(index > 0 ? 5 : 0) }}
                        >
                          <Image
                            source={{ uri: value.product.photo_url }}
                            style={{ width: wp(10), height: hp(10) }}
                            resizeMode='contain'
                          />
                          <Text
                            style={{
                              textAlign: "center",
                              fontSize: wp(3.3),
                              marginTop: hp(0.3),
                              fontWeight: "bold",
                            }}
                          >
                            {value.product.description.capacity}
                            {value.product.description.unity}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              )}
          </View>
          <View
            style={{
              backgroundColor: "#eee",
              width: wp(100),
              height: hp(5),
              justifyContent: "center",
              marginTop: hp(1),
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: RFPercentage(2.5),
                fontWeight: "bold",
              }}
            >
              Accesorios
            </Text>
          </View>
          <View style={{ marginTop: hp(2) }}>
            {loading ? (
              <View
                style={[{ width: "100%", height: 50, alignItems: "center" }]}
              >
                <ActivityIndicator size='large' color={colores.amarillo} />
              </View>
            ) : (
                <ScrollView horizontal style={{ alignSelf: "center" }}>
                  {products
                    .filter((value) => value.category.name === "Accesorio")
                    .map((value, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("ProductInfo", { item: value })
                          }
                          key={index}
                          style={{
                            marginLeft: wp(index > 0 ? 5 : 0),
                          }}
                        >
                          <Image
                            source={{ uri: value.product.photo_url }}
                            style={{
                              width:
                                pantalla.screenHeight <= 592 ? wp(15) : wp(18),
                              height: hp(8),
                            }}
                            resizeMode='cover'
                          />

                          <Text
                            style={{
                              textAlign: "center",
                              fontSize: wp(3.3),
                              marginTop: hp(0.3),
                              fontWeight: "bold",
                            }}
                          >
                            {value.product.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                </ScrollView>
              )}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const ImageCarrousel = ({ image = "", title = "tittle", press }) => {
  return (
    <TouchableOpacity style={{ justifyContent: "center", width: wp(18) }}>
      <ImageBackground
        source={{
          uri:
            "https://firebasestorage.googleapis.com/v0/b/elgas-68c82.appspot.com/o/carrousel-1.png?alt=media&token=546634ff-2dc3-4b79-a34a-550244de854d",
        }}
        style={{
          width: wp(100),
          height: hp(22),
          justifyContent: "center",
          backgroundColor: "#777",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: wp(5),
          }}
        >
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <ChevronLeftIcon width={wp(6)} height={hp(3)} />
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <ChevronRightIcon width={wp(6)} height={hp(3)} color='#fff' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  {
    /* <Image source={image} style={{overlayColor:'#000', tintColor:'#000', width:wp(10), height:hp(5), alignSelf:'center'}} />
    <Text style={{fontSize:RFPercentage(2), textAlign:'center'}} >{title} </Text> */
  }
};

export default Product;