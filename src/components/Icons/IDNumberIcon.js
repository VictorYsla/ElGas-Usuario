import React from "react";
import { SvgCss } from "react-native-svg";

const IDNumberIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.44 29.26"><defs><style>.cls-1{fill:#2e2e2d;}.cls-2{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}</style></defs><title>number-id</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M.72,18.55H4l1.28-4.73H2l.72-2.7H6L7.77,4.59H11L9.22,11.12h2.64l1.75-6.53h3.21l-1.75,6.53h3.29l-.73,2.7H14.35l-1.27,4.73h3.29l-.72,2.7H12.36l-1.74,6.46H7.41l1.73-6.46H6.48L4.73,27.71H1.52l1.74-6.46H0Zm9.15,0,1.27-4.73H8.49L7.21,18.55Z"/><path class="cls-2" d="M57.85,1.73l-25.76.06a5.85,5.85,0,0,0-5.83,5.85V21.69a5.85,5.85,0,0,0,5.84,5.84H57.86a5.85,5.85,0,0,0,5.85-5.84V7.57A5.84,5.84,0,0,0,57.85,1.73Z"/><rect class="cls-2" x="31.84" y="7.86" width="8.3" height="9.68"/><line class="cls-2" x1="45.21" y1="9.7" x2="57.65" y2="9.7"/><line class="cls-2" x1="45.21" y1="16.15" x2="57.65" y2="16.15"/></g></g></svg>`;

  const IDNumberSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <IDNumberSvg />;
};

export default IDNumberIcon;
