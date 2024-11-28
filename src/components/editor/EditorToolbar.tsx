import React, { useState } from 'react';
import {
  Image,
  Layout,
  Palette,
  Star,
  Frame,
  Sparkles,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Undo,
  Redo,
  Video,
} from 'lucide-react';
import { PhotosPanel } from './panels/PhotosPanel';
import { DesignsPanel } from './panels/DesignsPanel';
import { BackgroundPanel } from './panels/BackgroundPanel';
import { StickersPanel } from './panels/StickersPanel';
import { FramesPanel } from './panels/FramesPanel';
import { MasksPanel } from './panels/MasksPanel';
import { VideoPanel } from './panels/VideoPanel';

type PanelType =
  | 'photos'
  | 'designs'
  | 'background'
  | 'stickers'
  | 'frames'
  | 'masks'
  | 'video'
  | null;

interface EditorToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onUndo: () => void;
  onRedo: () => void;
  zoom: number;
  onVideoUpload: (videoName: string) => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onZoomIn,
  onZoomOut,
  onUndo,
  onRedo,
  zoom,
  onVideoUpload,
}) => {
  const [activePanel, setActivePanel] = useState<PanelType>(null);

  const togglePanel = (panel: PanelType) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="flex">
      <div className="w-20 bg-white border-r flex flex-col items-center py-4">
        <div className="space-y-8 w-full">
          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'photos' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('photos')}
            >
              <Image className="w-6 h-6" />
              <span className="text-xs">Fotos</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'video' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('video')}
            >
              <Video className="w-6 h-6" />
              <span className="text-xs">Video</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'designs' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('designs')}
            >
              <Layout className="w-6 h-6" />
              <span className="text-xs">Diseños</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'background' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('background')}
            >
              <Palette className="w-6 h-6" />
              <span className="text-xs">Fondo</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'stickers' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('stickers')}
            >
              <Star className="w-6 h-6" />
              <span className="text-xs">Pegatinas</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'frames' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('frames')}
            >
              <Frame className="w-6 h-6" />
              <span className="text-xs">Marcos</span>
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100 ${
                activePanel === 'masks' ? 'bg-gray-100' : ''
              }`}
              onClick={() => togglePanel('masks')}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-xs">Máscaras</span>
            </button>
          </div>

          <div className="border-t pt-4 space-y-2">
            <button
              onClick={onZoomIn}
              className="w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100"
            >
              <ZoomIn className="w-6 h-6" />
            </button>
            <div className="text-xs text-center">{Math.round(zoom * 100)}%</div>
            <button
              onClick={onZoomOut}
              className="w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100"
            >
              <ZoomOut className="w-6 h-6" />
            </button>
          </div>

          <div className="border-t pt-4 space-y-2">
            <button
              onClick={onUndo}
              className="w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100"
            >
              <Undo className="w-6 h-6" />
            </button>
            <button
              onClick={onRedo}
              className="w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100"
            >
              <Redo className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => setActivePanel(null)}
            className="w-full py-2 px-4 flex flex-col items-center gap-1 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-xs">Ocultar</span>
          </button>
        </div>
      </div>

      {activePanel === 'photos' && <PhotosPanel />}
      {activePanel === 'video' && <VideoPanel onVideoUpload={onVideoUpload} />}
      {activePanel === 'designs' && <DesignsPanel />}
      {activePanel === 'background' && <BackgroundPanel />}
      {activePanel === 'stickers' && <StickersPanel />}
      {activePanel === 'frames' && <FramesPanel />}
      {activePanel === 'masks' && <MasksPanel />}
    </div>
  );
};
