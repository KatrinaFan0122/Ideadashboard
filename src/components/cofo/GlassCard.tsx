import React from 'react';
import { GLASS_STYLES } from '../../lib/design-system';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'card' | 'light' | 'strong' | 'subtle';
}

/**
 * 玻璃拟态卡片容器
 * 统一的玻璃效果包装组件
 */
export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'card' 
}) => {
  return (
    <div className={`${GLASS_STYLES[variant]} ${className}`}>
      {children}
    </div>
  );
};
