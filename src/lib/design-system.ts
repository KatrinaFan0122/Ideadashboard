/**
 * Co-Fo 设计系统配置
 * 统一的样式、颜色、主题tokens
 */

// 玻璃拟态样式
export const GLASS_STYLES = {
  card: 'bg-white/70 backdrop-blur-md shadow-xl rounded-xl border border-white/30 transition duration-300 hover:shadow-2xl',
  light: 'bg-white/40 backdrop-blur-sm shadow-lg rounded-lg border border-white/20',
  strong: 'bg-white/90 backdrop-blur-md shadow-2xl rounded-xl border border-white/50',
  subtle: 'bg-white/20 backdrop-blur-sm rounded-lg border border-white/10',
} as const;

// 颜色系统
export const COLORS = {
  primary: 'text-blue-500',
  secondary: 'text-emerald-500',
  highlight: 'bg-yellow-400 text-yellow-900',
  accent: 'text-purple-500',
  danger: 'text-red-500',
  success: 'text-green-500',
} as const;

// 背景渐变
export const GRADIENTS = {
  main: 'bg-gradient-to-br from-gray-50/50 to-blue-50/30',
  sidebar: 'bg-blue-100/70',
  hero: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
} as const;

// 动画配置
export const ANIMATIONS = {
  transition: 'transition-all duration-300',
  transitionFast: 'transition-all duration-150',
  transitionSlow: 'transition-all duration-500',
  hover: 'hover:scale-105 transition-transform duration-200',
} as const;

// 间距系统
export const SPACING = {
  section: 'space-y-8',
  card: 'p-6',
  cardLarge: 'p-8',
  gap: 'gap-6',
} as const;

// Idea模块的颜色配置
export const IDEA_COLORS = {
  business: { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50' },
  people: { bg: 'bg-emerald-500', text: 'text-emerald-500', light: 'bg-emerald-50' },
  money: { bg: 'bg-amber-500', text: 'text-amber-500', light: 'bg-amber-50' },
  action: { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50' },
} as const;

// 响应式断点辅助
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
