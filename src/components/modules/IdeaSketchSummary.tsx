import React from 'react';
import { Feather } from 'lucide-react';
import { GlassCard } from '../cofo/GlassCard';
import { COLORS } from '../../lib/design-system';

interface IdeaSketchSummaryProps {
  onEnterWorkspace?: (ideaName: string) => void;
}

/**
 * Idea 速写/概要区域组件
 * 显示项目核心摘要和快捷导航
 */
export const IdeaSketchSummary: React.FC<IdeaSketchSummaryProps> = ({ onEnterWorkspace }) => {
  const tags = ['产品与服务', '商业壁垒', '目标用户', '商业模式', '市场潜力'];

  return (
    <GlassCard className="p-6 mb-8">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
        <h2 className={`text-2xl ${COLORS.primary} flex items-center`}>
          <Feather size={20} className="mr-2" />
          项目速写
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => onEnterWorkspace && onEnterWorkspace('Co-Fo平台')}
            className="px-4 py-2 text-sm rounded-lg transition bg-blue-500 text-white hover:bg-blue-600 shadow-md"
          >
            进入工作区
          </button>
          <button className="px-3 py-1 text-sm rounded-full transition bg-yellow-400 text-yellow-900 hover:opacity-90">
            编辑概要
          </button>
        </div>
      </div>
      
      {/* 概要文本 */}
      <p className="text-gray-700 mb-4 leading-relaxed bg-gray-50/50 p-3 rounded-lg border border-gray-100 italic">
        [Idea 核心摘要：此区域将展示 AI 自动生成的项目精炼概要，如 "Co-Fo 平台旨在为早期创业者提供一站式的AI驱动能力评估和战略规划服务，核心优势在于人与事的深度融合。"]
      </p>

      {/* 快捷导航标签 */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <button 
            key={index}
            className="text-sm px-3 py-1 rounded-full border transition-all duration-200 
                       text-emerald-600 bg-emerald-50/50 border-emerald-300 hover:bg-emerald-100/70"
          >
            {tag}
          </button>
        ))}
      </div>
    </GlassCard>
  );
};
