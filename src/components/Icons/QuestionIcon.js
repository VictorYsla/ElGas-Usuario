import React from "react";
import { SvgCss } from "react-native-svg";

const QuestionIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.29 150.29"><defs><style>.cls-1{fill:#ffb500;}.cls-2{fill:#2e2e2d;}</style></defs><title>question</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M150.29,75.14A75.15,75.15,0,1,1,75.15,0,75.14,75.14,0,0,1,150.29,75.14Z"/><path class="cls-2" d="M59.1,33.21q6.82-4.38,16.77-4.39,13.06,0,21.71,6.24t8.64,18.51a20.91,20.91,0,0,1-3.75,12.66q-2.19,3.12-8.42,8L90,77.39a12.45,12.45,0,0,0-4.44,6.07,25.79,25.79,0,0,0-.75,6.82H69.1q.34-9.77,1.85-13.5c1-2.48,3.57-5.35,7.72-8.58l4.21-3.3a14.72,14.72,0,0,0,3.34-3.41,11.64,11.64,0,0,0,2.31-7,13.53,13.53,0,0,0-2.57-8q-2.56-3.6-9.37-3.61T67.1,47.32a17.13,17.13,0,0,0-2.8,9.25H47.59Q48.28,40.1,59.1,33.21Zm9.6,65H86v16.71H68.7Z"/></g></g></svg>`;

  const QuestionSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <QuestionSvg />;
};

export default QuestionIcon;
