import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
//importaciones necesarias para redux//
import { connect } from "react-redux";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TextInputBottomBorder = ({
  title = "Titulo",
  bottonWidth = 0.7,
  bottomColor = "#000",
  height = 5,
  mHorizontal = 12,
  mTop = 1.5,
  form,
}) => {
  return (
    <View
      style={{
        height: hp(height),
        borderBottomWidth: bottonWidth,
        borderBottomColor: bottomColor,
        marginHorizontal: wp(mHorizontal),
        marginTop: hp(mTop),
      }}
    >
      <TextInput
        placeholder={title}
        style={{ flex: 1 }}
        placeholderTextColor="rgba(52,52,52,0.5)"
        {...form}
      />
    </View>
  );
};

export default TextInputBottomBorder;
