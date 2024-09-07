"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import ColorThief from "colorthief";

const CategorieCard = ({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) => {
  const [bgColor, setBgColor] = useState<string>("transparent");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const colorThief = new ColorThief();

    const handleImageLoad = async () => {
      if (imgRef.current && imgRef.current.complete) {
        // Extraction synchronique de la couleur dominante
        const dominantColor = await colorThief.getColor(imgRef.current);
        setBgColor(`rgb(${dominantColor.join(",")})`);
      }
    };

    if (imgRef.current?.complete) {
      handleImageLoad(); // Vérifie si l'image est déjà chargée
    } else {
      imgRef.current?.addEventListener("load", handleImageLoad);
      return () => imgRef.current?.removeEventListener("load", handleImageLoad);
    }
  }, [src]);

  return (
    <div
      className={`default-card-style ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <span className="absolute top-4 text-5xl font-bold text-white/70 uppercase text-balance -z-20">
        {label}
      </span>
      <Image
        ref={imgRef}
        src={src}
        alt="products"
        width={1000}
        height={1000}
        className="absolute object-cover inset-0 w-full h-full -z-10"
      />
      <Button
        label={label}
        className="btn bg-white shadow-md items-center justify-center capitalize hover:bg-white/70 backdrop-blur-sm font-semibold !text-black"
      />
    </div>
  );
};

export default CategorieCard;
