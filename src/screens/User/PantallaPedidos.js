import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import BasicHeader from "../../components/Header/BasicHeader";

import Container from "../../generales/Container";

const PantallaPedidos = (props) => {
  const [onTheWay, setIsOnTheWay] = useState(true);
  const [received, setReceived] = useState(false);

  const dummy_data = [
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "970",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "969",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "968",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "967",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "966",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "965",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "964",
    },
    {
      user: "Manuel Córdova Galarza",
      date: new Date().toISOString(),
      id: "963",
    },
  ];

  return (
    <Container styleContainer={styles.screen}>
      <BasicHeader title="Mis Pedidos" />
      <View
        style={{
          height: "10%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={[styles.row, styles.tabsButtonsContainer]}>
          <HeaderTabButton
            active={onTheWay}
            onPress={() => {
              if (received) {
                setReceived(false);
                setIsOnTheWay(true);
              }
            }}
          >
            <Text
              style={[
                styles.tabButtonLabel,
                { fontWeight: onTheWay ? "bold" : "normal" },
              ]}
            >
              En camino
            </Text>
          </HeaderTabButton>

          <HeaderTabButton
            active={received}
            onPress={() => {
              if (onTheWay) {
                setIsOnTheWay(false);
                setReceived(true);
              }
            }}
          >
            <Text
              style={[
                styles.tabButtonLabel,
                { fontWeight: received ? "bold" : "normal" },
              ]}
            >
              Recibidos
            </Text>
          </HeaderTabButton>
        </View>
      </View>
      {onTheWay ? (
        <View
          style={{
            flex: 1,
            width: "90%",
            padding: 20,
          }}
        >
          <FlatList
            data={dummy_data}
            renderItem={({ item }) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            width: "90%",
            padding: 20,
            paddingHorizontal: 20,
          }}
        >
          <FlatList
            data={dummy_data}
            renderItem={({ item }) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
};

const ListItem = ({ item }) => {
  const date = item.date.split("T");
  const formattedTime = date[1].substring(0, 8);

  return (
    <View
      style={[
        styles.row,
        { justifyContent: "space-between", marginVertical: 10 },
      ]}
    >
      <View>
        <Text style={styles.user}>{item.user}</Text>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Text style={[styles.label]}>{`${date[0]}`}</Text>
          <Text>{formattedTime}</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.label}>ID {item.id}</Text>
      </View>
    </View>
  );
};

const HeaderTabButton = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.onPress()}>
      <View
        style={[
          styles.tabButtonContainer,
          {
            borderBottomColor: props.active ? "#FFB500" : "transparent",
            borderBottomWidth: 2,
          },
        ]}
      >
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  tabsButtonsContainer: {
    height: 50,
    backgroundColor: "#2E2E2D",
    width: "100%",
  },
  tabButtonContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabButtonLabel: {
    color: "#fff",
  },
  user: {
    fontWeight: "bold",
    fontSize: RFPercentage(2.4),
  },
  label: {
    fontSize: RFPercentage(2.4),
  },
});
export default PantallaPedidos;
