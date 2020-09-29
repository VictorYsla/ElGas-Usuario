import React from "react";
import { SvgCss } from "react-native-svg";

const ChevronLeftIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.47 23.95"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.2px;}</style></defs><title>chevron-left</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" points="12.87 22.35 1.6 11.61 12.87 1.6"/></g></g></svg>`;

  const ChevronLeftSvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <ChevronLeftSvg />;
};

export default ChevronLeftIcon;
