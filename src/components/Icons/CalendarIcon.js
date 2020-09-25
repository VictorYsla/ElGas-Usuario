import React from "react";
import { SvgCss } from "react-native-svg";

const CalendarIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.91 47.83"><defs><style>.cls-1{fill:none;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}.cls-2{fill:#2e2e2d;}</style></defs><title>calendar</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M33.32,10.57l-25.76.06a5.85,5.85,0,0,0-5.83,5.85V40.25A5.85,5.85,0,0,0,7.57,46.1H33.33a5.85,5.85,0,0,0,5.85-5.85V16.42A5.85,5.85,0,0,0,33.32,10.57Z"/><rect class="cls-2" x="10.83" width="4.02" height="16.1" rx="2.01"/><rect class="cls-2" x="25.87" width="4.02" height="16.1" rx="2.01"/><path class="cls-2" d="M8.9,26.34V24a16.42,16.42,0,0,0,2.26-.21,3.28,3.28,0,0,0,1.68-.91,3.47,3.47,0,0,0,.8-1.95h2.85V38.33H13v-12Z"/><path class="cls-2" d="M23.2,22.53a5.47,5.47,0,0,1,4.19-1.73,5.41,5.41,0,0,1,5.44,3.51,13.7,13.7,0,0,1,.84,5.24,14.76,14.76,0,0,1-.81,5.26,5.62,5.62,0,0,1-5.63,4,5.76,5.76,0,0,1-3.51-1.16,4.54,4.54,0,0,1-1.79-3.37h3.41A1.93,1.93,0,0,0,27.39,36a2.44,2.44,0,0,0,2.37-1.87,11,11,0,0,0,.47-3,3.46,3.46,0,0,1-1,.9,4.44,4.44,0,0,1-2.36.58,5.39,5.39,0,0,1-3.68-1.43,5.25,5.25,0,0,1-1.61-4.13A6.38,6.38,0,0,1,23.2,22.53Zm5.74,6.9a2.8,2.8,0,0,0,1.17-2.58,3.61,3.61,0,0,0-.69-2.33,2.28,2.28,0,0,0-1.89-.87,2.41,2.41,0,0,0-1.5.49,3.14,3.14,0,0,0-1,2.61,3.58,3.58,0,0,0,.63,2.31,2.33,2.33,0,0,0,1.93.78A2.37,2.37,0,0,0,28.94,29.43Z"/></g></g></svg>`;

  const CalendarSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <CalendarSvg />;
};

export default CalendarIcon;
