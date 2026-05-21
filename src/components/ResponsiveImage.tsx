import type { ImgHTMLAttributes } from "react";

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/site-images/logo-agnes-moco.jpg": { width: 100, height: 90 },
  "/site-images/musicalizacao-1-a-2.jpeg": { width: 1280, height: 1280 },
  "/site-images/musicalizacao-2-a-3.jpeg": { width: 1280, height: 1280 },
  "/site-images/musicalizacao-3-a-5.jpeg": { width: 1280, height: 1280 },
  "/site-images/musicalizacao-5-a-7.jpeg": { width: 1280, height: 1280 },
  "/site-images/musicalizacao-7-a-10.jpeg": { width: 1280, height: 1280 },
  "/site-images/shantala-familia.jpg": { width: 1600, height: 1200 }
};

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "fetchPriority"> & {
  src: string;
  alt: string;
  fetchPriority?: "high" | "low" | "auto";
};

export function ResponsiveImage({
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  src,
  ...props
}: ResponsiveImageProps) {
  const dimensions = imageDimensions[src];
  const priorityAttribute = fetchPriority ? { fetchpriority: fetchPriority } : {};

  return (
    <img
      decoding={decoding}
      height={dimensions?.height}
      loading={loading}
      sizes={sizes}
      src={src}
      width={dimensions?.width}
      {...priorityAttribute}
      {...props}
    />
  );
}
