import React from "react";
import { SvgCss } from "react-native-svg";
import { colores } from "../../constantes/Temas";

const LogoutIcon = ({ width, height, color = colores.bgOscuro }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.37 29.91"><defs><style>.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2.88px;}</style></defs><title>logout</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M26.86,21.36a13.52,13.52,0,1,1-.66-13.9"/><line class="cls-1" x1="19.61" y1="14.95" x2="35.93" y2="14.95"/><polyline class="cls-1" points="29.87 8.9 35.92 14.96 30.33 21.01"/></g></g></svg>`;

  const LogoutSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <LogoutSvg />;
};

export default LogoutIcon;
