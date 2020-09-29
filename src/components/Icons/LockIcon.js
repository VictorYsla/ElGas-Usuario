import React from "react";
import { SvgCss } from "react-native-svg";

const LockIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.88 36.97"><defs><style>.cls-1{fill:#ffb500;}</style></defs><title>lock</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M20.61,37H5.27A5.28,5.28,0,0,1,0,31.7V18.94a5.27,5.27,0,0,1,5.27-5.27H20.61a5.28,5.28,0,0,1,5.27,5.27V31.7A5.28,5.28,0,0,1,20.61,37ZM5.27,18.17a.76.76,0,0,0-.77.77V31.7a.77.77,0,0,0,.77.77H20.61a.78.78,0,0,0,.77-.77V18.94a.77.77,0,0,0-.77-.77Z"/><path class="cls-1" d="M6.38,15.92H1.88V11.07a11.06,11.06,0,1,1,22.12,0H19.5a6.56,6.56,0,1,0-13.12,0Z"/></g></g></svg>`;

  const LockSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <LockSvg />;
};

export default LockIcon;
