import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage';
import { EditorPage } from './pages/EditorPage';
import { TemplateDetailPage } from './pages/TemplateDetailPage';
import { CalendarPage } from './pages/CalendarPage';
import { CalendarTemplatePage } from './pages/CalendarTemplatePage';
import { CalendarProductPage } from './pages/CalendarProductPage';
import { AlbumCatalogPage } from './pages/AlbumCatalogPage';
import { AlbumDetailPage } from './pages/AlbumDetailPage';
import { UploadPage } from './pages/UploadPage';
import { PhotoEditor } from './components/photo/PhotoEditor';
import { Header } from './components/layout/Header';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/template/:templateId" element={<TemplateDetailPage />} />
        <Route path="/editor/:templateId" element={<EditorPage />} />
        <Route path="/editor/new-album" element={<EditorPage />} />
        <Route path="/editor/photo/:photoId" element={<PhotoEditor />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/calendarios" element={<CalendarPage />} />
        <Route path="/calendarios/:calendarId" element={<CalendarTemplatePage />} />
        <Route path="/calendarios/:calendarId/:templateId" element={<CalendarProductPage />} />
        <Route path="/album-fotos" element={<AlbumCatalogPage />} />
        <Route path="/album-fotos/:id" element={<AlbumDetailPage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;