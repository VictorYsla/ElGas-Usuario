import React from "react";
import { SvgCss } from "react-native-svg";
import { colores } from "../../constantes/Temas";

const ProfileIcon = ({ width, height, color = colores.bgOscuro }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.21 31.56"><defs><style>.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2.88px;}</style></defs><title>profile</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M18.64,18.23a9.32,9.32,0,1,0-11.07,0A11.67,11.67,0,0,0,1.44,28.5v1.62H24.77V28.5A11.69,11.69,0,0,0,18.64,18.23Z"/></g></g></svg>`;

  const ProfileSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <ProfileSvg />;
};

export default ProfileIcon;
