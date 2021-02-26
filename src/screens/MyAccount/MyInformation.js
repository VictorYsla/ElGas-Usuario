import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import DateTimePicker from "@react-native-community/datetimepicker";

import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import EmailIcon from "../../components/Icons/EmailIcon";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import PhoneIcon from "../../components/Icons/PhoneIcon";
import { connect, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { colores } from "../../constantes/Temas";
import { actions } from "../../redux";
import { updateCollection } from "../../apis/querys";

const MyInformation = ({ dispatch, navigation }) => {
  const user = useSelector((state) => state.user.user);

  const [newuser, setnewuser] = useState({ ...user });

  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    setDate(currentDate);
  };

  const updateUser = () => {
    updateCollection("plant_usuarios", newuser.id, newuser).then((r) => {
      r
        ? alert("Cambios realizados con éxito")
        : alert("Ups, sucedió un error");
    });
    dispatch(actions.setUser({ ...user, ...newuser }));
  };

  // console.log("navigation:", navigation);

  useEffect(() => {
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    setnewuser({ birthDate: formattedDate, ...user });
  }, [date]);

  console.log("user", user);

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ flex: 1, minHeight: 500 }}>
        <Item
          icon={() => <OutlineUserIcon width={wp(6)} height={hp(4)} />}
          title="Nombre y Apellido"
          isEditable
          form={newuser}
          field="userName"
          onChange={setnewuser}
        />
        <Item
          icon={() => <EmailIcon width={wp(6)} height={hp(4)} color="#000" />}
          title="Email"
          form={newuser}
          field="email"
          onChange={setnewuser}
        />
        <Item
          icon={() => <CalendarIcon width={wp(6)} height={hp(4)} />}
          title="Fecha de nacimiento"
          isBirthdate
          onShowCalendar={() => setShowCalendar(true)}
          form={newuser}
          field="birthDate"
          onChange={setnewuser}
        />
        <Item
          icon={() => <PhoneIcon width={wp(6)} height={hp(4)} />}
          title="Numero de celular"
          isEditable
          form={newuser}
          field="phoneNumber"
          onChange={setnewuser}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("RecuperarContrasena", "reset")}
          style={{
            width: wp(50),
            height: hp(7),
            backgroundColor: colores.grisClaro,
            alignSelf: "center",
            marginBottom: hp(3),
            marginTop: hp(3),
            borderRadius: wp(2),
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Cambiar Contraseña
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={updateUser}
          style={{
            width: wp(50),
            height: hp(7),
            backgroundColor: colores.amarillo,
            alignSelf: "center",
            // marginTop: hp(3),
            borderRadius: wp(2),
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            GUARDAR
          </Text>
        </TouchableOpacity>
      </View>

      {showCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="calendar"
          onChange={onChangeDate}
          locale="es-ES"
        />
      )}
    </View>
  );
};

const Item = ({
  icon = () => <View />,
  title = "Titulo",
  description = "Description",
  style,
  mTop = 1,
  isEditable,
  isBirthdate,
  onShowCalendar,
  field,
  form,
  onChange,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: wp(85),
        height: hp(10),
        marginTop: hp(mTop),
      }}
    >
      <View style={{ justifyContent: "center", flex: 1 }}>{icon()}</View>
      <View style={{ justifyContent: "center", flex: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: RFPercentage(2.1) }}>
          {title}
        </Text>
        {isEditable ? (
          <TextInput
            style={{
              borderBottomWidth: 0.5,
              borderColor: "rgba(52,52,52,05)",
              // borderRadius: 5,
              padding: 0,
            }}
            placeholder={
              field === "name" ? "Nombre y Apellido" : "Numero de celular"
            }
            keyboardType="default"
            onChangeText={(text) => onChange({ ...form, [field]: text })}
            value={form[field]}
          />
        ) : isBirthdate ? (
          <Text
            style={{
              fontSize: RFPercentage(1.9),
              borderBottomWidth: 0.5,
              borderColor: "rgba(52,52,52,05)",
            }}
            onPress={onShowCalendar}
          >
            {form[field]}
          </Text>
        ) : (
          title === "Email" && (
            <Text
              style={{ fontSize: RFPercentage(1.9) }}
              onPress={onShowCalendar}
            >
              {form[field]}
            </Text>
          )
        )}
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        {/* <ChevronRightIcon width={wp(5)} height={hp(3)} /> */}
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  login: state.login.login,
  cart: state.cart.cart,
  total: state.cart.totalPrice,
});

export default connect(mapStateToProps)(MyInformation);
