import React from 'react';
import {
  Save,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Copy,
  Scissors,
  Layers,
  Image,
  FileText,
} from 'lucide-react';

interface TopbarProps {
  onUndo: () => void;
  onRedo: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoom: number;
}

export const Topbar: React.FC<TopbarProps> = ({
  onUndo,
  onRedo,
  onZoomIn,
  onZoomOut,
  zoom,
}) => {
  const buttonClass =
    'p-2 hover:bg-gray-100 rounded-lg transition-all duration-150 flex items-center gap-1 relative group';
  const dividerClass = 'w-px h-6 bg-gray-200';
  const iconClass =
    'w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-150';

  const TooltipWrapper: React.FC<{
    tooltip: string;
    children: React.ReactNode;
  }> = ({ tooltip, children }) => (
    <div className="relative">
      {children}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none">
        {tooltip}
      </div>
    </div>
  );

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2 shadow-sm">
      <div className="flex items-center gap-1">
        <TooltipWrapper tooltip="Guardar (Ctrl+S)">
          <button
            className={`${buttonClass} text-blue-600 hover:bg-blue-50 hover:text-blue-700`}
          >
            <Save className="w-5 h-5" />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltip="Deshacer (Ctrl+Z)">
          <button onClick={onUndo} className={buttonClass}>
            <Undo className={iconClass} />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltip="Rehacer (Ctrl+Y)">
          <button onClick={onRedo} className={buttonClass}>
            <Redo className={iconClass} />
          </button>
        </TooltipWrapper>
      </div>

      <div className={dividerClass} />

      <div className="flex items-center gap-1">
        <TooltipWrapper tooltip="Copiar (Ctrl+C)">
          <button className={buttonClass}>
            <Copy className={iconClass} />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltip="Cortar (Ctrl+X)">
          <button className={buttonClass}>
            <Scissors className={iconClass} />
          </button>
        </TooltipWrapper>
      </div>

      <div className={dividerClass} />

      <div className="flex items-center gap-1">
        <TooltipWrapper tooltip="Capas">
          <button className={buttonClass}>
            <Layers className={iconClass} />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltip="Imágenes">
          <button className={buttonClass}>
            <Image className={iconClass} />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltip="Texto">
          <button className={buttonClass}>
            <FileText className={iconClass} />
          </button>
        </TooltipWrapper>
      </div>

      <div className={dividerClass} />

      <div className="flex items-center gap-1 bg-gray-50 rounded-lg p-1">
        <TooltipWrapper tooltip="Reducir zoom">
          <button
            onClick={onZoomOut}
            className={`${buttonClass} hover:bg-white`}
            disabled={zoom <= 0.5}
          >
            <ZoomOut
              className={`${iconClass} ${zoom <= 0.5 ? 'opacity-50' : ''}`}
            />
          </button>
        </TooltipWrapper>
        <span className="text-sm font-medium text-gray-700 min-w-[3rem] text-center select-none">
          {Math.round(zoom * 100)}%
        </span>
        <TooltipWrapper tooltip="Aumentar zoom">
          <button
            onClick={onZoomIn}
            className={`${buttonClass} hover:bg-white`}
            disabled={zoom >= 2}
          >
            <ZoomIn
              className={`${iconClass} ${zoom >= 2 ? 'opacity-50' : ''}`}
            />
          </button>
        </TooltipWrapper>
      </div>
    </div>
  );
};
