import * as Facebook from "expo-facebook";
Facebook.initializeAsync("612901659586794", "ElGas");

export const facebookLogIn = async () => {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync("612901659586794", {
      permissions: ["public_profile"],
    });

    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
      );
      const jsonResponse = await response.json();
      const {
        name,
        email,
        id,
        picture: { data },
      } = jsonResponse;
      const obj = {
        user: {
          userName: name,
          email: email,
          uid: id,
          photo: {
            url: data.url,
            width: data.width,
            heigtht: data.height,
          },
          token: token,
          expires: expires,
          isLogged: true,
        },
      };
      return obj;
    }
    return null;
  } catch ({ message }) {
    alert(`Error al ingresar con Facebook: ${message}`);
    console.log(message);
    return null;
  }
};
