import React from "react";
import { SvgCss } from "react-native-svg";

const AddressIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.71 53.9"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.5px;}</style></defs><title>house</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" points="2.25 28.57 27.85 2.25 53.45 28.57"/><polyline class="cls-1" points="10 28.21 10 51.29 23.71 51.29 23.71 40.83 31.28 40.83 31.28 51.65 45.7 51.65 45.7 28.21"/><circle class="cls-1" cx="27.94" cy="23" r="5.97"/></g></g></svg>`;

  const AddressSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <AddressSvg />;
};

export default AddressIcon;
