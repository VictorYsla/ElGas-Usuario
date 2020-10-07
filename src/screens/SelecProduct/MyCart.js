import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import useForm from "../../hooks/useForm";
import EditQuantityButtons from "../../components/EditQuantityButtons";
import CancelIcon from "../../components/Icons/CancelIcon";
import { connect, useSelector } from "react-redux";
import { actions } from "../../redux/index";
import ItemCart from "../../components/ItemsList/ItemCart";
import CustomButton from "../../components/CustomButton";
import { postCollection } from "../../apis/querys";
import * as Notifications from "expo-notifications";
import { registerForPushNotificationsAsync } from "../../functions/Notificaciones";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const initialValues = { city: "", address: "", addressDetails: "" };

const MyCart = ({ cart, total, navigation }) => {
  const form = useForm({ initialValues });
  const localData = {
    capacity: 15,
    unity: "kg",
    price: 1.6,
    name: "Gas",
    description: "Cilindro de gas de 15Kg para el hogar.",
  };
  const localCartData = {
    total: 4.8,
    subTotal: 2.8,
    delivery: 2,
  };
  console.log("Dta in MyCart: ", cart, total);

  const login = useSelector((state) => state.login.login);

  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  const onSubmit = () => {
    // console.log("MyCart", {
    //   products: cart,
    //   orderStatus: "Solicitado",
    //   userNotificationToken: expoPushToken,
    //   total,
    // });
    const payload = {
      products: cart,
      orderStatus: "Solicitado",
      id_driver: "",
      user_id: login.uid,
      userNotificationToken: expoPushToken,
      total,
    };
    postCollection("plant_pedidos_en_camino", payload);
  };

  const orderTotal =
    parseFloat(total.toFixed(2)) +
    parseFloat(localCartData.delivery.toFixed(2));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      }}
    >
      <BasicHeader
        title='Mi Carrito'
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={[{ backgroundColor: colores.grisClaro, width: "100%" }]}>
        <Text
          style={{
            textAlign: "center",
            fontSize: RFPercentage(2.6),
            marginTop: hp(1),
            fontWeight: "900",
          }}
        >
          TOTAL:
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            ${cart.length === 0 ? total.toFixed(2) : orderTotal.toFixed(2)}
          </Text>
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: RFPercentage(2),
            marginTop: hp(1),
          }}
        >
          Subtotal: ${total.toFixed(2)}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: RFPercentage(2),
            marginBottom: hp(1),
          }}
        >
          A domicilio: ${localCartData.delivery.toFixed(2)}
        </Text>
      </View>
      <View style={[{ height: "60%", width: "100%", alignItems: "center" }]}>
        {cart.length === 0 ? (
          <View
            style={[
              { flex: 1, justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[{ fontSize: RFPercentage(2) }]}>
              No hay productos añadidos. Comienza a agregar!
            </Text>

            <View
              style={[
                {
                  width: 150,
                  height: 40,
                  marginVertical: 20,
                },
              ]}
            >
              <CustomButton onPress={() => navigation.goBack()}>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.4) }]}
                >
                  COMPRAR
                </Text>
              </CustomButton>
            </View>
          </View>
        ) : (
          <>
            <ScrollView>
              {cart.map((value, index) => {
                const {
                  product: {
                    name,
                    photo_url,
                    description: { capacity, unity },
                    price,
                  },
                } = value;
                return (
                  <ItemCart
                    key={index}
                    image={photo_url}
                    capacity={capacity}
                    index={index}
                    price={price}
                    item={value}
                    unity={unity}
                    name={name}
                  />
                );
              })}
            </ScrollView>
            <View
              style={[
                {
                  width: 150,
                  height: 40,
                  marginVertical: 20,
                },
              ]}
            >
              <CustomButton onPress={onSubmit}>
                <Text
                  style={[{ fontWeight: "bold", fontSize: RFPercentage(2.4) }]}
                >
                  CONTINUAR
                </Text>
              </CustomButton>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  login: state.login.login,
  cart: state.cart.Cart.cart,
  total: state.cart.Cart.totalPrice,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editCart: (index, element, sum) => {
      dispatch(actions.UpdateCart.EditQtyCart(index, element, sum));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
