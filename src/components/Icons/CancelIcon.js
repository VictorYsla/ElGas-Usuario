import React from "react";
import { SvgCss } from "react-native-svg";

const CancelIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.38 15.69"><defs><style>.cls-1{fill:#2e2e2d;}</style></defs><title>cancel</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M.28,0H3.69l3.6,5.52L10.94,0l3.21.07L8.86,7.65l5.52,8H11L7.12,9.8,3.34,15.69H0l5.52-8Z"/></g></g></svg>`;

  const CancelSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <CancelSvg />;
};

export default CancelIcon;
