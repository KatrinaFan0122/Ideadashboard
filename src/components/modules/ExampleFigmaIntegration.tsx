import React from 'react';
import { GlassCard } from '../cofo/GlassCard';
import { KPIBox } from '../cofo/KPIBox';
import { GLASS_STYLES, COLORS, GRADIENTS } from '../../lib/design-system';

/**
 * 【示例】如何接入Figma设计
 * 
 * 这是一个完整的示例，展示如何将Figma导入的代码整合到Co-Fo平台中
 * 
 * 步骤：
 * 1. 复制这个文件，重命名为您的功能名
 * 2. 将Figma导入的代码粘贴到相应位置
 * 3. 使用GlassCard等组件包装，保持风格统一
 * 4. 在ContentRenderer.tsx中注册路由
 */

interface ExampleFigmaIntegrationProps {
  // 定义组件的Props类型
  data?: any;
}

export const ExampleFigmaIntegration: React.FC<ExampleFigmaIntegrationProps> = ({ data }) => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* 页面标题 */}
      <h1 className="text-4xl text-gray-900 mb-6">Figma设计接入示例</h1>
      
      {/* ===== 方式1: 使用GlassCard包装 ===== */}
      <GlassCard variant="card" className="p-6">
        <h2 className={`text-2xl mb-4 ${COLORS.primary}`}>
          方式1: 使用GlassCard包装Figma内容
        </h2>
        <p className="text-gray-600 mb-4">
          将您的Figma设计代码放在这里，保持统一的玻璃拟态风格
        </p>
        
        {/* 在这里粘贴Figma导入的JSX代码 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <p className="text-gray-700">您的Figma设计内容</p>
        </div>
      </GlassCard>

      {/* ===== 方式2: 组合使用现有组件 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPIBox 
          title="示例指标1" 
          value={85} 
          unit="%" 
          colorClass="bg-blue-400" 
        />
        <KPIBox 
          title="示例指标2" 
          value={7.2} 
          unit="/10" 
          colorClass="bg-emerald-400" 
        />
        <KPIBox 
          title="示例指标3" 
          value={24} 
          unit="天" 
          colorClass="bg-amber-400" 
        />
      </div>

      {/* ===== 方式3: 直接使用Figma导入的完整组件 ===== */}
      <div className="space-y-6">
        <h2 className={`text-2xl ${COLORS.primary}`}>
          方式3: 直接导入Figma组件
        </h2>
        
        {/* 
          如果您从Figma导入了完整的组件文件，例如：
          import FigmaComponent from './imports/FigmaComponent';
          
          直接使用：
          <FigmaComponent />
        */}
        
        <GlassCard className="p-6">
          <div className="text-gray-600">
            <p className="mb-3">💡 <strong>提示：</strong></p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>保持使用GlassCard等组件来包装内容</li>
              <li>使用design-system.ts中的颜色和样式常量</li>
              <li>确保响应式设计（使用md:、lg:等断点）</li>
              <li>保留原有的Figma样式，只在必要时调整</li>
            </ol>
          </div>
        </GlassCard>
      </div>

      {/* ===== 方式4: 混合使用 - Figma设计 + Co-Fo组件 ===== */}
      <div className={`${GLASS_STYLES.card} p-8`}>
        <h2 className={`text-2xl mb-6 ${COLORS.primary}`}>
          方式4: Figma设计与Co-Fo组件混合
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：Figma导入的设计 */}
          <div className="bg-white/50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-lg mb-3 text-gray-800">Figma导入的左侧面板</h3>
            <div className="space-y-3">
              {/* 粘贴Figma代码 */}
              <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-50 rounded flex items-center justify-center">
                Figma设计区域1
              </div>
              <div className="h-20 bg-gradient-to-r from-purple-100 to-purple-50 rounded flex items-center justify-center">
                Figma设计区域2
              </div>
            </div>
          </div>

          {/* 右侧：Co-Fo组件 */}
          <div>
            <h3 className="text-lg mb-3 text-gray-800">Co-Fo平台组件</h3>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-gray-700">使用平台统一组件</p>
                <p className="text-xs text-gray-500 mt-1">保持风格一致性</p>
              </div>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                交互按钮示例
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 实用提示框 ===== */}
      <GlassCard variant="light" className="p-6 border-l-4 border-blue-500">
        <h3 className="text-lg mb-3 text-gray-800">🎨 接入Figma设计的最佳实践</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p><strong>导入图片和SVG：</strong></p>
          <code className="block bg-gray-800 text-green-400 p-2 rounded text-xs mt-1 mb-3">
            import svgIcon from "./imports/svg-xxxxx";<br/>
            import imgAsset from "figma:asset/xxxxx.png";
          </code>
          
          <p><strong>使用ImageWithFallback组件：</strong></p>
          <code className="block bg-gray-800 text-green-400 p-2 rounded text-xs mt-1 mb-3">
            import &#123; ImageWithFallback &#125; from './components/figma/ImageWithFallback';<br/>
            <ImageWithFallback src=&#123;yourImage&#125; alt="描述" />
          </code>
          
          <p><strong>保持玻璃拟态风格：</strong></p>
          <code className="block bg-gray-800 text-green-400 p-2 rounded text-xs mt-1">
            className=&#123;GLASS_STYLES.card&#125; // 或 light, strong, subtle
          </code>
        </div>
      </GlassCard>
    </div>
  );
};
