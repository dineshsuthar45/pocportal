import { IGlobalImgProps } from "../../types";

const ImageComp = ({ img, alt, style }: IGlobalImgProps) => {
  return <img src={img} alt={alt} style={{ ...style }} />;
};

export default ImageComp;
