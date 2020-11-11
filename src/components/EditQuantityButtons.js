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
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { colores, pantalla } from "../constantes/Temas";
import { actions } from "../redux";

const EditQuantityButtons = ({ cart, item, dispatch }) => {
  const setCantidad = (valor) => {
    let newCart = cart;
    newCart[item.index] = {
      ...item.item,
      quantity: item.item.quantity + valor,
    };
    dispatch(actions.UpdateCart.actualizarCarro([...newCart]));
  };

  // console.log("EditQuantityButtons item", item);
  // console.log("EditQuantityButtons cart", cart);

  return (
    <View
      style={{
        width: wp(22),
        marginLeft: 10,
        marginRight: 10,
        height: hp(5),
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => item.item.quantity > 1 && setCantidad(-1)}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: colores.bgOscuro,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: RFPercentage(3),
            textAlignVertical: "center",
            marginBottom: wp(0.9),
          }}
        >
          -
        </Text>
      </TouchableOpacity>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            color: "#000",
            fontSize: RFPercentage(2.6),
            marginHorizontal: 10,
          }}
        >
          {item.item.quantity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setCantidad(1)}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: colores.bgOscuro,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: RFPercentage(3),
            textAlignVertical: "center",
            marginBottom: wp(0.9),
          }}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(EditQuantityButtons);
