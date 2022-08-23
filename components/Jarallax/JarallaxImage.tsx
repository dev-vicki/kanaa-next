import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string;
}
export function JarallaxImage({ className = '', ...props }: Props) {
  return <img className={`jarallax-img ${className}`} {...props} />;
}
