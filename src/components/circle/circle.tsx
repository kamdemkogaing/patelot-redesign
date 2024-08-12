import { memo } from "react";
import {
  Harvey40Url,
  Harvey41Url,
  Harvey42Url,
  Harvey43Url,
  Harvey44Url,
} from "../icons";
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
