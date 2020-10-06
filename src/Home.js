import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

//importaciones necesarias para redux//
import { connect } from "react-redux";
import { actions } from "./redux";
import { getAllUsers } from "./apis/firebase";
import Container from "./generales/Container";
import { getCollection, postCollection } from "./apis/querys";

function Home(props) {
  const { login, dispatch, navigation } = props;
  const [response, setResponse] = useState(null);
  const probando = async () => {
    await getAllUsers((r) => {});
  };
  console.log("hook", response);
  useEffect(() => {
    dispatch(actions.actualizarNavigation(navigation.route?.name));
    getCollection(setResponse, "1");
    postCollection("2", { name: "Hola mundo" });
  }, []);

  return (
    <Container style={styles.container}>
      {/* <BasicHeader title='Home' /> */}
      <Text>Hola Mundo</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
});
//
const mapStateToProps = (state) => ({ login: state.login });
export default connect(mapStateToProps)(Home);
