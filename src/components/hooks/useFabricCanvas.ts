import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

export const useFabricCanvas = (canvasId: string) => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvasElement = document.getElementById(
      canvasId
    ) as HTMLCanvasElement;
    if (!canvasElement) return;

    const newCanvas = new fabric.Canvas(canvasId, {
      width: canvasElement.parentElement?.clientWidth || 800,
      height: canvasElement.parentElement?.clientHeight || 600,
      backgroundColor: '#ffffff',
      preserveObjectStacking: true,
    });

    setCanvas(newCanvas);

    const handleResize = () => {
      if (canvasElement.parentElement) {
        newCanvas.setDimensions({
          width: canvasElement.parentElement.clientWidth,
          height: canvasElement.parentElement.clientHeight,
        });
        newCanvas.renderAll();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      newCanvas.dispose();
    };
  }, [canvasId]);

  return {
    canvas,
  };
};
