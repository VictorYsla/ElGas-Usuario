import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import PlusFloatingButton from "../../components/PlusFloatingButton";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { getCollection } from "../../apis/querys";

import { useFocusEffect } from "@react-navigation/native";
import { actions } from "../../redux";
import CancelIcon from "../../components/Icons/CancelIcon";

function MyAddress({ user, prePedido, dispatch, navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      const userData = getCollection("plant_usuarios").then((response) => {
        const foundUser = response.filter((us) => us.uid === user.uid);
        dispatch(actions.setUser(foundUser[0]));
      });
    }, [])
  );

  // console.log("MyAdress", navigation);

  return (
    <View style={{ width: "100%", flex: 1, justifyContent: "center" }}>
      <FlatList
        data={user.direcciones ? user.direcciones : []}
        renderItem={(item) => (
          <Item
            item={item}
            prePedido={prePedido}
            elegir={() => {
              dispatch(actions.actualizarPrePedido(item.item));
              navigation.goBack();
            }}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
      <PlusFloatingButton
        onPress={() => {
          navigation.navigate("AddressDeliveryForm");
        }}
      />
    </View>
  );
}

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

const Item = ({
  item,
  elegir,
  prePedido,
  image = () => <CancelIcon width={wp(10)} height={hp(5)} />,
}) => {
  console.log("MyAddress", item);

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
          prePedido.address == item.item.address
            ? "rgba(52,52,52,0.1)"
            : "white",
      }}
    >
      {image()}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: RFPercentage(2.3) }}>
          {item.item.address}
        </Text>
        <Text>{item.item.addressDetails}</Text>
      </View>

      <View style={{ justifyContent: "center" }}>
        <ChevronRightIcon width={wp(4)} height={hp(2.5)} />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  prePedido: state.prePedido.prePedido,
});

export default connect(mapStateToProps)(MyAddress);
