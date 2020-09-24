import React from "react";
import { SvgCss } from "react-native-svg";
import { colores } from "../../constantes/Temas";

const HomeIcon = ({ width, height, color = colores.amarillo }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.07 33.93"><defs><style>.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2.88px;}</style></defs><title>home</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="33.63 17.72 17.56 1.44 1.44 17.72 6.34 17.76 6.34 32.27 13.45 32.27 13.45 25.69 21.21 25.69 21.21 32.49 28.78 32.49 28.78 17.76 33.63 17.72"/></g></g></svg>`;

  const HomeSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <HomeSvg />;
};

export default HomeIcon;
