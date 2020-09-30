import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
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
import PlusFloatingButton from "../../components/PlusFloatingButton";
import useForm from "../../hooks/useForm";
import CancelIcon from "../../components/Icons/CancelIcon";
import FilledUserIcon from "../../components/Icons/FilledUserIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
const initialValues = { city: "", address: "", addressDetails: "" };

const AddressDeliveryForm = ({}) => {
  return (
    <Container>
      <BasicHeader title="Direccion de entrega" />
      <View
        style={{
          marginTop: hp(5),
          justifyContent: "space-between",
          marginHorizontal: wp(10),
        }}
      >
        <View
          style={[
            {
              flexDirection: "row",
              width: "100%",
              marginVertical: 10,
              alignItems: "center",
            },
          ]}
        >
          <View style={[{ width: "20%" }]}>
            <FilledUserIcon width={20} height={20} />
          </View>
          <View style={[{ width: "80%" }]}>
            <Text>Consumidor final</Text>
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              width: "100%",
              marginVertical: 10,
              alignItems: "center",
            },
          ]}
        >
          <View style={[{ width: "20%" }]}>
            <OutlineUserIcon width={20} height={20} />
          </View>
          <View style={[{ width: "70%" }]}>
            <Text>Silvester Stalone</Text>
          </View>
          <View style={[{ width: "20%" }]}>
            <ChevronRightIcon width={15} height={15} />
          </View>
        </View>
      </View>
      <PlusFloatingButton />
    </Container>
  );
};

export default AddressDeliveryForm;
