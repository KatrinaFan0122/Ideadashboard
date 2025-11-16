import React from 'react';
import { GlassCard } from '../cofo/GlassCard';
import { COLORS, GLASS_STYLES } from '../../lib/design-system';
import { Layers, Box, Code, Palette, FolderTree } from 'lucide-react';

/**
 * 架构演示页面
 * 可视化展示Co-Fo平台的Layer架构
 */
export const ArchitectureDemo: React.FC = () => {
  const layers = [
    {
      id: 'layer1',
      name: 'Layer 1: 布局层',
      icon: Box,
      color: 'bg-blue-500',
      description: '应用的整体结构和布局框架',
      components: ['Sidebar', 'ContentArea', 'ChatbotButton', 'ChatbotPanel'],
      path: '/components/layout/'
    },
    {
      id: 'layer2',
      name: 'Layer 2: 模块层',
      icon: FolderTree,
      color: 'bg-emerald-500',
      description: '功能模块和路由管理',
      components: ['ContentRenderer', 'AboutMeView', 'PotentialView', 'IdeaDashboard', 'IdeaWorkspace'],
      path: '/components/modules/'
    },
    {
      id: 'layer3',
      name: 'Layer 3: 组件层',
      icon: Code,
      color: 'bg-amber-500',
      description: '可重用的业务组件',
      components: ['KPIBox', 'ProgressCard', 'GlassCard'],
      path: '/components/cofo/'
    },
    {
      id: 'layer4',
      name: 'Layer 4: 样式层',
      icon: Palette,
      color: 'bg-purple-500',
      description: '统一的设计系统配置',
      components: ['GLASS_STYLES', 'COLORS', 'GRADIENTS', 'ANIMATIONS'],
      path: '/lib/design-system.ts'
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Layers size={48} className={COLORS.primary} />
        </div>
        <h1 className="text-4xl text-gray-900 mb-4">Co-Fo Layer 架构</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          模块化分层架构，让Figma设计接入更简单
        </p>
      </div>

      {/* 架构总览 */}
      <GlassCard variant="strong" className="p-8 mb-8">
        <h2 className={`text-2xl mb-4 ${COLORS.primary}`}>架构总览</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div 
                key={layer.id}
                className="bg-white/50 rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`${layer.color} p-2 rounded-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm text-gray-700">{layer.name.split(': ')[1]}</h3>
                </div>
                <p className="text-xs text-gray-500">{layer.components.length} 组件</p>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* 详细的Layer说明 */}
      <div className="space-y-6">
        {layers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <GlassCard key={layer.id} className="p-6">
              <div className="flex items-start gap-4">
                {/* 图标 */}
                <div className={`${layer.color} p-4 rounded-xl flex-shrink-0`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* 内容 */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl text-gray-800">{layer.name}</h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {index + 1} / 4
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{layer.description}</p>
                  
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">路径：</span>
                    <code className="ml-2 text-sm bg-gray-800 text-green-400 px-2 py-1 rounded">
                      {layer.path}
                    </code>
                  </div>

                  {/* 组件列表 */}
                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((component) => (
                      <span 
                        key={component}
                        className="text-xs px-3 py-1 bg-white/80 rounded-full border border-gray-200 text-gray-700"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Figma接入指南 */}
      <GlassCard variant="card" className="p-8 border-l-4 border-blue-500">
        <h2 className={`text-2xl mb-4 ${COLORS.primary}`}>🎨 如何接入Figma设计？</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 方法1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl">
            <h3 className="text-lg mb-3 text-gray-800">方法A: 在现有模块中接入</h3>
            <ol className="text-sm text-gray-600 space-y-2">
              <li>1. 找到对应的模块文件</li>
              <li>2. 搜索"💡 Figma设计接入点"</li>
              <li>3. 粘贴您的代码</li>
              <li>4. 使用GlassCard包装</li>
            </ol>
            <div className="mt-4 p-3 bg-white/80 rounded text-xs">
              <span className="text-gray-500">推荐用于：</span>
              <br />
              <span className="text-gray-700">整合到关于我、可？、Idea模块</span>
            </div>
          </div>

          {/* 方法2 */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-xl">
            <h3 className="text-lg mb-3 text-gray-800">方法B: 创建新模块</h3>
            <ol className="text-sm text-gray-600 space-y-2">
              <li>1. 创建新组件文件</li>
              <li>2. 导入设计系统</li>
              <li>3. 在ContentRenderer注册路由</li>
              <li>4. 添加菜单项</li>
            </ol>
            <div className="mt-4 p-3 bg-white/80 rounded text-xs">
              <span className="text-gray-500">推荐用于：</span>
              <br />
              <span className="text-gray-700">全新的独立功能模块</span>
            </div>
          </div>
        </div>

        {/* 代码示例 */}
        <div className="mt-6">
          <h4 className="text-sm mb-2 text-gray-700">快速示例代码：</h4>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{`import { GlassCard } from '@/components/cofo/GlassCard';
import { COLORS } from '@/lib/design-system';

export const YourFeature = () => (
  <div className="p-4 md:p-8">
    <h1 className="text-4xl text-gray-900 mb-6">标题</h1>
    <GlassCard className="p-6">
      {/* 您的Figma设计代码 */}
    </GlassCard>
  </div>
);`}
          </pre>
        </div>
      </GlassCard>

      {/* 文档链接 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard variant="light" className="p-6 text-center hover:shadow-xl transition-all cursor-pointer">
          <div className="text-3xl mb-2">🚀</div>
          <h3 className="text-lg mb-2 text-gray-800">快速开始</h3>
          <p className="text-sm text-gray-600">查看 QUICK_START.md</p>
        </GlassCard>

        <GlassCard variant="light" className="p-6 text-center hover:shadow-xl transition-all cursor-pointer">
          <div className="text-3xl mb-2">📖</div>
          <h3 className="text-lg mb-2 text-gray-800">完整架构</h3>
          <p className="text-sm text-gray-600">查看 ARCHITECTURE.md</p>
        </GlassCard>

        <GlassCard variant="light" className="p-6 text-center hover:shadow-xl transition-all cursor-pointer">
          <div className="text-3xl mb-2">💡</div>
          <h3 className="text-lg mb-2 text-gray-800">代码示例</h3>
          <p className="text-sm text-gray-600">ExampleFigmaIntegration.tsx</p>
        </GlassCard>
      </div>

      {/* 底部提示 */}
      <GlassCard variant="subtle" className="p-6 text-center">
        <p className="text-gray-600">
          ✨ Layer架构已就绪！现在您可以轻松整合Figma设计，同时保持统一的玻璃拟态风格。
        </p>
      </GlassCard>
    </div>
  );
};
