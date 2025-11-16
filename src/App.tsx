import React, { useState } from 'react';
import { Briefcase, User, DollarSign, Zap, Aperture, Feather } from 'lucide-react';
import cofoLogo from 'figma:asset/c62c178d6190a1a29a36f84b7851916147d13dd6.png';

// ===== Layer 1: 布局层 =====
import { Sidebar } from './components/layout/Sidebar';
import { ContentArea } from './components/layout/ContentArea';
import { ChatbotButton } from './components/layout/ChatbotButton';
import { ChatbotPanel } from './components/layout/ChatbotPanel';

// ===== Layer 2: 内容渲染层 =====
import { ContentRenderer } from './components/modules/ContentRenderer';

/**
 * Co-Fo 创业赋能SaaS平台
 * 
 * 架构说明：
 * - Layer 1 (布局层): Sidebar, ContentArea, ChatbotButton, ChatbotPanel
 * - Layer 2 (模块层): AboutMeView, PotentialView, IdeaDashboard, IdeaWorkspace
 * - Layer 3 (组件层): KPIBox, ProgressCard, GlassCard
 * - Layer 4 (样式层): /lib/design-system.ts
 * 
 * 【接入Figma设计】
 * 请在 /components/modules/ContentRenderer.tsx 中添加路由规则
 */

// 菜单结构数据
const MENU_ITEMS = [
  { 
    id: 'about', 
    name: '关于我', 
    icon: User as any,
    sub: ['个人背景', '创业策略', '他人评价']
  },
  { 
    id: 'potential', 
    name: '可？', 
    icon: Aperture as any,
    sub: ['创始人报告', '能力评估', '策略建议']
  },
  { 
    id: 'idea', 
    name: 'Idea', 
    icon: Feather as any,
    sub: [
      { name: '事', type: 'progress', icon: Briefcase, progress: 60, color: 'bg-blue-500' },
      { name: '人', type: 'progress', icon: User, progress: 40, color: 'bg-emerald-500' },
      { name: '钱', type: 'progress', icon: DollarSign, progress: 30, color: 'bg-amber-500' },
      { name: '行', type: 'progress', icon: Zap, progress: 20, color: 'bg-purple-500' }
    ]
  },
];

export const App = () => {
  // 状态管理
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [activeView, setActiveView] = useState('Idea');

  const handleMenuClick = (view: string) => {
    setActiveView(view);

    // 移动端自动收起侧边栏
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleNavigate = (view: string) => {
    setActiveView(view);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans">
      {/* Layer 1.1 - 侧边栏导航 */}
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        menuItems={MENU_ITEMS}
        activeView={activeView}
        onMenuClick={handleMenuClick}
      />

      {/* Layer 1.2 - 主内容区域 */}
      <ContentArea 
        isSidebarOpen={isSidebarOpen} 
        isChatbotOpen={isChatbotOpen}
      >
        {/* Layer 2 - 内容渲染器（路由核心） */}
        <ContentRenderer 
          activeView={activeView}
          onNavigate={handleNavigate}
          menuItems={MENU_ITEMS}
        />
      </ContentArea>

      {/* Layer 1.3 - Co-Fo AI助理按钮 */}
      {!isChatbotOpen && (
        <ChatbotButton 
          onClick={() => setIsChatbotOpen(true)}
          logoSrc={cofoLogo}
        />
      )}

      {/* Layer 1.4 - Co-Fo AI助理对话面板 */}
      <ChatbotPanel 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </div>
  );
};

export default App;
