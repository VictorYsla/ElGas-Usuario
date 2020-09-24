import React from "react";
import { SvgCss } from "react-native-svg";

const ChevronRightIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.47 23.95"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.2px;}</style></defs><title>chevron-right</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" points="1.6 22.35 12.87 11.61 1.6 1.6"/></g></g></svg>`;

  const ChevronRightSvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <ChevronRightSvg />;
};

export default ChevronRightIcon;
