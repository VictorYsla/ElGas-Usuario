import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BasicHeader from "../../components/Header/BasicHeader";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores, pantalla } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { connect, useDispatch } from "react-redux";
import { actions } from "../../redux/index";
import CustomButton from "../../components/CustomButton";
import { UpdateCart } from "../../redux/reducer/cart";

const ProductInfo = ({ route: { params }, navigation }) => {
  const { item } = params;

  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <BasicHeader
        title='Producto'
        onPressLeftIcon={() => navigation.goBack()}
      />
      <View style={{ marginTop: hp(5) }}>
        <TouchableOpacity style={{ marginLeft: wp(1), alignSelf: "center" }}>
          <Image
            source={{ uri: item.product.photo_url }}
            style={{ width: wp(25), height: hp(17) }}
            resizeMode='contain'
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: wp(3.3),
              marginTop: hp(0.3),
              fontWeight: "bold",
            }}
          >
            {item.product.description.capacity}
            {item.product.description.unity}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: wp(7),
              marginTop: hp(0.3),
              fontWeight: "bold",
            }}
          >
            ${item.product.price.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: hp(5) }}>
        <View
          style={{
            backgroundColor: "#F2F2F2",
            width: wp(100),
            height: hp(8),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              fontWeight: "bold",
            }}
          >
            Detalles del producto
          </Text>
        </View>
        <View
          style={{
            marginTop: hp(2),
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: wp(3.3),
              marginTop: hp(0.3),
              fontWeight: "bold",
            }}
          >
            Peso: {item.product.description.capacity}
            {item.product.description.unity}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: wp(3.3),
              marginTop: hp(0.3),
              fontWeight: "bold",
            }}
          >
            {item.product.description.description}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flex: 1,
          marginTop: 10,
          marginBottom: 20,
          height: 250,
        }}
      >
        <View
          style={{
            width: wp(22),
            marginLeft: wp(10),
            marginRight: wp(10),
            height: hp(5),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              setQuantity((prevState) => (prevState > 0 ? prevState - 1 : 0))
            }
            style={{
              width: pantalla.screenHeight <= 592 ? 20 : 30,
              height: pantalla.screenHeight <= 592 ? 20 : 30,
              borderRadius: pantalla.screenHeight <= 592 ? 10 : 15,
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
            onPress={() => setQuantity((prevState) => prevState + 1)}
            style={{
              width: pantalla.screenHeight <= 592 ? 20 : 30,
              height: pantalla.screenHeight <= 592 ? 20 : 30,
              borderRadius: pantalla.screenHeight <= 592 ? 10 : 15,
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

        <View
          style={{
            justifyContent: "flex-end",
            height: pantalla.screenHeight <= 592 ? 20 : 40,
            width: 150,
            marginRight: 20,
          }}
        >
          <CustomButton
            disabled={quantity === 0}
            onPress={() =>
              dispatch(
                UpdateCart.AddElement({
                  ...item,
                  quantity,
                  total: item.product.price * quantity,
                })
              )
            }
          >
            <Text
              style={{
                fontSize: RFPercentage(2.2),
                textTransform: "uppercase",
                fontWeight: "bold",
                color: quantity === 0 ? "#fff" : "#000",
              }}
            >
              Agregar
            </Text>
          </CustomButton>
        </View>
      </View>

      <View
        style={{
          backgroundColor: colores.grisClaro,
          height: 75,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[{ fontWeight: "bold" }]}>PUBLICIDAD</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editCart: (index, element, sum) => {
      dispatch(actions.UpdateCart.EditQtyCart(index, element, sum));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
