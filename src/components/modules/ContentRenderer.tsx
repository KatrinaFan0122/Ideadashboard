import React from 'react';
import { AboutMeView } from './AboutMeView';
import { PotentialView } from './PotentialView';
import { IdeaDashboard } from './IdeaDashboard';
import { IdeaWorkspace } from './IdeaWorkspace';

interface ContentRendererProps {
  activeView: string;
  onNavigate: (view: string) => void;
  menuItems: any[];
}

/**
 * 动态内容渲染器
 * 【核心路由层 - Figma设计的主要接入点】
 * 
 * 在这里添加新的路由规则来整合Figma导入的设计
 */
export const ContentRenderer: React.FC<ContentRendererProps> = ({ 
  activeView, 
  onNavigate,
  menuItems 
}) => {
  // ===== 关于我模块 =====
  if (activeView === '关于我') {
    const subModules = menuItems.find(item => item.name === '关于我')?.sub || [];
    return <AboutMeView viewName={null} subModules={subModules} />;
  }
  if (['个人背景', '创业策略', '他人评价'].includes(activeView)) {
    const subModules = menuItems.find(item => item.name === '关于我')?.sub || [];
    return <AboutMeView viewName={activeView} subModules={subModules} />;
  }

  // ===== 可？模块 =====
  if (activeView === '可？') {
    const subModules = menuItems.find(item => item.name === '可？')?.sub || [];
    return <PotentialView viewName={null} subModules={subModules} />;
  }
  if (['创始人报告', '能力评估', '策略建议'].includes(activeView)) {
    const subModules = menuItems.find(item => item.name === '可？')?.sub || [];
    return <PotentialView viewName={activeView} subModules={subModules} />;
  }

  // ===== Idea 主模块 =====
  if (activeView === 'Idea') {
    return <IdeaDashboard onNavigate={onNavigate} />;
  }

  // ===== Idea 子模块 - 事人钱行 =====
  if (activeView === '事') {
    return <IdeaWorkspace selectedIdea="Co-Fo平台" initialModule="business" onNavigate={onNavigate} />;
  }
  if (activeView === '人') {
    return <IdeaWorkspace selectedIdea="Co-Fo平台" initialModule="people" onNavigate={onNavigate} />;
  }
  if (activeView === '钱') {
    return <IdeaWorkspace selectedIdea="Co-Fo平台" initialModule="money" onNavigate={onNavigate} />;
  }
  if (activeView === '行') {
    return <IdeaWorkspace selectedIdea="Co-Fo平台" initialModule="action" onNavigate={onNavigate} />;
  }

  // ===== Idea 工作区（通过"进入工作区"按钮） =====
  if (activeView.startsWith('Idea工作区:')) {
    const ideaName = activeView.replace('Idea工作区:', '').trim();
    return <IdeaWorkspace selectedIdea={ideaName} onNavigate={onNavigate} />;
  }

  // ============================================
  // 【Figma设计接入区】
  // 在这里添加您导入的Figma设计组件路由
  // ============================================
  // 示例：
  // if (activeView === 'YourFigmaFeature') {
  //   return <YourFigmaComponent />;
  // }

  // ===== 默认占位内容 =====
  return (
    <div className="p-8 text-center h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl text-gray-800 mb-4">{activeView}</h1>
      <p className="text-xl text-gray-500 max-w-lg">
        这是 <strong>{activeView}</strong> 模块的占位页面。
        <br />
        请在 ContentRenderer.tsx 中接入您的Figma设计组件。
      </p>
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-300 max-w-2xl">
        <h3 className="text-lg mb-3 text-gray-800">🎨 如何接入Figma设计？</h3>
        <ol className="text-left text-sm text-gray-600 space-y-2">
          <li>1. 在 <code className="bg-white px-2 py-1 rounded">/components/modules/</code> 中创建您的组件</li>
          <li>2. 在 <code className="bg-white px-2 py-1 rounded">ContentRenderer.tsx</code> 中添加路由规则</li>
          <li>3. 使用统一的设计系统样式保持风格一致</li>
        </ol>
      </div>
    </div>
  );
};
