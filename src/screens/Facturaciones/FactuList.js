import React, { useEffect, useState } from "react";

//importaciones necesarias para redux//
import Container from "../../generales/Container";
import BasicHeader from "../../components/Header/BasicHeader";

import MyAddress from "../MyAccount/MyAddress";
import MyFactudata from "./MyFactudata";

const FactuList = ({ navigation }) => {
  return (
    <Container>
      <BasicHeader
        title="Datos de facturación"
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <MyFactudata navigation={navigation} />
    </Container>
  );
};

export default FactuList;
