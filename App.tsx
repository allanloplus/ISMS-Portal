import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import FormViewer from './pages/FormViewer';
import { FormItem } from './types';

// Simple router state for SPA feel without complex routing library dependency for this specific task
type ViewState = 'dashboard' | 'viewer';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('dashboard');
  const [selectedItem, setSelectedItem] = useState<FormItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleFormSelect = (item: FormItem, categoryTitle: string) => {
    setSelectedItem(item);
    setSelectedCategory(categoryTitle);
    setView('viewer');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedItem(null);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {view === 'dashboard' ? (
        <Dashboard onFormSelect={handleFormSelect} />
      ) : (
        selectedItem && (
          <FormViewer 
            item={selectedItem} 
            categoryTitle={selectedCategory} 
            onBack={handleBack} 
          />
        )
      )}
    </div>
  );
};

export default App;
