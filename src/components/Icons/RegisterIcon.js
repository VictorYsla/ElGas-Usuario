import React from "react";
import { SvgCss } from "react-native-svg";

const RegisterIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 150.29 168.26"><defs><style>.cls-1{fill:none;}.cls-2{fill:#ffb500;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#2e2e2d;}</style><clipPath id="clip-path"><path class="cls-1" d="M150.29,75.14A75.15,75.15,0,1,1,75.15,0,75.14,75.14,0,0,1,150.29,75.14Z"/></clipPath></defs><title>signup</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-2" d="M150.29,75.14A75.15,75.15,0,1,1,75.15,0,75.14,75.14,0,0,1,150.29,75.14Z"/><g class="cls-3"><path class="cls-4" d="M77.1,168.26,21.29,149,17.74,136.3l10.66-5.58c10.14-8.12,30.44-12.18,30.44-12.18,8.62-2.54,4-12.68,4-12.68-6.59-6.6-12.17-18.27-12.17-18.27-6.09,2-8.63-6.59-8.12-9.63s-2.54-14.21-2.54-14.21C37,48,46.15,39.4,46.15,39.4s4.41-15,29.88-15,29.43,14.77,29.43,14.77,9.13,8.62,6.09,24.35c0,0-3,11.16-2.54,14.2s-2,11.67-8.12,9.64c0,0-5.58,11.67-12.17,18.27,0,0-4.57,10.14,4.06,12.68,0,0,20.29,4.06,30.44,12.17L133.87,136l-3.55,12.68L74.51,168"/></g></g></g></svg>`;

  const RegisterSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <RegisterSvg />;
};

export default RegisterIcon;
