import React from 'react';
import { GlassCard } from '../cofo/GlassCard';

interface AboutMeViewProps {
  viewName: string | null;
  subModules: string[];
}

/**
 * 关于我模块视图
 * 【可插入Figma设计的接入点】
 */
export const AboutMeView: React.FC<AboutMeViewProps> = ({ viewName, subModules }) => {
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
          <div className="mt-6 p-4 bg-blue-50/50 rounded-lg border-2 border-dashed border-blue-200">
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
      <h1 className="text-4xl text-gray-900 mb-6">关于我 - 个人画像</h1>
      
      <GlassCard className="p-6 mb-6">
        <p className="text-xl text-gray-700 mb-4">
          构建完整的创业者画像，为策略规划提供基础
        </p>
        <p className="text-gray-600">
          通过系统化的信息收集，全面了解个人背景、创业理念和外界评价。
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subModules.map((subName) => (
          <GlassCard key={subName} className="p-6">
            <h3 className="text-xl text-gray-800 mb-3">{subName}</h3>
            <p className="text-sm text-gray-600">
              {subName === '个人背景' && '记录教育背景、工作经历和核心技能'}
              {subName === '创业策略' && '梳理创业动机、目标和个人策略'}
              {subName === '他人评价' && '收集合作伙伴和导师的反馈意见'}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
