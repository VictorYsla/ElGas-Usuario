import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import { RFPercentage } from "react-native-responsive-fontsize";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import { colores } from "../../constantes/Temas";
import PlusFloatingButton from "../../components/PlusFloatingButton";
const initialValues = { name: "", dni: "", address: "", dniType: "C.I" };

const MyInformation = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Item
          icon={() => <OutlineUserIcon width={wp(6)} height={hp(4)} />}
          title="Manolo Romero"
          mTop={5}
        />
      </View>
      <PlusFloatingButton />
    </View>
  );
};

const Item = ({ icon = () => {}, title = "Titulo", style, mTop = 1 }) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: wp(85),
        height: hp(10),
        marginTop: hp(mTop),
      }}
    >
      <View style={{ justifyContent: "center", flex: 1 }}>{icon()}</View>
      <View style={{ justifyContent: "center", flex: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: RFPercentage(2.1) }}>
          {title}
        </Text>
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ChevronRightIcon width={wp(5)} height={hp(3)} />
      </View>
    </TouchableOpacity>
  );
};
export default MyInformation;
