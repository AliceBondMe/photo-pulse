import { SvgXml } from "react-native-svg";

const PostsSVG = () => {
  const svgXml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `;

  return <SvgXml xml={svgXml} />;
};

export default PostsSVG;
