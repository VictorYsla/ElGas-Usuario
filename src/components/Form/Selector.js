import React from "react";
import { View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomSelector = ({ fields = ["Valor1", "Valor2"], value, onChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: hp(0.4),
        width: "100%",
      }}
    >
      {fields.map((item) => {
        return <Item item={item} onChange={onChange} value={value} />;
      })}
    </View>
  );
};

const Item = ({ item, value, onChange }) => {
  // console.log("Selectorjs value", value);

  return (
    <TouchableOpacity
      onPress={() => onChange(item)}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: wp(4.5),
          height: hp(2.3),
          backgroundColor: value == item ? "black" : "white",
          borderRadius: wp(100),
          alignSelf: "center",
          borderColor: "#000",
          borderWidth: 0.8,
        }}
      />
      <Text
        style={{
          fontSize: RFPercentage(2),
          textAlignVertical: "center",
          marginLeft: wp(1),
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomSelector;
