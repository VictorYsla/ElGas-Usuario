import React from "react";
import { SvgCss } from "react-native-svg";

const PhoneIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.27 42.35"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}.cls-2{fill:#2e2e2d;}</style></defs><title>phone</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M19.69,1.73,7.56,1.79A5.85,5.85,0,0,0,1.73,7.64V34.78a5.84,5.84,0,0,0,5.84,5.84H19.7a5.84,5.84,0,0,0,5.85-5.84V7.57A5.84,5.84,0,0,0,19.69,1.73Z"/><path class="cls-2" d="M16.9,33.3A3.26,3.26,0,1,1,13.64,30,3.26,3.26,0,0,1,16.9,33.3Zm-3.26-1.92a1.93,1.93,0,1,0,1.92,1.92A1.92,1.92,0,0,0,13.64,31.38Z"/></g></g></svg>`;

  const PhoneSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <PhoneSvg />;
};

export default PhoneIcon;
