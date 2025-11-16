# 🚀 Co-Fo平台 - Figma设计接入快速指南

## 📦 已完成的模块化Layer架构

✅ **Layer 1 - 布局层** (`/components/layout/`)
- Sidebar、ContentArea、ChatbotButton、ChatbotPanel

✅ **Layer 2 - 模块层** (`/components/modules/`)
- ContentRenderer（路由核心）
- AboutMeView、PotentialView、IdeaDashboard、IdeaWorkspace

✅ **Layer 3 - 组件层** (`/components/cofo/`)
- KPIBox、ProgressCard、GlassCard

✅ **Layer 4 - 样式层** (`/lib/design-system.ts`)
- 统一的玻璃拟态风格、颜色系统、动画配置

---

## 🎯 3分钟快速接入Figma设计

### 方法A: 在现有模块中接入（推荐）

**适用场景：** 将Figma设计整合到"关于我"、"可？"、"Idea"等现有模块中

**步骤：**

1️⃣ **找到对应的模块文件**
```
关于我模块 → /components/modules/AboutMeView.tsx
可？模块   → /components/modules/PotentialView.tsx
Idea模块   → /components/modules/IdeaDashboard.tsx
事人钱行   → /components/modules/IdeaWorkspace.tsx
```

2️⃣ **定位接入点标记**
```tsx
// 在文件中搜索这个注释：
💡 Figma设计接入点：在此处导入您的Figma设计组件
```

3️⃣ **粘贴Figma代码**
```tsx
// 在标记处粘贴您的代码
<div>
  {/* 您的Figma设计JSX代码 */}
</div>
```

✅ **完成！** 刷新页面查看效果

---

### 方法B: 创建新的独立模块

**适用场景：** 创建全新的功能模块

**步骤：**

1️⃣ **创建组件文件**
```bash
/components/modules/YourFeatureName.tsx
```

2️⃣ **使用模板代码**（复制 `ExampleFigmaIntegration.tsx` 作为起点）
```tsx
import React from 'react';
import { GlassCard } from '@/components/cofo/GlassCard';
import { GLASS_STYLES, COLORS } from '@/lib/design-system';

export const YourFeatureName = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl text-gray-900 mb-6">功能标题</h1>
      <GlassCard className="p-6">
        {/* 粘贴Figma代码 */}
      </GlassCard>
    </div>
  );
};
```

3️⃣ **注册路由**
在 `/components/modules/ContentRenderer.tsx` 中添加：
```tsx
// 顶部导入
import { YourFeatureName } from './YourFeatureName';

// 在【Figma设计接入区】添加
if (activeView === 'YourFeatureName') {
  return <YourFeatureName />;
}
```

4️⃣ **添加菜单项**（可选）
在 `/App.tsx` 的 `MENU_ITEMS` 中：
```tsx
{
  id: 'your-feature',
  name: 'YourFeatureName',
  icon: YourIcon,
  sub: []
}
```

✅ **完成！** 点击侧边栏菜单查看

---

## 🎨 保持风格一致的3个技巧

### 1. 使用GlassCard包装
```tsx
import { GlassCard } from '@/components/cofo/GlassCard';

<GlassCard variant="card" className="p-6">
  {/* Figma内容 */}
</GlassCard>
```

### 2. 使用设计系统颜色
```tsx
import { COLORS } from '@/lib/design-system';

<h2 className={COLORS.primary}>标题</h2>
<span className={COLORS.secondary}>辅助文本</span>
```

### 3. 使用现有组件
```tsx
import { KPIBox } from '@/components/cofo/KPIBox';
import { ProgressCard } from '@/components/cofo/ProgressCard';

<KPIBox title="指标名" value={85} unit="%" colorClass="bg-blue-400" />
<ProgressCard title="进度" progress={60} status="进行中" colorClass="bg-blue-500" />
```

---

## 📷 导入Figma资源

### 导入图片
```tsx
// 方式1: Figma asset
import myImage from "figma:asset/xxxxx.png";

// 方式2: 使用ImageWithFallback组件（推荐新图片）
import { ImageWithFallback } from './components/figma/ImageWithFallback';
<ImageWithFallback src={url} alt="描述" className="w-full" />
```

### 导入SVG
```tsx
// 从imports目录导入
import svgPaths from "./imports/svg-xxxxx";

// 直接使用
<svg>
  <path d={svgPaths.path1} />
</svg>
```

---

## 🔄 当前功能模块接入点

| 模块 | 文件路径 | 接入点位置 | 说明 |
|------|---------|-----------|------|
| 关于我 - 主页 | `AboutMeView.tsx` | 第44行 | 可整合个人画像设计 |
| 关于我 - 子功能 | `AboutMeView.tsx` | 第18行 | 个人背景/创业策略/他人评价 |
| 可？ - 主页 | `PotentialView.tsx` | 第44行 | 可整合能力评估设计 |
| 可？ - 子功能 | `PotentialView.tsx` | 第18行 | 创始人报告/能力评估/策略建议 |
| Idea - 仪表盘 | `IdeaDashboard.tsx` | 任意组件内 | 可替换KPI、进度等组件 |
| Idea - 速写 | `IdeaSketchSummary.tsx` | 整个文件 | 项目概要卡片 |
| Idea - 工作区 | `IdeaWorkspace.tsx` | 第63行 | 事/人/钱/行的详细页面 |

---

## 💡 常见场景示例

### 场景1: 在"个人背景"页面接入表单设计
```tsx
// 打开 /components/modules/AboutMeView.tsx
// 找到 if (viewName) { ... } 部分
// 在接入点标记处粘贴Figma的表单代码

<GlassCard className="p-6">
  {/* Figma导入的表单 */}
  <form>...</form>
</GlassCard>
```

### 场景2: 在Idea仪表盘添加新的数据可视化
```tsx
// 打开 /components/modules/IdeaDashboard.tsx
// 在任意位置添加新的section

<GlassCard className="p-6">
  <h2 className={COLORS.primary}>新的数据图表</h2>
  {/* Figma的图表组件 */}
</GlassCard>
```

### 场景3: 创建全新的"市场分析"模块
```tsx
// 1. 创建 /components/modules/MarketAnalysis.tsx
// 2. 复制 ExampleFigmaIntegration.tsx 的结构
// 3. 在 ContentRenderer.tsx 添加路由
// 4. 在 App.tsx 的 MENU_ITEMS 添加菜单项
```

---

## 🛠️ 可用的设计系统资源

### 玻璃拟态样式 (`GLASS_STYLES`)
```tsx
GLASS_STYLES.card    // 标准卡片
GLASS_STYLES.light   // 轻量卡片
GLASS_STYLES.strong  // 强调卡片
GLASS_STYLES.subtle  // 微妙卡片
```

### 颜色 (`COLORS`)
```tsx
COLORS.primary    // 蓝色 - 主标题
COLORS.secondary  // 绿色 - 次要信息
COLORS.highlight  // 黄色 - 高亮
COLORS.accent     // 紫色 - 强调
```

### Idea模块颜色 (`IDEA_COLORS`)
```tsx
IDEA_COLORS.business  // 事 - 蓝色
IDEA_COLORS.people    // 人 - 绿色
IDEA_COLORS.money     // 钱 - 琥珀色
IDEA_COLORS.action    // 行 - 紫色
```

### 渐变背景 (`GRADIENTS`)
```tsx
GRADIENTS.main     // 主背景渐变
GRADIENTS.sidebar  // 侧边栏渐变
GRADIENTS.hero     // Hero区域渐变
```

---

## ✅ 检查清单

接入Figma设计前，确保：

- [ ] 已了解Layer架构（查看 `ARCHITECTURE.md`）
- [ ] 确定接入位置（现有模块 vs 新模块）
- [ ] 导入必要的图片和SVG资源
- [ ] 使用GlassCard等组件保持风格一致
- [ ] 使用design-system.ts中的颜色常量
- [ ] 测试响应式布局（手机、平板、桌面）
- [ ] 在ContentRenderer.tsx中注册路由
- [ ] （可选）在侧边栏菜单中添加入口

---

## 📚 完整文档

- **架构说明**: `ARCHITECTURE.md`
- **示例组件**: `/components/modules/ExampleFigmaIntegration.tsx`
- **路由核心**: `/components/modules/ContentRenderer.tsx`
- **设计系统**: `/lib/design-system.ts`

---

## 🆘 需要帮助？

如果遇到问题，请检查：

1. 是否正确导入了组件和样式
2. 路由是否在ContentRenderer.tsx中正确注册
3. 图片和SVG路径是否正确
4. 是否使用了统一的设计系统样式

---

**开始创建吧！** 🚀

所有的Layer架构已经搭建完成，您现在可以自由地整合Figma设计，同时保持平台的统一风格。
