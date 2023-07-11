import Image from "next/future/image";

export function Excalidraw({ src, width, height }) {
  return (
    <>
      <Image
        src={src + "-light.png"}
        className="dark:hidden"
        width={width}
        height={height}
      />
      <Image
        src={src + "-dark.png"}
        className="hidden dark:block"
        width={width}
        height={height}
      />
    </>
  );
}
