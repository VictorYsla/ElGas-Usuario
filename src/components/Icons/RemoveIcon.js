import React from "react";
import { SvgCss } from "react-native-svg";

const RemoveIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.27 5.45"><defs><style>.cls-1{fill:#fff;}</style></defs><title>remove</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,0H11.27V5.45H0Z"/></g></g></svg>`;

  const RemoveSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <RemoveSvg />;
};

export default RemoveIcon;
