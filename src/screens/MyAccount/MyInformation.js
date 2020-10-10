import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import useForm from "../../hooks/useForm";

const initialValues = {
  name: "",
  birthDate: "",
  phoneNumber: "",
};

const MyInformation = ({}) => {
  const user = useSelector((state) => state.user.user);

  const form = useForm({ initialValues });
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onShowCalendar = () => {
    setShowCalendar(true);
  };

  const { name, password, phoneNumber } = form.fields;

  console.log(form);

  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View>
        <Item
          icon={() => <OutlineUserIcon width={wp(6)} height={hp(4)} />}
          title='Nombre y Apellido'
          description={user.userName}
          mTop={5}
          isEditable
          form={form}
          field='name'
        />
        <Item
          icon={() => <EmailIcon width={wp(6)} height={hp(4)} color='#000' />}
          title='Email'
          description={user.email}
        />
        <Item
          icon={() => <CalendarIcon width={wp(6)} height={hp(4)} />}
          title='Fecha de nacimiento'
          description={formattedDate}
          isBirthdate
          onShowCalendar={onShowCalendar}
          form={form}
          field='birthDate'
        />
        <Item
          icon={() => <PhoneIcon width={wp(6)} height={hp(4)} />}
          title='Numero de celular'
          description={user.phoneNumber}
          isEditable
          form={form}
          field='phoneNumber'
        />
      </View>
      <TouchableOpacity
        style={{
          width: wp(50),
          height: hp(7),
          backgroundColor: "#ddd",
          alignSelf: "center",
          marginBottom: hp(3),
          borderRadius: wp(2),
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          CAMBIAR CONTRASEÑA
        </Text>
      </TouchableOpacity>

      {showCalendar && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          display='calendar'
          onChange={onChangeDate}
          locale='es-ES'
        />
      )}
    </View>
  );
};

const Item = ({
  icon = () => {},
  title = "Titulo",
  description = "Description",
  style,
  mTop = 1,
  isEditable,
  isBirthdate,
  onShowCalendar,
  form = {},
  field,
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
            // style={styles.input}
            placeholder={
              field === "name" ? "Nombre y Apellido" : "Numero de celular"
            }
            keyboardType='default'
            {...form.getInput(field)}
            value={description}
          />
        ) : isBirthdate ? (
          <Text
            style={{ fontSize: RFPercentage(1.9) }}
            onPress={onShowCalendar}
          >
            {description}
          </Text>
        ) : (
          title === "Email" && (
            <Text
              style={{ fontSize: RFPercentage(1.9) }}
              onPress={onShowCalendar}
            >
              {description}
            </Text>
          )
        )}
      </View>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <ChevronRightIcon width={wp(5)} height={hp(3)} />
      </View>
    </TouchableOpacity>
  );
};
export default MyInformation;
