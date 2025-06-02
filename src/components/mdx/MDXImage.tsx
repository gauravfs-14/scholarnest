"use client";

import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function MDXImage({
  src,
  alt,
  className,
  width,
  height,
  ...rest
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Image
        src={src}
        alt={alt}
        layout={width && height ? "intrinsic" : "responsive"}
        width={width || 800}
        height={height || 450}
        className="rounded-lg object-contain"
        {...rest}
      />
    </div>
  );
}
