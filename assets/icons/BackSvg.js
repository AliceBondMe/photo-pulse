import { SvgXml } from "react-native-svg";

const BackSVG = () => {
  const svgXml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `;

  return <SvgXml xml={svgXml} />;
};

export default BackSVG;
