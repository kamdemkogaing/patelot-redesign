import { memo } from "react";
import Harvey40Url from "../icons/miscellaneous/0-4-harvey.svg";
import Harvey41Url from "../icons/miscellaneous/1-4-harvey.svg";
import Harvey42Url from "../icons/miscellaneous/2-4-harvey.svg";
import Harvey43Url from "../icons/miscellaneous/3-4-harvey.svg";
import Harvey44Url from "../icons/miscellaneous/4-4-harvey.svg";
import { Image } from "../image/image";

type ICircle = {
  size: number;
};

export const Circle = memo<ICircle>(({ size }) => {
  Circle.displayName = "Circle";
  if (size === 1) {
    return <Image src={Harvey41Url} height={48} width={48} />;
  } else if (size === 2) {
    return <Image src={Harvey42Url} height={48} width={48} />;
  } else if (size === 3) {
    return <Image src={Harvey43Url} height={48} width={48} />;
  } else if (size === 4) {
    return <Image src={Harvey44Url} height={48} width={48} />;
  }
  return <Image src={Harvey40Url} height={48} width={48} />;
});

export default Circle;
