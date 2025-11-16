# 📑 Co-Fo Platform - 文件索引

> 快速查找指南 - 找到您需要的文件和功能

---

## 🎯 我要...

### 快速开始
**→ 我想快速接入Figma设计**
- 📄 阅读: [`QUICK_START.md`](/QUICK_START.md)
- 📄 参考: [`ExampleFigmaIntegration.tsx`](/components/modules/ExampleFigmaIntegration.tsx)

**→ 我想了解整体架构**
- 📄 阅读: [`ARCHITECTURE.md`](/ARCHITECTURE.md)
- 📄 总览: [`README_LAYERS.md`](/README_LAYERS.md)

**→ 我想查看代码示例**
- 📄 示例: [`ExampleFigmaIntegration.tsx`](/components/modules/ExampleFigmaIntegration.tsx)
- 📄 演示: [`ArchitectureDemo.tsx`](/components/modules/ArchitectureDemo.tsx)

---

## 📂 按功能查找

### 🎨 设计系统
| 文件 | 内容 | 位置 |
|------|------|------|
| `design-system.ts` | 颜色、样式、动画配置 | `/lib/` |
| `globals.css` | 全局样式 | `/styles/` |

### 🏗️ 布局组件 (Layer 1)
| 组件 | 功能 | 位置 |
|------|------|------|
| `Sidebar.tsx` | 侧边栏导航 | `/components/layout/` |
| `ContentArea.tsx` | 主内容区域 | `/components/layout/` |
| `ChatbotButton.tsx` | AI助理按钮 | `/components/layout/` |
| `ChatbotPanel.tsx` | AI助理面板 | `/components/layout/` |

### 📦 功能模块 (Layer 2)
| 模块 | 功能 | 位置 |
|------|------|------|
| `ContentRenderer.tsx` | **路由核心** ⭐ | `/components/modules/` |
| `AboutMeView.tsx` | 关于我模块 | `/components/modules/` |
| `PotentialView.tsx` | 可？模块 | `/components/modules/` |
| `IdeaDashboard.tsx` | Idea仪表盘 | `/components/modules/` |
| `IdeaWorkspace.tsx` | 事人钱行工作区 | `/components/modules/` |
| `IdeaSketchSummary.tsx` | 项目速写 | `/components/modules/` |

### 🧩 通用组件 (Layer 3)
| 组件 | 功能 | 位置 |
|------|------|------|
| `KPIBox.tsx` | 关键指标卡片 | `/components/cofo/` |
| `ProgressCard.tsx` | 进度条卡片 | `/components/cofo/` |
| `GlassCard.tsx` | 玻璃拟态容器 | `/components/cofo/` |

---

## 🎨 Figma设计接入点

### 现有模块接入点
| 模块 | 文件 | 接入位置 | 适用场景 |
|------|------|---------|---------|
| 关于我 - 主页 | `AboutMeView.tsx` | 第24-44行 | 个人画像设计 |
| 关于我 - 子页 | `AboutMeView.tsx` | 第11-22行 | 个人背景/创业策略/他人评价 |
| 可？ - 主页 | `PotentialView.tsx` | 第24-44行 | 能力评估设计 |
| 可？ - 子页 | `PotentialView.tsx` | 第11-22行 | 创始人报告/能力评估/策略建议 |
| Idea - 仪表盘 | `IdeaDashboard.tsx` | 任意位置 | KPI、图表、数据展示 |
| Idea - 工作区 | `IdeaWorkspace.tsx` | 第50-70行 | 事/人/钱/行详细页面 |

### 路由注册
| 文件 | 行号 | 功能 |
|------|------|------|
| `ContentRenderer.tsx` | 第45行+ | 添加新模块路由 |
| `App.tsx` | 第31-52行 | 添加菜单项 |

---

## 📖 文档导航

### 入门文档
1. **首次使用** → [`QUICK_START.md`](/QUICK_START.md)
   - 3分钟快速接入
   - 两种接入方式
   - 代码示例

2. **了解架构** → [`README_LAYERS.md`](/README_LAYERS.md)
   - Layer架构概览
   - 核心功能
   - 技术栈

3. **深入学习** → [`ARCHITECTURE.md`](/ARCHITECTURE.md)
   - 完整架构说明
   - 各层详细文档
   - 最佳实践

### 参考文档
- **示例代码** → [`ExampleFigmaIntegration.tsx`](/components/modules/ExampleFigmaIntegration.tsx)
- **架构演示** → [`ArchitectureDemo.tsx`](/components/modules/ArchitectureDemo.tsx)
- **设计系统** → [`design-system.ts`](/lib/design-system.ts)

---

## 🔍 按使用场景查找

### 场景1: 在"个人背景"页面接入表单
```
1. 打开: /components/modules/AboutMeView.tsx
2. 找到: if (viewName) { ... } 部分
3. 在接入点标记处粘贴代码
4. 使用: <GlassCard> 包装
```

### 场景2: 在Idea仪表盘添加图表
```
1. 打开: /components/modules/IdeaDashboard.tsx
2. 在任意section添加
3. 导入: GlassCard, COLORS
4. 粘贴Figma图表代码
```

### 场景3: 创建新的"市场分析"模块
```
1. 创建: /components/modules/MarketAnalysis.tsx
2. 复制: ExampleFigmaIntegration.tsx 作为模板
3. 注册路由: ContentRenderer.tsx
4. 添加菜单: App.tsx
```

### 场景4: 修改侧边栏样式
```
1. 打开: /components/layout/Sidebar.tsx
2. 修改: GRADIENTS.sidebar
3. 或调整: /lib/design-system.ts 中的配置
```

### 场景5: 添加新的玻璃卡片样式
```
1. 打开: /lib/design-system.ts
2. 在GLASS_STYLES中添加新变体
3. 在GlassCard.tsx中添加类型
```

---

## 🎯 关键文件速查

### 必读文件
- 🌟 **入口文件**: [`App.tsx`](/App.tsx)
- 🌟 **路由核心**: [`ContentRenderer.tsx`](/components/modules/ContentRenderer.tsx)
- 🌟 **设计系统**: [`design-system.ts`](/lib/design-system.ts)
- 🌟 **快速指南**: [`QUICK_START.md`](/QUICK_START.md)

### 常用组件
- 📦 **容器**: [`GlassCard.tsx`](/components/cofo/GlassCard.tsx)
- 📊 **指标**: [`KPIBox.tsx`](/components/cofo/KPIBox.tsx)
- 📈 **进度**: [`ProgressCard.tsx`](/components/cofo/ProgressCard.tsx)

### 参考示例
- 💡 **接入示例**: [`ExampleFigmaIntegration.tsx`](/components/modules/ExampleFigmaIntegration.tsx)
- 🏗️ **架构演示**: [`ArchitectureDemo.tsx`](/components/modules/ArchitectureDemo.tsx)

---

## 📊 项目统计

### 文件结构
```
总计: 80+ 文件
├── 核心文件: 5
├── 布局组件: 4
├── 功能模块: 7
├── 通用组件: 3
├── UI组件库: 40+
└── 文档: 5
```

### Layer分布
- **Layer 1 (布局层)**: 4 个组件
- **Layer 2 (模块层)**: 7 个组件
- **Layer 3 (组件层)**: 3 个组件
- **Layer 4 (样式层)**: 1 个配置文件

---

## 🎨 设计系统速查

### 可用的玻璃样式
```tsx
GLASS_STYLES.card    // 标准卡片 (70%透明)
GLASS_STYLES.light   // 轻量卡片 (40%透明)
GLASS_STYLES.strong  // 强调卡片 (90%透明)
GLASS_STYLES.subtle  // 微妙卡片 (20%透明)
```

### 可用的颜色
```tsx
COLORS.primary    // 蓝色 - 主标题
COLORS.secondary  // 绿色 - 次要信息
COLORS.highlight  // 黄色 - 高亮
COLORS.accent     // 紫色 - 强调
```

### Idea模块颜色
```tsx
IDEA_COLORS.business  // 事 - 蓝色
IDEA_COLORS.people    // 人 - 绿色
IDEA_COLORS.money     // 钱 - 琥珀色
IDEA_COLORS.action    // 行 - 紫色
```

---

## 🚀 快速命令

### 查看文档
```bash
# 快速开始
cat QUICK_START.md

# 完整架构
cat ARCHITECTURE.md

# Layer总览
cat README_LAYERS.md

# 本索引
cat INDEX.md
```

### 创建新模块
```bash
# 1. 复制示例模板
cp components/modules/ExampleFigmaIntegration.tsx \
   components/modules/YourFeature.tsx

# 2. 编辑新文件
# 3. 注册路由到 ContentRenderer.tsx
# 4. 添加菜单项到 App.tsx
```

---

## 🔗 相关链接

### 内部文档
- [快速开始指南](./QUICK_START.md)
- [架构说明文档](./ARCHITECTURE.md)
- [Layer总览](./README_LAYERS.md)
- [代码示例](./components/modules/ExampleFigmaIntegration.tsx)

### 外部资源
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [React 文档](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

---

## 💡 提示

### 第一次使用？
1. 阅读 `QUICK_START.md`
2. 查看 `ExampleFigmaIntegration.tsx`
3. 选择一个模块开始

### 需要深入了解？
1. 阅读 `ARCHITECTURE.md`
2. 查看 `design-system.ts`
3. 研究各Layer的组件实现

### 遇到问题？
1. 检查文档中的"常见场景"
2. 参考示例代码
3. 查看接入点标记

---

## 📝 更新日志

### v1.0 (当前)
- ✅ 完成Layer架构重构
- ✅ 创建完整文档体系
- ✅ 提供示例和演示
- ✅ 标记所有接入点

---

**这就是Co-Fo平台的完整索引！**

使用 `Ctrl/Cmd + F` 在本文件中搜索您需要的内容。

---

*Co-Fo Platform - 让Figma设计接入变得简单*  
*v1.0 - Layer Architecture Edition*
