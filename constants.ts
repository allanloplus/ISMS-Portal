import { Category } from './types';

// Helper to create consistent categories
export const SPECIAL_SECTIONS: Category[] = [
  {
    id: 'user-service',
    title: '使用者資訊服務系統',
    colorClass: 'bg-blue-50',
    headerColorClass: 'border-blue-200 text-blue-800',
    items: [
      { id: 'us-1', name: '資訊服務需求申請' },
      { id: 'us-2', name: '資訊異常通報及使用者問題回報' },
      { id: 'us-3', name: '專案管理' }
    ]
  },
  {
    id: 'tisax',
    title: 'TISAX合規作業',
    colorClass: 'bg-green-50',
    headerColorClass: 'border-green-200 text-green-800',
    items: [
      { id: 'tisax-1', name: 'TISAX Information Security' },
      { id: 'tisax-2', name: 'TISAX_8_Prototype Protection' }
    ]
  },
  {
    id: 'core',
    title: 'ISMS核心作業',
    colorClass: 'bg-gray-100',
    headerColorClass: 'border-gray-300 text-gray-700',
    items: [
      { id: 'core-1', name: '01_資訊資產清冊及風險評鑑作業(線上審查)' },
      { id: 'core-2', name: '02_變更管理' },
      { id: 'core-3', name: '03_備份作業' },
      { id: 'core-4', name: 'IS-L4-15矯正處理單' }
    ]
  }
];

export const MAIN_GRID: Category[] = [
  {
    id: 'A01',
    title: 'A01_治理',
    colorClass: 'bg-yellow-50',
    headerColorClass: 'border-yellow-200 text-yellow-800',
    items: [
      { id: 'a01-1', name: '01_流程盤點作業' },
      { id: 'a01-2', name: '02_全景分析作業' },
      { id: 'a01-3', name: '03_資安目標設定' },
      { id: 'a01-4', name: 'IS-L4-02 資訊安全委員會人員名單' },
      { id: 'a01-5', name: 'IS-L4-03 內外部連絡清冊' },
      { id: 'a01-6', name: 'IS-L4-04 溝通規劃表' },
      { id: 'a01-7', name: 'IS-L4-05 人員角色權責及職能需求表' },
      { id: 'a01-8', name: '09_專案安全管理' },
      { id: 'a01-9', name: 'IS-L4-06 文件修訂建議表' }
    ]
  },
  {
    id: 'A02',
    title: 'A02_人資安全',
    colorClass: 'bg-blue-50',
    headerColorClass: 'border-blue-200 text-blue-800',
    items: [
      { id: 'a02-1', name: 'IS-L4-07 保密切結書' },
      { id: 'a02-2', name: 'IS-L4-08 敏感職務清單' },
      { id: 'a02-3', name: 'IS-L4-09 文件與資訊資產交接清單' },
      { id: 'a02-4', name: 'IS-L4-10 離職切結書' },
      { id: 'a02-5', name: 'IS-L4-11 資訊安全管理訓練計畫' }
    ]
  },
  {
    id: 'A03',
    title: 'A03_資訊保護',
    colorClass: 'bg-purple-50',
    headerColorClass: 'border-purple-200 text-purple-800',
    items: [
      { id: 'a03-1', name: 'IS-L4-30 版權軟體清冊' },
      { id: 'a03-2', name: '資料機密分級及機敏性職務一覽表' },
      { id: 'a03-3', name: 'IS-L4-55 資料庫資料異動申請單' },
      { id: 'a03-4', name: 'IS-L4-56 系統測試資料申請單' }
    ]
  },
  {
    id: 'A04',
    title: 'A04_資產管理',
    colorClass: 'bg-orange-50',
    headerColorClass: 'border-orange-200 text-orange-800',
    items: [
      { id: 'a04-1', name: 'IS-L4-28 資訊資產進出及異動紀錄表' },
      { id: 'a04-2', name: 'IS-L4-29 設備報廢資料清除確認單' },
      { id: 'a04-3', name: 'IS-L4-32 外對內及設備連網使用申請表(線上申請)' }
    ]
  },
  {
    id: 'A05',
    title: 'A05_存取管理',
    colorClass: 'bg-green-50',
    headerColorClass: 'border-green-200 text-green-800',
    items: [
      { id: 'a05-1', name: 'IS-L4-24 權限帳號檢視紀錄單' },
      { id: 'a05-2', name: 'IS-L4-25 特權帳號清冊(線上審查)' },
      { id: 'a05-3', name: '員工識別卡申請/註銷/異動' },
      { id: 'a05-4', name: 'IS-L4-23 系統帳號及權限申請單' }
    ]
  },
  {
    id: 'A06',
    title: 'A06_保全組態',
    colorClass: 'bg-red-50',
    headerColorClass: 'border-red-200 text-red-800',
    items: [
      { id: 'a06-1', name: 'IS-L4-37 金鑰憑證管理紀錄表' },
      { id: 'a06-2', name: 'IS-L4-38 組態安全管理表' },
      { id: 'a06-3', name: 'IS-L4-31 核准安裝之版權與免費軟體清單' }
    ]
  },
  {
    id: 'A07',
    title: 'A07_實體安全',
    colorClass: 'bg-green-50',
    headerColorClass: 'border-green-200 text-green-800',
    items: [
      { id: 'a07-1', name: '安全區域佈置圖、機房工作日誌、設備維護保養紀錄' },
      { id: 'a07-2', name: 'IS-L4-26 人員進出登記表' },
      { id: 'a07-3', name: 'IS-L4-27 機房授權人員名單' }
    ]
  },
  {
    id: 'A08',
    title: 'A08_威脅與弱點管理',
    colorClass: 'bg-stone-50',
    headerColorClass: 'border-stone-200 text-stone-800',
    items: [
      { id: 'a08-1', name: 'IS-L4-44 資訊安全情資管理表' },
      { id: 'a08-2', name: '弱掃報告' },
      { id: 'a08-3', name: '弱掃處理計畫及進度' }
    ]
  },
  {
    id: 'A09',
    title: 'A09_應用程式安全',
    colorClass: 'bg-sky-50',
    headerColorClass: 'border-sky-200 text-sky-800',
    items: [
      { id: 'a09-1', name: 'IS-L4-57 應用系統維護申請單' },
      { id: 'a09-2', name: 'IS-L4-58 新系統開發需求評估單' },
      { id: 'a09-3', name: 'IS-L4-59 系統分析文件確認單' },
      { id: 'a09-4', name: 'IS-L4-60 系統開發測試及上線紀錄單' }
    ]
  },
  {
    id: 'A10',
    title: 'A10_系統與網路安全',
    colorClass: 'bg-amber-50',
    headerColorClass: 'border-amber-200 text-amber-800',
    items: [
      { id: 'a10-1', name: '網路架構圖' },
      { id: 'a10-2', name: 'IS-L4-39 備援等級規劃一覽表' },
      { id: 'a10-3', name: 'IS-L4-33 防火牆政策與日誌檢視表' }
    ]
  },
  {
    id: 'A11',
    title: 'A11_供應者關係安全',
    colorClass: 'bg-yellow-50',
    headerColorClass: 'border-yellow-200 text-yellow-800',
    items: [
      { id: 'a11-1', name: 'IS-L4-40 外部IT及雲服務清單' },
      { id: 'a11-2', name: 'IS-L4-41 委外供應商評鑑表' },
      { id: 'a11-3', name: 'IS-L4-42 NDA(廠商)' },
      { id: 'a11-4', name: 'IS-L4-43 NDA(廠商個人)' }
    ]
  },
  {
    id: 'A12',
    title: 'A12_資安事件管理',
    colorClass: 'bg-purple-50',
    headerColorClass: 'border-purple-200 text-purple-800',
    items: [
      { id: 'a12-1', name: 'IS-L4-46 資安事故緊急處理小組名單' },
      { id: 'a12-2', name: 'IS-L4-45 資通安全事故通報處理單(線上回報)' }
    ]
  },
  {
    id: 'A13',
    title: 'A13_持續性',
    colorClass: 'bg-lime-50',
    headerColorClass: 'border-lime-200 text-lime-800',
    items: [
      { id: 'a13-1', name: '3年BCP演練計畫' },
      { id: 'a13-2', name: 'IS-L4-47 營運衝擊分析表' },
      { id: 'a13-3', name: 'IS-L4-48 營運持續計畫' },
      { id: 'a13-4', name: 'IS-L4-49 營運持續演練計畫' },
      { id: 'a13-5', name: 'IS-L4-50 營運持續演練紀錄表' }
    ]
  },
  {
    id: 'A14',
    title: 'A14_資訊安全保證',
    colorClass: 'bg-indigo-50',
    headerColorClass: 'border-indigo-200 text-indigo-800',
    items: [
      { id: 'a14-1', name: 'IS-L4-16 ISMS有效性評估表' },
      { id: 'a14-2', name: '內外部資安稽核作業管理(線上)' },
      { id: 'a14-3', name: 'IS-L4-12 ISMS內部稽核計畫' },
      { id: 'a14-4', name: 'IS-L4-13 ISMS內部稽核查檢表' },
      { id: 'a14-5', name: 'IS-L4-14 ISMS內部稽核報告' },
      { id: 'a14-6', name: '管理審查相關資料' },
      { id: 'a14-7', name: '外部稽核相關資料' }
    ]
  },
  {
    id: 'A15',
    title: 'A15_遵循性',
    colorClass: 'bg-pink-50',
    headerColorClass: 'border-pink-200 text-pink-800',
    items: [
      { id: 'a15-1', name: 'IS-L4-52 外來文件一覽表' },
      { id: 'a15-2', name: 'IS-L4-53 資安參考法規清單' },
      { id: 'a15-3', name: 'IS-L4-54 資安列管合約清單' }
    ]
  }
];
