import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
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

import { colores } from "../../constantes/Temas";
import PlusFloatingButton from "../../components/PlusFloatingButton";
import { actions } from "../../redux";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { useFocusEffect } from "@react-navigation/native";
import { getCollection } from "../../apis/querys";

const MyFactuData = ({
  dispatch,
  prePedido,
  user,
  navigation,
  miCuenta = false,
}) => {
  useFocusEffect(
    React.useCallback(() => {
      getCollection("plant_usuarios").then((response) => {
        const foundUser = response.filter((us) => us.uid === user.uid);
        dispatch(actions.setUser(foundUser[0]));
      });
    }, [])
  );

  console.log("MyAdress", user);

  return (
    <View style={{ flex: 1 }}>
      {/* <BasicHeader
        title="Datos de facturación"
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
      /> */}
      <FlatList
        data={user.facturacion ? user.facturacion : []}
        renderItem={(item) => (
          <Item
            item={item}
            icon={() => <OutlineUserIcon width={wp(6)} height={hp(4)} />}
            prePedido={prePedido}
            elegir={() => {
              dispatch(
                actions.actualizarPrePedido({
                  ...prePedido,
                  facturacion: item.item,
                })
              );
              !miCuenta && navigation.goBack();
            }}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
      <PlusFloatingButton onPress={() => navigation.navigate("FactuForm")} />
    </View>
  );
};

const Empty = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 300,
      }}
    >
      <Text>Aún no agregaste una dirección</Text>
    </View>
  );
};

const Item = ({ icon = () => <View />, item, style, elegir, prePedido }) => {
  return (
    <TouchableOpacity
      onPress={elegir}
      style={{
        height: 80,
        width: "100%",
        paddingHorizontal: "10%",
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderColor: "rgba(52,52,52,0.5)",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        // borderRadius: 10,
        backgroundColor:
          prePedido.facturacion.nombre == item.item.nombre
            ? "rgba(52,52,52,0.1)"
            : "white",
      }}
    >
      <View style={{ justifyContent: "center", flex: 1 }}>{icon()}</View>
      <View style={{ justifyContent: "center", flex: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: RFPercentage(2.1) }}>
          {item.item.nombre}
        </Text>
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ChevronRightIcon width={wp(5)} height={hp(3)} />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  prePedido: state.prePedido.prePedido,
});

export default connect(mapStateToProps)(MyFactuData);
