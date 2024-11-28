import React, { useState } from 'react';
import { EditorToolbar } from '../components/editor/EditorToolbar';
import { AlbumCanvas } from '../components/editor/AlbumCanvas';
import { BookMinimal } from '../components/editor/BookMinimal';
import { TopSidebar } from '../components/editor/TopSidebar';
import { Topbar } from '../components/editor/Topbar';
import { PageImages } from '../types/album';

export function EditorPage() {
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 24;
  const [pages, setPages] = useState<PageImages[]>(
    Array.from({ length: totalPages / 2 }, () => ({
      leftImage: null,
      rightImage: null,
    }))
  );
  const [videoName, setVideoName] = useState<string | null>(null);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleUndo = () => console.log('Undo');
  const handleRedo = () => console.log('Redo');

  const handleImageUpdate = (pageIndex: number, side: 'left' | 'right', imageUrl: string) => {
    setPages(prevPages => {
      const newPages = [...prevPages];
      if (!newPages[pageIndex]) {
        newPages[pageIndex] = { leftImage: null, rightImage: null };
      }
      newPages[pageIndex] = {
        ...newPages[pageIndex],
        [side === 'left' ? 'leftImage' : 'rightImage']: imageUrl,
      };
      return newPages;
    });
  };

  const handleVideoUpload = (name: string) => {
    setVideoName(name);
  };

  return (
    <div className="h-screen flex flex-col">
      <TopSidebar 
        price={24.00}
        originalPrice={47.99}
        title="Álbum de fotos vertical grande - tapa acolchada 21x28 cm"
      />
      <div className="flex-1 flex overflow-hidden">
        <EditorToolbar 
          zoom={zoom}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onVideoUpload={handleVideoUpload}
        />
        <div className="relative flex-1 flex flex-col">
          <Topbar
            zoom={zoom}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />
          <AlbumCanvas
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            pages={pages}
            onImageUpdate={handleImageUpdate}
            videoName={videoName}
            setVideoName={setVideoName}
          />
        </div>
      </div>
      <BookMinimal
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        pages={pages}
      />
    </div>
  );
}
