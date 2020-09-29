import React from "react";
import { SvgCss } from "react-native-svg";
import { colores } from "../../constantes/Temas";

const CardIcon = ({ width, height, color = colores.bgOscuro }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.51 25.09"><defs><style>.cls-1,.cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;}.cls-1{stroke:#fff;stroke-width:3px;}.cls-2{stroke:${color};stroke-width:2.88px;}.cls-3{fill:${color};}</style></defs><title>card</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line class="cls-1" x1="28.61" y1="17.63" x2="40.01" y2="17.63"/><path class="cls-2" d="M12,23.65h19a2.73,2.73,0,0,0,2.73-2.72V4.17a2.74,2.74,0,0,0-2.73-2.73H4.17A2.74,2.74,0,0,0,1.44,4.17V20.93a2.73,2.73,0,0,0,2.73,2.72H12Z"/><rect class="cls-3" x="0.62" y="6.53" width="33.85" height="4.48"/><line class="cls-2" x1="18.44" y1="18.74" x2="29.83" y2="18.74"/></g></g></svg>`;

  const CardSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <CardSvg />;
};

export default CardIcon;
