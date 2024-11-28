import React, { useState } from 'react';
import { Upload, Video, X } from 'lucide-react';

interface VideoPanelProps {
  onVideoUpload: (videoName: string) => void;
}

export const VideoPanel: React.FC<VideoPanelProps> = ({ onVideoUpload }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoName, setVideoName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      setShowNameInput(true);
    }
  };

  const handleSubmit = () => {
    if (videoName.trim()) {
      onVideoUpload(videoName);
      setVideoFile(null);
      setVideoName('');
      setShowNameInput(false);
    }
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Video className="w-5 h-5 mr-2" />
          Añadir Video
        </h2>
      </div>

      <div className="p-4">
        {!showNameInput ? (
          <div className="text-center">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer inline-flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">
                Haz clic para subir un video
              </span>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {videoFile?.name}
              </span>
              <button
                onClick={() => {
                  setVideoFile(null);
                  setShowNameInput(false);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="video-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre del video
              </label>
              <input
                type="text"
                id="video-name"
                value={videoName}
                onChange={(e) => setVideoName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Introduce un nombre para el video"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!videoName.trim()}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Añadir Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};