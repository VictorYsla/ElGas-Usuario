import React from "react";
import { SvgCss } from "react-native-svg";

const NightDeliveryIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.91 43.65"><defs><style>.cls-1{fill:#2e2e2d;}.cls-2{fill:#fff;stroke:#2e2e2d;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.46px;}</style></defs><title>night-delivery</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M11.06,43.65H9.14V39.71A13.51,13.51,0,0,1,3.33,38C1.07,36.49,0,33.91,0,30.25H5.34a9.84,9.84,0,0,0,.78,3.35,4.06,4.06,0,0,0,3,1.72V26.87l-1.6-.48a10.15,10.15,0,0,1-5.33-3.08A7.47,7.47,0,0,1,.65,18.54a8.8,8.8,0,0,1,.61-3.35,7.8,7.8,0,0,1,4.82-4.53,14.29,14.29,0,0,1,3.06-.49V7.53h1.92v2.68a9.93,9.93,0,0,1,5,1.58c2.22,1.41,3.36,3.7,3.44,6.87h-5.2a7.2,7.2,0,0,0-.59-2.58,3,3,0,0,0-2.7-1.54v7.54A24.74,24.74,0,0,1,17.37,25,7,7,0,0,1,20,30.81c0,3.32-1.22,5.74-3.66,7.24a11.69,11.69,0,0,1-5.31,1.62ZM9.14,14.58a3.49,3.49,0,0,0-2.55.92,3.38,3.38,0,0,0-.83,2.4A3.18,3.18,0,0,0,7,20.54a7.35,7.35,0,0,0,2.13,1Zm1.92,20.68a5,5,0,0,0,2.25-.71,3.65,3.65,0,0,0,1.24-3.15,3.37,3.37,0,0,0-1.16-2.69,8.29,8.29,0,0,0-2.33-1.19Z"/><path class="cls-2" d="M28.18,20.33a9.3,9.3,0,0,1,0-18.6S18.91,10,28.18,20.33Z"/></g></g></svg>`;

  const NightDeliverySvg = () => (
    <SvgCss xml={xml} height={height} width={width} />
  );

  return <NightDeliverySvg />;
};

export default NightDeliveryIcon;
