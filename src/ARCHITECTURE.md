# Co-Fo 平台架构说明

## 📐 Layer架构概览

Co-Fo平台采用分层模块化架构，便于整合Figma设计和扩展功能。

```
┌─────────────────────────────────────────────────────────┐
│                     /App.tsx                            │
│                   (应用入口)                             │
└───────────────────┬─────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
┌───────▼───────┐      ┌───────▼───────┐
│  Layer 1      │      │  Layer 2      │
│  布局层        │      │  内容渲染层    │
└───────────────┘      └───────────────┘
        │                       │
┌───────▼───────┐      ┌───────▼───────┐
│  Layer 3      │      │  Layer 4      │
│  组件层        │      │  样式层        │
└───────────────┘      └───────────────┘
```

---

## 🏗️ 各层详细说明

### Layer 1: 布局层 (`/components/layout/`)

**职责：** 应用的整体结构和布局框架

**组件：**
- `Sidebar.tsx` - 可展开/收缩的侧边栏导航
- `ContentArea.tsx` - 主内容区域容器（自动适配布局）
- `ChatbotButton.tsx` - AI助理触发按钮
- `ChatbotPanel.tsx` - AI助理对话面板

**使用示例：**
```tsx
import { Sidebar } from './components/layout/Sidebar';

<Sidebar
  isOpen={isSidebarOpen}
  onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
  menuItems={MENU_ITEMS}
  activeView={activeView}
  onMenuClick={handleMenuClick}
/>
```

---

### Layer 2: 内容渲染层 (`/components/modules/`)

**职责：** 功能模块和路由管理

**核心组件：**
- `ContentRenderer.tsx` - **【核心路由器】** Figma设计的主要接入点
- `AboutMeView.tsx` - 关于我模块
- `PotentialView.tsx` - 可？模块
- `IdeaDashboard.tsx` - Idea主仪表盘
- `IdeaWorkspace.tsx` - Idea工作区（事人钱行）
- `IdeaSketchSummary.tsx` - Idea速写组件

**🎨 接入Figma设计的方法：**

#### 方法1: 在ContentRenderer中添加路由
```tsx
// 在 /components/modules/ContentRenderer.tsx 中

// 导入您的Figma组件
import { YourFigmaComponent } from './YourFigmaComponent';

// 添加路由规则
if (activeView === 'YourFeatureName') {
  return <YourFigmaComponent />;
}
```

#### 方法2: 替换现有模块内容
```tsx
// 直接在 AboutMeView.tsx、PotentialView.tsx 等文件中
// 将占位内容替换为您的Figma设计

// 查找这些标记位置：
// 💡 Figma设计接入点：在此处导入您的Figma设计组件
```

---

### Layer 3: 组件层 (`/components/cofo/`)

**职责：** 可重用的业务组件

**组件：**
- `KPIBox.tsx` - 关键指标卡片
- `ProgressCard.tsx` - 进度卡片
- `GlassCard.tsx` - 玻璃拟态容器

**使用示例：**
```tsx
import { KPIBox } from '@/components/cofo/KPIBox';
import { ProgressCard } from '@/components/cofo/ProgressCard';
import { GlassCard } from '@/components/cofo/GlassCard';

<KPIBox 
  title="创始人协同度" 
  value={92} 
  unit="%" 
  colorClass="bg-blue-400" 
/>

<ProgressCard 
  title="产品定位" 
  progress={65} 
  status="建模中" 
  colorClass="bg-blue-500" 
/>

<GlassCard variant="card" className="p-6">
  <YourContent />
</GlassCard>
```

---

### Layer 4: 样式层 (`/lib/design-system.ts`)

**职责：** 统一的设计系统配置

**导出内容：**
```tsx
import { 
  GLASS_STYLES,  // 玻璃拟态样式
  COLORS,        // 颜色系统
  GRADIENTS,     // 渐变背景
  ANIMATIONS,    // 动画配置
  SPACING,       // 间距系统
  IDEA_COLORS    // Idea模块颜色
} from '@/lib/design-system';
```

**使用示例：**
```tsx
// 玻璃卡片
<div className={GLASS_STYLES.card}>...</div>

// 颜色
<h2 className={COLORS.primary}>标题</h2>

// Idea模块颜色
<div className={IDEA_COLORS.business.bg}>事</div>
```

---

## 🎯 快速开始：接入Figma设计

### 步骤1: 创建组件文件
```bash
# 在 /components/modules/ 目录下创建新组件
/components/modules/YourFeatureName.tsx
```

### 步骤2: 导入设计系统
```tsx
import React from 'react';
import { GlassCard } from '@/components/cofo/GlassCard';
import { GLASS_STYLES, COLORS } from '@/lib/design-system';

export const YourFeatureName = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl text-gray-900 mb-6">您的功能标题</h1>
      <GlassCard className="p-6">
        {/* 在这里粘贴您的Figma代码 */}
      </GlassCard>
    </div>
  );
};
```

### 步骤3: 注册路由
在 `/components/modules/ContentRenderer.tsx` 中添加：
```tsx
// 导入组件
import { YourFeatureName } from './YourFeatureName';

// 添加路由（在Figma设计接入区）
if (activeView === 'YourFeatureName') {
  return <YourFeatureName />;
}
```

### 步骤4: 添加菜单项（可选）
在 `/App.tsx` 的 `MENU_ITEMS` 中添加：
```tsx
{
  id: 'your-feature',
  name: 'YourFeatureName',
  icon: YourIcon,
  sub: ['子功能1', '子功能2']
}
```

---

## 📁 完整目录结构

```
/
├── App.tsx                          # 应用入口
├── ARCHITECTURE.md                  # 本文档
│
├── lib/
│   └── design-system.ts            # 设计系统配置
│
├── components/
│   ├── layout/                     # Layer 1: 布局层
│   │   ├── Sidebar.tsx
│   │   ├── ContentArea.tsx
│   │   ├── ChatbotButton.tsx
│   │   └── ChatbotPanel.tsx
│   │
│   ├── modules/                    # Layer 2: 模块层
│   │   ├── ContentRenderer.tsx    # 【路由核心】
│   │   ├── AboutMeView.tsx
│   │   ├── PotentialView.tsx
│   │   ├── IdeaDashboard.tsx
│   │   ├── IdeaWorkspace.tsx
│   │   └── IdeaSketchSummary.tsx
│   │
│   ├── cofo/                       # Layer 3: 组件层
│   │   ├── KPIBox.tsx
│   │   ├── ProgressCard.tsx
│   │   └── GlassCard.tsx
│   │
│   ├── ui/                         # shadcn/ui组件库
│   │   └── ...
│   │
│   └── figma/                      # Figma专用组件
│       └── ImageWithFallback.tsx
│
└── styles/
    └── globals.css                 # 全局样式
```

---

## 🎨 设计规范

### 玻璃拟态风格
所有主要卡片使用 `GLASS_STYLES` 系列样式，保持视觉统一：
- `card` - 标准卡片
- `light` - 轻量卡片
- `strong` - 强调卡片
- `subtle` - 微妙卡片

### 颜色使用
- **主色 (Primary)**: 蓝色 - 用于主要标题和强调
- **辅色 (Secondary)**: 绿色 - 用于次要信息
- **高亮 (Highlight)**: 黄色 - 用于重要提示
- **Idea模块**: 事(蓝)、人(绿)、钱(琥珀)、行(紫)

### 响应式
所有组件默认支持响应式，使用Tailwind的断点系统：
- `md:` - 768px以上
- `lg:` - 1024px以上

---

## 💡 最佳实践

1. **保持风格一致**：使用 `design-system.ts` 中的配置
2. **组件复用**：优先使用现有的 `GlassCard`、`KPIBox` 等组件
3. **模块化开发**：每个功能独立为一个组件文件
4. **清晰的接入点**：在代码中标记 `【Figma设计接入点】`
5. **TypeScript类型**：为组件添加清晰的Props类型定义

---

## 🔗 相关资源

- [Tailwind CSS文档](https://tailwindcss.com/docs)
- [React文档](https://react.dev)
- [Lucide Icons](https://lucide.dev)

---

**Created for Co-Fo Platform v1.0**  
*AI驱动的创业赋能SaaS平台*
