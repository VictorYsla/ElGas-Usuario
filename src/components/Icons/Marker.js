import React from "react";
import { SvgCss } from "react-native-svg";

const MarkerIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.82 51.36"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.5px;}</style></defs><title>marker</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M30.57,16.41c0,7.82-14.16,32.7-14.16,32.7S2.25,24.23,2.25,16.41a14.16,14.16,0,0,1,28.32,0Z"/><circle class="cls-1" cx="16.41" cy="16.46" r="5.97"/></g></g></svg>`;

  const MarkerSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <MarkerSvg />;
};

export default MarkerIcon;
