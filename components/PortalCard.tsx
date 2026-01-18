import React from 'react';
import { Category, FormItem } from '../types';
import { FileText } from 'lucide-react';

interface PortalCardProps {
  category: Category;
  onItemClick: (item: FormItem, categoryTitle: string) => void;
  className?: string;
}

const PortalCard: React.FC<PortalCardProps> = ({ category, onItemClick, className }) => {
  return (
    <div className={`flex flex-col h-full rounded-lg shadow-sm border border-gray-100 overflow-hidden ${category.colorClass} ${className}`}>
      {/* Header */}
      <div className={`px-3 py-2 border-b font-bold text-sm md:text-base ${category.headerColorClass} bg-opacity-50 bg-white`}>
        {category.title}
      </div>
      
      {/* Body */}
      <div className="p-2 flex-1 flex flex-col gap-2">
        {category.items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item, category.title)}
            className="flex items-start text-left bg-white bg-opacity-80 hover:bg-opacity-100 hover:shadow-md transition-all duration-200 p-2 rounded border border-transparent hover:border-gray-200 group"
          >
            <FileText className="w-4 h-4 mt-0.5 mr-2 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-700 font-medium leading-tight">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortalCard;
