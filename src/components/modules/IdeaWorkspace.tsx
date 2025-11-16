import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../cofo/GlassCard';

interface IdeaWorkspaceProps {
  selectedIdea: string;
  initialModule?: 'business' | 'people' | 'money' | 'action';
  onNavigate: (view: string) => void;
}

/**
 * Idea工作区组件
 * 展示事人钱行的详细工作区布局
 * 【可插入Figma设计的接入点】
 */
export const IdeaWorkspace: React.FC<IdeaWorkspaceProps> = ({ 
  selectedIdea, 
  initialModule = 'business', 
  onNavigate 
}) => {
  // 不同模块的标签页配置
  const moduleTabs = {
    business: ['产品/服务', '市场/赛道', '目标/方式', '价值/路线', '市场竞争力'],
    people: ['愿景与准则', '能力与策略', '伙伴评估与磨合'],
    money: ['智能财务模型', '公司起点', '资产与风险', '融资策略'],
    action: ['规划与行动', '里程碑', '执行追踪'],
  };
  
  const [activeTab, setActiveTab] = useState(moduleTabs[initialModule]?.[0] || '产品/服务');

  const currentTabs = moduleTabs[initialModule] || [];
  
  // 模块名称映射
  const moduleNames = {
    business: '事',
    people: '人',
    money: '钱',
    action: '行'
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* 内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部标题栏 */}
        <div className="p-4 bg-white/60 backdrop-blur-sm border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('Idea')}
              className="p-2 rounded-lg hover:bg-white/50 transition-colors"
              title="返回Idea主页"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <h2 className="text-2xl text-gray-800">
              {selectedIdea || 'Idea Summary'}
            </h2>
          </div>
        </div>

        {/* 标签页导航 */}
        <div className="px-4 pt-4 bg-white/40 backdrop-blur-sm border-b border-gray-200">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-t-lg whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white shadow-md border-t-2 border-blue-400 text-gray-900'
                    : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 主内容区域 */}
        <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
          <GlassCard className="p-8 min-h-[400px]">
            <h3 className="text-xl text-gray-700 mb-4">
              {moduleNames[initialModule]} - {activeTab}
            </h3>
            <p className="text-gray-600">
              核心功能区
            </p>
            <div className="mt-6 text-gray-500 italic">
              这里将接入 {activeTab} 的具体功能模块
            </div>
            <div className="mt-6 p-4 bg-green-50/50 rounded-lg border-2 border-dashed border-green-200">
              <p className="text-sm text-gray-600">
                💡 <strong>Figma设计接入点：</strong>在此处导入您的Figma设计组件，替换占位内容
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
