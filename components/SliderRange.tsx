"use client";

import React, { ChangeEvent, useEffect, useRef } from "react";

interface SliderRangeProps {
  label: string;
  symbol?: string;
  min: number;
  max: number;
  step?: number;
  priceCap: number;
  initialMin: number;
  initialMax: number;
  handleMinChange: (value: number) => void;
  handleMaxChange: (value: number) => void;
}

const SliderRange = ({
  label,
  symbol,
  min,
  max,
  initialMin,
  step = 10,
  initialMax,
  priceCap,
  handleMaxChange,
  handleMinChange,
}: SliderRangeProps) => {
  const progressRef = useRef<HTMLDivElement | null>(null);

  const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= max - priceCap) {
      // Ensure min does not surpass max
      handleMinChange(value);
    }
  };

  const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= min + priceCap) {
      // Ensure max does not go below min
      handleMaxChange(value);
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      const rangeTotal = initialMax - initialMin;
      const minPercent = ((min - initialMin) / rangeTotal) * 100;
      const maxPercent = ((max - initialMin) / rangeTotal) * 100;

      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, max, initialMin, initialMax]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-base text-black">
        <span className="capitalize">{label}</span>
        <span>
          {symbol && symbol}
          {min}
        </span>
        <span>— </span>
        <span>
          {symbol && symbol}
          {max}
        </span>
      </div>

      <div>
        <div className="relative h-1 bg-black/10">
          <div ref={progressRef} className="absolute h-1 bg-black"></div>
        </div>
        <div className="relative">
          <input
            type="range"
            value={min}
            step={step}
            min={initialMin}
            max={initialMax}
            onChange={onMinChange}
            className="absolute w-full -top-1 h-1 appearance-none bg-transparent slider"
          />
          <input
            type="range"
            value={max}
            step={step}
            min={initialMin}
            max={initialMax}
            onChange={onMaxChange}
            className="absolute w-full -top-1 h-1 appearance-none bg-transparent slider"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderRange;
