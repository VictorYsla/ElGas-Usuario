import React from "react";
import { SvgCss } from "react-native-svg";

const AddIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13"><defs><style>.cls-1{fill:#fff;}</style></defs><title>add-icon</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,14.33V8.76H8.76V0h5.61V8.76h8.76v5.57H14.37v8.8H8.76v-8.8Z"/></g></g></svg>`;

  const AddSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <AddSvg />;
};

export default AddIcon;
