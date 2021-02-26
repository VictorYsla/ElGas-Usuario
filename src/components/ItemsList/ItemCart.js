import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EditQuantityButtons from "../EditQuantityButtons";
import CancelIcon from "../Icons/CancelIcon";
import { actions } from "../../redux/index";
import { connect } from "react-redux";

const Item = (props) => {
  const { name, item, cart, dispatch, navigation } = props;

  const { index } = item;
  const { product, quantity } = item.item;
  const { photo_url, price } = item.item.product;
  const { capacity, description, unity } = item.item.product.description;

  const deleteItem = () => {
    let newcart = cart.filter((c, index) => index !== item.index);
    dispatch(actions.UpdateCart.actualizarCarro([...newcart]));
  };

  console.log("item", item);

  return (
    <View
      key={index}
      style={{
        marginTop: hp(7),
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 5,
        borderBottomColor: "#F2F2F2",
        borderBottomWidth: 1,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: wp(2),
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={deleteItem}
          style={{ justifyContent: "center" }}
        >
          <CancelIcon width={wp(3)} height={hp(2)} />
        </TouchableOpacity>
        <Image
          source={{ uri: photo_url }}
          style={{ width: wp(17), height: hp(17), marginLeft: wp(3) }}
          resizeMode="center"
        />
        <View style={{ marginLeft: wp(5), justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: wp(4),
              marginTop: hp(0.3),
              fontWeight: "bold",
            }}
          >
            {name}
            {capacity}
            {unity}
          </Text>
          <EditQuantityButtons
            //  editQty={editQty}
            item={item}
            quantity={quantity}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: wp(7),
            marginTop: hp(0.3),
            fontWeight: "bold",
            textAlignVertical: "center",
            marginHorizontal: wp(7),
          }}
        >
          ${price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  login: state.login.login,
  cart: state.cart.cart,
  total: state.cart.totalPrice,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editCart: (index, element, sum) => {
//       dispatch(actions.UpdateCart.EditQtyCart(index, element, sum));
//     },
//     // deleteItemFronCart: (element) => {
//     //   dispatch(actions.UpdateCart.RemoveElement(element));
//     // },
//   };
// };

export default connect(mapStateToProps)(Item);
