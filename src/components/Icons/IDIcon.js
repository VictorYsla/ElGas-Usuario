import React from "react";
import { SvgCss } from "react-native-svg";

const IDIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.91 29.26"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}</style></defs><title>id</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M33.32,1.73,7.56,1.79A5.85,5.85,0,0,0,1.73,7.64V21.69a5.85,5.85,0,0,0,5.84,5.84H33.33a5.85,5.85,0,0,0,5.85-5.84V7.57A5.84,5.84,0,0,0,33.32,1.73Z"/><rect class="cls-1" x="7.31" y="7.86" width="8.3" height="9.68"/><line class="cls-1" x1="20.68" y1="9.7" x2="33.12" y2="9.7"/><line class="cls-1" x1="20.68" y1="16.15" x2="33.12" y2="16.15"/></g></g></svg>`;

  const IDSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <IDSvg />;
};

export default IDIcon;
