import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useEffect } from "react/cjs/react.development";
import BasicHeader from "../../components/Header/BasicHeader";
import { getCurrentDeliverys } from "../../apis/querys";

import Container from "../../generales/Container";
import { useSelector } from "react-redux";

const PantallaPedidos = (props) => {
  const [onTheWay, setIsOnTheWay] = useState(true);
  const [received, setReceived] = useState(false);
  const [onWay, setOnWay] = useState([]);
  const [finished, setFinished] = useState([]);
  const login = useSelector((state) => state.login);

  console.log("onWay", onWay);
  console.log("finished", finished);

  const id = login.login.uid;

  useEffect(() => {
    onTheWay &&
      getCurrentDeliverys(id, "En Camino").then((response) => {
        setFinished([]);
        setOnWay(response);
      });
    received &&
      getCurrentDeliverys(id, "Terminado").then((response) => {
        setOnWay([]);
        setFinished(response);
      });
  }, [onTheWay, received]);

  const dummy_data = (onWay.length > 0 ? onWay : finished).map((item) => {
    return {
      user: item.userName,
      date: item.date,
      time: item.time,
    };
  });

  console.log("dummy_data:", dummy_data);

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
  // const date = item.date.split("T");
  // const formattedTime = date[1].substring(0, 8);

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
          <Text style={[styles.label]}>{`${item.date} - `}</Text>
          <Text>{item.time}</Text>
        </View>
      </View>
      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.label}>ID {item.id}</Text>
      </View> */}
    </View>
  );
};

const HeaderTabButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[
        styles.tabButtonContainer,
        {
          borderBottomColor: props.active ? "#FFB500" : "transparent",
          borderBottomWidth: 2,
        },
      ]}
    >
      {props.children}
    </TouchableOpacity>
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
