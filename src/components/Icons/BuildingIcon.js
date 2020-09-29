import React from "react";
import { SvgCss } from "react-native-svg";

const BuildingIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.97 53.17"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.5px;}.cls-2{fill:#2e2e2d;}</style></defs><title>building</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="cls-1" x="9.45" y="5.49" width="22.36" height="45.44"/><rect class="cls-2" x="14.14" y="11.58" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="22.51" y="11.58" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="14.14" y="19.13" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="22.51" y="19.13" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="14.14" y="26.67" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="22.51" y="26.67" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="14.14" y="34.22" width="4.33" height="4.33" rx="0.5"/><rect class="cls-2" x="22.51" y="34.22" width="4.33" height="4.33" rx="0.5"/><polygon class="cls-1" points="38.59 50.31 38.59 18.58 47.4 10.37 56.63 18.58 56.63 50.31 38.59 50.31"/><rect class="cls-2" x="43.26" y="24.6" width="3.02" height="3.02" rx="0.73"/><rect class="cls-2" x="49.05" y="24.6" width="3.02" height="3.02" rx="0.73"/><rect class="cls-2" x="43.26" y="30.45" width="3.02" height="3.02" rx="0.73"/><rect class="cls-2" x="49.05" y="30.45" width="3.02" height="3.02" rx="0.73"/><rect class="cls-2" x="43.26" y="36.31" width="3.02" height="3.02" rx="0.73"/><rect class="cls-2" x="45.71" y="42.92" width="3.98" height="6.62" rx="1.42"/><rect class="cls-2" x="18.22" y="40.96" width="5.73" height="9.53" rx="2.05"/><rect class="cls-2" x="49.05" y="36.31" width="3.02" height="3.02" rx="0.73"/><circle class="cls-2" cx="47.3" cy="20.24" r="2.52"/><line class="cls-1" x1="65.72" y1="50.92" x2="2.25" y2="50.92"/><rect class="cls-2" x="10.07" width="21.17" height="6.72" rx="1.77"/></g></g></svg>`;

  const BuildingSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <BuildingSvg />;
};

export default BuildingIcon;
