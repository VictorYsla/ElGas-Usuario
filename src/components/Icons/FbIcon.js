import React from "react";
import { SvgCss } from "react-native-svg";

const FbIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 29.2"><defs><style>.cls-1{fill:#fff;}</style></defs><title>fb-logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M13.74,12.64H8.82V29.2H3.13V12.64H0V9.9L3.13,8.37V6.84c0-2.37.58-4.11,1.75-5.2S7.92,0,10.49,0a14.46,14.46,0,0,1,5.24.88L14.27,5.05a10.53,10.53,0,0,0-3.16-.54,2.06,2.06,0,0,0-1.76.72,3,3,0,0,0-.53,1.83V8.37h4.92Z"/></g></g></svg>`;

  const FbSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <FbSvg />;
};

export default FbIcon;
