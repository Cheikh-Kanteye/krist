import { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

export const useDominantColor = (src: string) => {
  const [bgColor, setBgColor] = useState<string>("transparent");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const colorThief = new ColorThief();

    const handleImageLoad = async () => {
      if (imgRef.current && imgRef.current.complete) {
        const dominantColor = await colorThief.getColor(imgRef.current);
        setBgColor(`rgb(${dominantColor.join(",")})`);
      }
    };

    if (imgRef.current?.complete) {
      handleImageLoad();
    } else {
      imgRef.current?.addEventListener("load", handleImageLoad);
      return () => imgRef.current?.removeEventListener("load", handleImageLoad);
    }
  }, [src]);

  return { bgColor, imgRef };
};
