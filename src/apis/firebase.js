import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

export const getAllUsers = async (funcion = () => {}) => {
  try {
    const Db = firebase.firestore().collection("gestion");

    console.log("Db:", Db);

    Db.onSnapshot(
      {
        includeMetadataChanges: true,
      },
      function (docs) {
        var users = [];
        docs.forEach(function (doc) {
          users.push({
            ...doc.data(),
            id: doc.id,
            //doc: doc
          });
        });
        //console.log('firebase.firestore()', users);
        funcion(users);
      }
    );
  } catch (err) {
    console.log("error", err);
  }
};

export const saveUser = async (user = {}) => {
  try {
    let mydoc = firebase.firestore().collection("gestion").doc();
    mydoc.set({
      created_at: new Date().getTime(),
      ...user,
    });
  } catch (err) {
    console.log("error", err);
  }
};

export const updateUser = async (user = {}, operacion = true) => {
  try {
    let mydoc = firestore.collection("gestion").doc(user.id);
    if (operacion) {
      mydoc.update({
        estado_empresas: 1,
      });
    } else {
      mydoc.update({
        estado_empresas: 2,
      });
    }
  } catch (err) {
    console.log("error", err);
  }
};
