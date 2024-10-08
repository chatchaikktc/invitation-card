import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function Image({ src, ...props }: ImageProps) {
  const imageSrc = src.startsWith("/")
    ? `${import.meta.env.VITE_BASE_IMG_URL}${src}`
    : src;

  return <img src={imageSrc} {...props} />;
}
