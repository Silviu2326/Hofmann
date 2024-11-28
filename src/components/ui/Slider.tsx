import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  step = 1,
}) => {
  return (
    <SliderPrimitive.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      value={[value]}
      onValueChange={([newValue]) => onChange(newValue)}
      max={max}
      min={min}
      step={step}
    >
      <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-1">
        <SliderPrimitive.Range className="absolute bg-indigo-600 rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-4 h-4 bg-white border border-gray-300 shadow-sm rounded-full hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" />
    </SliderPrimitive.Root>
  );
};