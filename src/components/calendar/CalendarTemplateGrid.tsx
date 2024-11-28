import React from 'react';
import { CalendarType } from '../../types/calendar';
import { CalendarTemplateCard } from './CalendarTemplateCard';
import { wallCalendarTemplates } from '../../data/wallCalendarTemplates';
import { deskCalendarTemplates } from '../../data/deskCalendarTemplates';
import { familyCalendarTemplates } from '../../data/familyCalendarTemplates';

interface CalendarTemplateGridProps {
  calendar: CalendarType;
  selectedSize: string;
  selectedStyle: string;
}

export const CalendarTemplateGrid: React.FC<CalendarTemplateGridProps> = ({
  calendar,
  selectedSize,
  selectedStyle,
}) => {
  const getTemplates = () => {
    switch (calendar.id) {
      case 'wall':
        return wallCalendarTemplates;
      case 'desk':
        return deskCalendarTemplates;
      case 'family':
        return familyCalendarTemplates;
      default:
        return [];
    }
  };

  const templates = getTemplates();
  const filteredTemplates = templates.filter(template => {
    if (selectedStyle === 'all') return true;
    return template.theme === selectedStyle;
  });

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">
        Mostrando {filteredTemplates.length} diseños
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <CalendarTemplateCard
            key={template.id}
            template={template}
            calendarId={calendar.id}
            size={calendar.sizes.find((s) => s.id === selectedSize)}
            style={calendar.styles.find((s) => s.id === selectedStyle)}
          />
        ))}
      </div>
    </div>
  );
};