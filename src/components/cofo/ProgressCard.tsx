import React from 'react';
import { COLORS } from '../../lib/design-system';

interface ProgressCardProps {
  title: string;
  progress: number;
  status: string;
  colorClass: string;
}

/**
 * 进度卡片组件
 * 显示带进度条的任务或项目状态
 */
export const ProgressCard: React.FC<ProgressCardProps> = ({ 
  title, 
  progress, 
  status, 
  colorClass 
}) => {
  const statusColorClass = colorClass.includes('emerald') 
    ? COLORS.secondary 
    : COLORS.primary;

  return (
    <div className="w-full">
      <h4 className="text-gray-700 mb-1">{title}</h4>
      <div className="flex items-center space-x-3 mb-1">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${colorClass}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">{progress}%</span>
      </div>
      <p className={`text-xs ${statusColorClass}`}>{status}</p>
    </div>
  );
};
