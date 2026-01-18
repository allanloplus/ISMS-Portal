import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2, Printer, CheckCircle, FileText } from 'lucide-react';
import { FormItem, GeneratedContent } from '../types';
import { generateFormContent } from '../services/geminiService';

interface FormViewerProps {
  item: FormItem;
  categoryTitle: string;
  onBack: () => void;
}

const FormViewer: React.FC<FormViewerProps> = ({ item, categoryTitle, onBack }) => {
  const [activeTab, setActiveTab] = useState<'template' | 'example'>('template');
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await generateFormContent(item.name, categoryTitle);
        if (isMounted) setContent(result);
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    return () => { isMounted = false; };
  }, [item, categoryTitle]);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 min-h-screen flex flex-col">
      {/* Nav */}
      <button 
        onClick={onBack}
        className="self-start mb-6 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        返回 Portal 首頁
      </button>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 border-b px-6 py-4">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">{categoryTitle}</p>
                </div>
                 <div className="flex space-x-2">
                    <button 
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
                    >
                        <Printer className="w-4 h-4" />
                        列印
                    </button>
                 </div>
            </div>
            
            {!loading && content && (
                <p className="mt-4 text-gray-600 text-sm border-l-4 border-blue-400 pl-3">
                    {content.description}
                </p>
            )}
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50/50">
            <button
                onClick={() => setActiveTab('template')}
                className={`flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'template' 
                    ? 'border-blue-500 text-blue-600 bg-white' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
            >
                <span className="flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    空白表單 (Template)
                </span>
            </button>
            <button
                onClick={() => setActiveTab('example')}
                className={`flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'example' 
                    ? 'border-green-500 text-green-600 bg-white' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
            >
                 <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    範例紀錄 (Example Record)
                </span>
            </button>
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1 bg-white min-h-[500px]">
            {loading ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
                    <p className="text-sm">正在運用 AI 產生表單內容與範例數據...</p>
                    <p className="text-xs text-gray-400">Powered by Gemini 2.5</p>
                </div>
            ) : content ? (
                <div className="prose max-w-none print:prose-sm">
                   {/* We use dangerouslySetInnerHTML because we trust the AI output structure defined in prompt, and this is a demo/tool */}
                   <div 
                     className="preview-content border p-8 shadow-sm bg-white min-h-[800px]"
                     dangerouslySetInnerHTML={{ 
                        __html: activeTab === 'template' ? content.template : content.example 
                     }} 
                   />
                </div>
            ) : (
                <div className="text-center text-red-500 py-10">
                    載入失敗，請稍後再試。
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FormViewer;
