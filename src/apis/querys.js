import firebase from "firebase";

export const getCollection = async (collectionName = "1") => {
  return await firebase
    .firestore()
    .collection(collectionName)
    .get()
    .then((x) => {
      const values = [];
      x.docs.forEach((doc) => {
        // console.log("querysjs", doc.id);
        values.push({ ...doc.data(), id: doc.id });
      });
      return values;
    });
  // .onSnapshot(response =>{
  //     const values=[]
  //     response.forEach((doc)=>{
  //         values.push(doc.data())
  //     })
  //     setResponse(values)
  // })
};

export const postCollection = (collectionName = "1", body = { name: "" }) => {
  return firebase
    .firestore()
    .collection(collectionName)
    .add(body)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const updateCollectionArray = (
  collectionName = "1",
  doc = "1",
  arr = "",
  body = {},
  operacion = "suma"
) => {
  let issuma = operacion == "suma";

  return firebase
    .firestore()
    .collection(collectionName)
    .doc(doc)
    .update({
      [arr]: issuma
        ? firebase.firestore.FieldValue.arrayUnion(body)
        : firebase.firestore.FieldValue.arrayRemove(body),
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const updateCollection = (
  collectionName = "1",
  doc = "1",
  body = { name: "" }
) => {
  return firebase
    .firestore()
    .collection(collectionName)
    .doc(doc)
    .set(body)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const sendPassword = async (email) => {
  return firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function (user) {
      return { error: false, mensaje: user };
    })
    .catch(function (e) {
      return { error: true, mensaje: e[0] };
    });
};

export const singUp = async (
  email = "",
  userName = "",
  password = "",
  phoneNumberUser = ""
) => {
  //console.log(email, userName, password, phoneNumberUser);
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (res) => {
      // console.log("SignUp Response", res);
      return await res.user
        .updateProfile({ displayName: userName })
        .then((x) => {
          const user = {
            userName: res.user.displayName,
            token: res.user.l,
            uid: res.user.uid,
            email: res.user.email,
            emailVerified: res.user.emailVerified,
          };
          console.log("user", user);
          return { type: "sucess", value: user };
        });
    })
    .catch((e) => {
      console.log("error: ", e);
      return { type: "error", value: e };
    });
};

export const logIn = async (email = "", password = "") => {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // console.log('Login: ',res)
      const user = {
        userName: res.user.displayName,
        token: res.user.l,
        uid: res.user.uid,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
      };
      return { type: "sucess", value: user };
      // console.log('obj', user );
      // setResponse({type:'sucess', value: user})
    })
    .catch((e) => {
      console.log("error: ", e);
      return { type: "error", value: e };
    });
};
export const postDelivery = async (uid, userName, body = {}) => {
  firebase.firestore().collection("plant_pedidos_en_camino").add(body);
};
