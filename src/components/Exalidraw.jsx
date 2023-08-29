import Image from "next/future/image";

export function Excalidraw({ src, alt = "Image", width, height }) {
  return (
    <>
      <Image
        src={src + "-light.png"}
        alt={alt}
        className="dark:hidden"
        width={width}
        height={height}
      />
      <Image
        src={src + "-dark.png"}
        alt={alt}
        className="hidden dark:block"
        width={width}
        height={height}
      />
    </>
  );
}
