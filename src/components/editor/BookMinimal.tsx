import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageImages } from '../../types/album';

interface BookMinimalProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pages: PageImages[];
}

export const BookMinimal: React.FC<BookMinimalProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  pages,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="h-32 bg-gray-100 border-t border-gray-200 flex items-center px-4">
      <button
        onClick={() => handleScroll('left')}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-x-auto flex gap-2 px-4 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {pages.map((page, index) => {
          const pageNumber = index * 2;
          const isActive = currentPage === pageNumber;

          return (
            <button
              key={index}
              onClick={() => onPageChange(pageNumber)}
              className={`flex-shrink-0 group relative ${
                isActive ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="w-32 h-24 bg-white rounded-lg shadow-sm overflow-hidden flex">
                <div className="w-1/2 border-r border-gray-100 overflow-hidden">
                  {page.leftImage && (
                    <img
                      src={page.leftImage}
                      alt={`Page ${pageNumber}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="w-1/2 overflow-hidden">
                  {page.rightImage && (
                    <img
                      src={page.rightImage}
                      alt={`Page ${pageNumber + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-gray-500 group-hover:text-gray-700">
                {pageNumber}-{pageNumber + 1}
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handleScroll('right')}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
