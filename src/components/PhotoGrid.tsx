import React from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { usePhotoStore } from '../store/usePhotoStore';
import { PhotoCard } from './photo/PhotoCard';
import { Photo } from '../types';

const SortablePhoto = ({ photo, index }: { photo: Photo; index: number }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: photo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-move"
    >
      <PhotoCard photo={photo} index={index} />
    </div>
  );
};

export const PhotoGrid: React.FC = () => {
  const { photos, reorderPhotos } = usePhotoStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = photos.findIndex((p) => p.id === active.id);
      const newIndex = photos.findIndex((p) => p.id === over.id);
      reorderPhotos(oldIndex, newIndex);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={photos} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <SortablePhoto key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};