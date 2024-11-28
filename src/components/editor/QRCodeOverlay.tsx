import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeOverlayProps {
  videoName: string;
}

export const QRCodeOverlay: React.FC<QRCodeOverlayProps> = ({ videoName }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-white p-3 rounded-lg shadow-lg">
      <QRCodeSVG
        value={`video://${videoName}`}
        size={80}
        level="H"
        includeMargin={true}
      />
      <span className="mt-2 text-sm font-medium text-gray-700">{videoName}</span>
    </div>
  );
};