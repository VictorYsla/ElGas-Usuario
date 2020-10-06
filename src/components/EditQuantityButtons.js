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
import { colores, pantalla } from "../constantes/Temas";

const EditQuantityButtons = ({
  quantity = 1,
  editQty = () => {},
  mlef = 0,
  mRigth = 0,
}) => {
  const { screenHeight } = pantalla;

  return (
    <View
      style={{
        width: wp(22),
        marginLeft: wp(mlef),
        marginRight: wp(mRigth),
        height: hp(5),
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => editQty(-1)}
        style={{
          width: screenHeight <= 592 ? 20 : 30,
          height: screenHeight <= 592 ? 20 : 30,
          borderRadius: screenHeight <= 592 ? 10 : 15,
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
          {quantity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => editQty(1)}
        style={{
          width: screenHeight <= 592 ? 20 : 30,
          height: screenHeight <= 592 ? 20 : 30,
          borderRadius: screenHeight <= 592 ? 10 : 15,
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

export default EditQuantityButtons;
