import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import CustomSelector from "../../components/Form/Selector";
import BasicHeader from "../../components/Header/BasicHeader";

import Container from "../../generales/Container";

const FactuForm = (props) => {
  const [form, setform] = useState({});

  console.log("FactuForms", form);

  return (
    <Container styleContainer={[styles.screen]} navigation={props.navigation}>
      <BasicHeader title="Mi Cuenta" />

      <View
        style={[
          { flex: 1, width: "100%", alignSelf: "center", paddingBottom: 150 },
        ]}
      >
        <ScrollView>
          <TextInput
            placeholderTextColor={"rgba(52,52,52,0.9)"}
            placeholder={"Nombre"}
            style={[styles.input]}
            value={form.nombre}
            onChangeText={(text) => setform({ ...form, nombre: text })}
          />
          <View style={{ width: "80%", alignSelf: "center", marginTop: 40 }}>
            <View>
              <Text
                style={[
                  {
                    fontSize: RFPercentage(2.2),
                    color: "rgba(52,52,52,0.9)",
                  },
                ]}
              >
                Tipo de identificación
              </Text>
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    width: "60%",
                    alignSelf: "center",
                    marginTop: 10,
                  },
                ]}
              >
                <CustomSelector
                  value={form.tipo}
                  onChange={(text) => setform({ ...form, tipo: text })}
                  fields={["C.I", "R.U.C"]}
                  radiusHeight={15}
                  radiusWidth={15}
                />
              </View>
            </View>
          </View>
          <TextInput
            placeholderTextColor={"rgba(52,52,52,0.9)"}
            placeholder={"Número de identificación"}
            style={[styles.input]}
            value={form.numero}
            onChangeText={(text) => setform({ ...form, numero: text })}
          />
          <TextInput
            placeholderTextColor={"rgba(52,52,52,0.9)"}
            placeholder={"Dirección"}
            style={[styles.input]}
            value={form.direccion}
            onChangeText={(text) => setform({ ...form, direccion: text })}
          />
          <TextInput
            placeholderTextColor={"rgba(52,52,52,0.9)"}
            placeholder={"Teléfono"}
            style={[styles.input]}
            value={form.telefono}
            onChangeText={(text) => setform({ ...form, telefono: text })}
          />
        </ScrollView>
      </View>
      <View
        style={{
          height: 120,
          justifyContent: "space-between",
          position: "absolute",
          bottom: 20,
        }}
      >
        <CustomButton
          onPress={() => props.navigation.navigate("CambiarContrasena")}
        >
          <Text
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: RFPercentage(2.2),
            }}
          >
            Cambiar Contraseña
          </Text>
        </CustomButton>

        <CustomButton onPress={() => {}}>
          <Text
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: RFPercentage(2.2),
            }}
          >
            Guardar
          </Text>
        </CustomButton>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  input: {
    width: "80%",
    alignSelf: "center",
    borderBottomColor: "rgba(52,52,52,0.3)",
    borderBottomWidth: 1,
    fontSize: RFPercentage(2.2),
    marginTop: 40,
    height: 40,
    paddingLeft: 0,
  },
});
export default FactuForm;
