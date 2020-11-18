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
import MyAddress from "../MyAccount/MyAddress";
const initialValues = { city: "", address: "", addressDetails: "" };

const AddressDeliveryForm = ({ navigation }) => {
  return (
    <Container>
      <BasicHeader
        title="Direccion de entrega"
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <MyAddress navigation={navigation} />
    </Container>
  );
};

export default AddressDeliveryForm;
