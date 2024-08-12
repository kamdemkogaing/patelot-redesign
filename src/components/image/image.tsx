import Image from "next/image";
import React, { useEffect, useState } from "react";

type IImage = {
  id?: string;
  src: string;
  alt?: string;
  className?: string;
  extension?: string;
  width?: number | null;
  height?: number | null;
  fetchpriority?: string;
  placeholder?: "empty" | "blur";
  loading?: "lazy" | "eager";
} & React.HTMLAttributes<HTMLImageElement>;

const ImageAtom = ({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: IImage) => {
  const [dynamicDimensions, setDynamicDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if ((!width || !height) && typeof window !== "undefined") {
      const img = new window.Image();
      img.onload = () => {
        setDynamicDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
      img.src = src;
    }
  }, [src, width, height]);

  const imageWidth = width ?? dynamicDimensions?.width;
  const imageHeight = height ?? dynamicDimensions?.height;

  if (!width || !height) {
    if (!dynamicDimensions) return null;
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      className={className}
      width={imageWidth ?? undefined}
      height={imageHeight ?? undefined}
      {...props}
      fill={!imageWidth || !imageHeight ? true : undefined}
    />
  );
};

export { ImageAtom as Image };
