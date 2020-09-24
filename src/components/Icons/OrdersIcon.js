import React from "react";
import { SvgCss } from "react-native-svg";
import { colores } from "../../constantes/Temas";

const OrdersIcon = ({ width, height, color = colores.bgOscuro }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.09 32.57"><defs><style>.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2.88px;}.cls-2{fill:${color};}</style></defs><title>orders</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M1.44,11V28.51a2.63,2.63,0,0,0,2.62,2.62H21a2.62,2.62,0,0,0,2.61-2.62V4.06A2.62,2.62,0,0,0,21,1.44h-17A2.63,2.63,0,0,0,1.44,4.06v7Z"/><line class="cls-1" x1="8.42" y1="10.42" x2="20.3" y2="10.42"/><circle class="cls-2" cx="5" cy="10.42" r="1.13"/><line class="cls-1" x1="8.42" y1="16.36" x2="20.3" y2="16.36"/><circle class="cls-2" cx="5" cy="16.36" r="1.13"/><line class="cls-1" x1="8.42" y1="22.3" x2="20.3" y2="22.3"/><circle class="cls-2" cx="5" cy="22.3" r="1.13"/></g></g></svg>`;

  const OrderSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <OrderSvg />;
};

export default OrdersIcon;
