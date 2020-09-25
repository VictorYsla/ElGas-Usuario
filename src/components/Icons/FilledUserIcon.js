import React from "react";
import { SvgCss } from "react-native-svg";

const FilledUserIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.45 37.87"><defs><style>.cls-1{fill:#2e2e2d;stroke-width:3.46px;}.cls-1,.cls-2{stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;}.cls-2{fill:none;stroke-width:3px;}</style></defs><title>user-1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M22.36,21.88a11.17,11.17,0,1,0-13.28,0A14,14,0,0,0,1.73,34.2v1.94h28V34.2A14,14,0,0,0,22.36,21.88Z"/><path class="cls-2" d="M8.2,21.21a14.32,14.32,0,0,0,14.62,0"/></g></g></svg>`;

  const FilledUserSvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <FilledUserSvg />;
};

export default FilledUserIcon;
