import React from 'react';

interface Feature {
  title: string;
  description: string[];
  image: string;
}

interface AlbumFeaturesProps {
  features: Feature[];
}

export const AlbumFeatures: React.FC<AlbumFeaturesProps> = ({ features }) => {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Dale los toques finales con estos extras
      </h2>
      
      {features.map((feature, index) => (
        <div key={index} className="relative">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full rounded-lg"
          />
          <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg max-w-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <div className="space-y-2">
              {feature.description.map((desc, i) => (
                <p key={i} className="text-gray-700">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};