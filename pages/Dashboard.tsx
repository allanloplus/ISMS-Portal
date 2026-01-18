import React from 'react';
import { MAIN_GRID, SPECIAL_SECTIONS } from '../constants';
import PortalCard from '../components/PortalCard';
import { FormItem } from '../types';

interface DashboardProps {
  onFormSelect: (item: FormItem, categoryTitle: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onFormSelect }) => {
  // Split special sections for layout
  const userService = SPECIAL_SECTIONS.find(s => s.id === 'user-service');
  const tisax = SPECIAL_SECTIONS.find(s => s.id === 'tisax');
  const core = SPECIAL_SECTIONS.find(s => s.id === 'core');

  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-6 space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">ISMS資安管理作業Portal</h1>
        <p className="text-gray-500 mt-2">Information Security Management System Portal</p>
      </header>

      {/* Top Section: User Services & TISAX */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          {userService && (
            <PortalCard 
              category={userService} 
              onItemClick={onFormSelect} 
              className="h-full"
            />
          )}
        </div>
        <div className="md:col-span-2">
          {tisax && (
            <PortalCard 
              category={tisax} 
              onItemClick={onFormSelect}
              className="h-full"
            />
          )}
        </div>
      </div>

      {/* Core Operations - Full Width wrapper but centered max-width visually if needed, but grid says full row */}
      <div className="grid grid-cols-1">
          {core && (
            <div className={`rounded-lg border shadow-sm ${core.colorClass}`}>
                <div className={`px-4 py-2 border-b font-bold ${core.headerColorClass} bg-opacity-50 bg-white`}>
                    {core.title}
                </div>
                <div className="p-4 flex flex-wrap gap-4 justify-around">
                     {core.items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onFormSelect(item, core.title)}
                            className="flex-1 min-w-[200px] bg-white bg-opacity-80 hover:bg-opacity-100 hover:shadow-md p-3 rounded border border-gray-200 text-center font-medium text-gray-700 transition-all"
                        >
                            {item.name}
                        </button>
                     ))}
                </div>
            </div>
          )}
      </div>

      {/* Main Grid A01-A15 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {MAIN_GRID.map((category) => (
          <PortalCard
            key={category.id}
            category={category}
            onItemClick={onFormSelect}
          />
        ))}
      </div>
      
      <footer className="mt-12 text-center text-gray-400 text-sm py-6 border-t">
        &copy; {new Date().getFullYear()} ISMS Consultant Portal System. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
