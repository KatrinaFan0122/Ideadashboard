import React from 'react';
import { GLASS_STYLES } from '../../lib/design-system';

interface KPIBoxProps {
  title: string;
  value: number | string;
  unit: string;
  colorClass: string;
}

/**
 * 关键指标小卡片组件
 * 用于显示KPI数据
 */
export const KPIBox: React.FC<KPIBoxProps> = ({ title, value, unit, colorClass }) => {
  const textColorClass = colorClass.replace('bg-', 'text-').replace('-400', '-700');
  
  return (
    <div className={`p-4 ${GLASS_STYLES.card} min-h-[100px]`}>
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <div className={`text-3xl ${textColorClass}`}>
        {value}
        <span className="text-base ml-1">{unit}</span>
      </div>
    </div>
  );
};
