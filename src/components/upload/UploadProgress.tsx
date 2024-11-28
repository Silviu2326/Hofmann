import React from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface UploadProgressProps {
  totalFiles: number;
  uploadedFiles: number;
  failedFiles: number;
  isUploading: boolean;
}

export const UploadProgress: React.FC<UploadProgressProps> = ({
  totalFiles,
  uploadedFiles,
  failedFiles,
  isUploading,
}) => {
  const progress = (uploadedFiles / totalFiles) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Progreso de subida</h3>
        {isUploading && (
          <div className="flex items-center text-blue-600">
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            <span className="text-sm">Subiendo...</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <div className="flex items-center text-green-600">
            <CheckCircle2 className="w-4 h-4 mr-1" />
            <span>{uploadedFiles} completadas</span>
          </div>
          {failedFiles > 0 && (
            <div className="flex items-center text-red-600">
              <XCircle className="w-4 h-4 mr-1" />
              <span>{failedFiles} fallidas</span>
            </div>
          )}
          <span className="text-gray-500">
            {uploadedFiles} de {totalFiles} fotos
          </span>
        </div>
      </div>
    </div>
  );
};