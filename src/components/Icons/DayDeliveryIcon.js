import React from "react";
import { SvgCss } from "react-native-svg";

const DayDeliveryIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.4 51.62"><defs><style>.cls-1{fill:#2e2e2d;}.cls-2{fill:none;}.cls-2,.cls-3{stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}.cls-3{fill:#fff;}</style></defs><title>day-delivery</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M11.06,51.62H9.14V47.68A13.51,13.51,0,0,1,3.33,46Q-.06,43.7,0,38.22H5.34a9.7,9.7,0,0,0,.78,3.34,4.06,4.06,0,0,0,3,1.73V34.84l-1.6-.48a10.22,10.22,0,0,1-5.33-3.09A7.47,7.47,0,0,1,.65,26.5a8.75,8.75,0,0,1,.61-3.34A7.5,7.5,0,0,1,3,20.57a7.49,7.49,0,0,1,3.13-1.94,14.18,14.18,0,0,1,3.06-.5V15.5h1.92v2.67a9.83,9.83,0,0,1,5,1.59c2.22,1.41,3.36,3.7,3.44,6.86h-5.2a7.19,7.19,0,0,0-.59-2.57,3,3,0,0,0-2.7-1.54v7.54a24.39,24.39,0,0,1,6.31,2.87A7,7,0,0,1,20,38.77c0,3.33-1.22,5.74-3.66,7.25a11.69,11.69,0,0,1-5.31,1.62ZM9.14,22.55a3.45,3.45,0,0,0-2.55.92,3.37,3.37,0,0,0-.83,2.4A3.15,3.15,0,0,0,7,28.5a6.86,6.86,0,0,0,2.13,1Zm1.92,20.68a4.86,4.86,0,0,0,2.25-.72,3.62,3.62,0,0,0,1.24-3.14,3.35,3.35,0,0,0-1.16-2.69,8,8,0,0,0-2.33-1.19Z"/><line class="cls-2" x1="24.24" y1="1.73" x2="24.24" y2="28.59"/><line class="cls-2" x1="37.67" y1="15.16" x2="10.81" y2="15.16"/><line class="cls-2" x1="33.74" y1="24.65" x2="14.75" y2="5.66"/><line class="cls-2" x1="14.75" y1="24.65" x2="33.74" y2="5.66"/><circle class="cls-3" cx="24.24" cy="15.16" r="6.73"/></g></g></svg>`;

  const DayDeliverySvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <DayDeliverySvg />;
};

export default DayDeliveryIcon;
