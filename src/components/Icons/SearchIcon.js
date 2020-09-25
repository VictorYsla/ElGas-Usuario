import React from "react";
import { SvgCss } from "react-native-svg";

const SearchIcon = ({ width, height }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.48 34.37"><defs><style>.cls-1{fill:#fff;}</style></defs><title>search</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M14.37,28.76A14.38,14.38,0,1,1,28.75,14.37,14.4,14.4,0,0,1,14.37,28.76Zm0-25.39a11,11,0,1,0,11,11A11,11,0,0,0,14.37,3.37Z"/><rect class="cls-1" x="27.87" y="20.25" width="3.37" height="15.48" transform="translate(-10.98 31.71) rotate(-48.68)"/></g></g></svg>`;

  const SearchSvg = () => <SvgCss xml={xml} height={height} width={width} />;

  return <SearchSvg />;
};

export default SearchIcon;
