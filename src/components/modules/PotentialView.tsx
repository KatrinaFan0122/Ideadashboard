import React from 'react';
import { GlassCard } from '../cofo/GlassCard';

interface PotentialViewProps {
  viewName: string | null;
  subModules: string[];
}

/**
 * 可？模块视图
 * 【可插入Figma设计的接入点】
 */
export const PotentialView: React.FC<PotentialViewProps> = ({ viewName, subModules }) => {
  // 显示子功能详情页
  if (viewName) {
    return (
      <div className="p-4 md:p-8">
        <h1 className="text-4xl text-gray-900 mb-6">{viewName}</h1>
        <GlassCard className="p-6">
          <p className="text-xl text-gray-700 mb-4">
            {viewName} - 功能区
          </p>
          <p className="text-gray-600">
            这里将展示 {viewName} 的具体内容和功能。
          </p>
          <div className="mt-6 p-4 bg-purple-50/50 rounded-lg border-2 border-dashed border-purple-200">
            <p className="text-sm text-gray-600">
              💡 <strong>Figma设计接入点：</strong>在此处导入您的Figma设计组件
            </p>
          </div>
        </GlassCard>
      </div>
    );
  }
  
  // 显示模块主页概览
  return (
    <div className="p-4 md:p-8 space-y-8">
      <h1 className="text-4xl text-gray-900 mb-6">可？ - 潜力评估</h1>
      
      <GlassCard className="p-6 mb-6">
        <p className="text-xl text-gray-700 mb-4">
          AI驱动的创始人潜力评估体系
        </p>
        <p className="text-gray-600">
          通过多维度分析，精准评估创业潜力，提供个性化策略建议。
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subModules.map((subName) => (
          <GlassCard key={subName} className="p-6">
            <h3 className="text-xl text-gray-800 mb-3">{subName}</h3>
            <p className="text-sm text-gray-600">
              {subName === '创始人报告' && 'AI生成的综合评估报告和能力画像'}
              {subName === '能力评估' && '多维度能力测评和匹配度分析'}
              {subName === '策略建议' && '基于评估结果的个性化发展建议'}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
