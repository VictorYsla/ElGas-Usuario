import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colores } from "../../constantes/Temas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";

const InitalLeftComponent = (icon = () => {}) => {
  //const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        /* navigation.goBack() */
      }}
      style={{ flex: 1, justifyContent: "center", marginLeft: "20%" }}
    >
      {icon()}
    </TouchableOpacity>
  );
};

const BasicHeader = ({
  leftWidth = 20,
  rigthWidth = 20,
  icon = () => <ChevronLeftIcon width={wp(6)} height={hp(3.5)} />,
  centerWidth = 60,
  leftComponent = () => InitalLeftComponent(icon),
  headerHeigth = 9,
  rigthComponent = () => {},
  centerComponent = () => {},
  title = "title",
}) => {
  //const navigation = useNavigation()
  return (
    <View
      style={{
        // marginTop: StatusBar.currentHeight,
        height: hp(headerHeigth),
        flexDirection: "row",
        width: "100%",
        backgroundColor: colores.bgOscuro,
        alignItems: "center",
      }}
    >
      <View style={{ width: `${leftWidth}%`, justifyContent: "center" }}>
        {leftComponent(icon())}
      </View>
      <View style={{ width: `${centerWidth}%`, justifyContent: "center" }}>
        {centerComponent() ? (
          centerComponent()
        ) : (
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: RFPercentage(3),
            }}
          >
            {title}{" "}
          </Text>
        )}
      </View>
      <View style={{ width: `${rigthWidth}%`, justifyContent: "center" }}>
        {rigthComponent()}
      </View>
    </View>
  );
};

export default BasicHeader;
