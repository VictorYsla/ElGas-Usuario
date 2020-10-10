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
import { connect, useSelector } from "react-redux";
import { actions } from "../../redux/index";
import ItemCart from "../../components/ItemsList/ItemCart";
import CustomButton from "../../components/CustomButton";
import { postCollection } from "../../apis/querys";

const MyCart = ({ cart, total, navigation }) => {
  const localCartData = {
    delivery: 2,
  };

  const login = useSelector((state) => state.login.login);
  const expoPushToken = useSelector((state) => state.pushToken.pushToken);

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
      <View
        style={[
          {
            height: "70%",
            width: "100%",
            alignItems: "center",
            marginVertical: 20,
          },
        ]}
      >
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
  cart: state.cart.cart,
  total: state.cart.totalPrice,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editCart: (index, element, sum) => {
      dispatch(actions.UpdateCart.EditQtyCart(index, element, sum));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
