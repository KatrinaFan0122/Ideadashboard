import React from 'react';
import { Briefcase, User, DollarSign, Zap } from 'lucide-react';
import { KPIBox } from '../cofo/KPIBox';
import { ProgressCard } from '../cofo/ProgressCard';
import { GlassCard } from '../cofo/GlassCard';
import { IdeaSketchSummary } from './IdeaSketchSummary';
import { COLORS } from '../../lib/design-system';

interface IdeaDashboardProps {
  onNavigate: (view: string) => void;
}

/**
 * Idea模块主仪表盘
 * 显示事人钱行的综合数据总览
 * 【可插入Figma设计的接入点】
 */
export const IdeaDashboard: React.FC<IdeaDashboardProps> = ({ onNavigate }) => {
  const keyMetrics = [
    { title: '创始人协同度 (可)', value: 92, unit: '%', colorClass: 'bg-blue-400' },
    { title: '商业模式评分 (事)', value: 7.5, unit: '/10', colorClass: 'bg-emerald-400' },
    { title: '资金运行月数 (钱)', value: 12, unit: '月', colorClass: 'bg-red-400' },
    { title: '下一步里程碑 (行)', value: 15, unit: '天', colorClass: 'bg-yellow-400' },
  ];

  const criticalTasks = [
    '完成目标用户调研报告 (人/事)',
    '起草商业模式画布 (事)',
    '与潜在技术伙伴进行首次接触 (人)',
    '启动资金风险评估 (钱)',
    '规划下季度核心行动 (行)',
  ];
  
  return (
    <div className="p-4 md:p-8 space-y-8">
      <h1 className="text-4xl text-gray-900 mb-6">Idea - 核心数据总览</h1>
      
      {/* Idea 速写区域 */}
      <IdeaSketchSummary 
        onEnterWorkspace={(ideaName) => onNavigate(`Idea工作区:${ideaName}`)} 
      />
      
      {/* 关键指标概览 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {keyMetrics.map((metric, index) => (
          <KPIBox key={index} {...metric} />
        ))}
      </div>

      {/* 核心项目状态和人员/财务 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* 左侧大卡片 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 项目进度总览 (事) */}
          <GlassCard className="p-6">
            <h2 className="text-2xl mb-5 flex items-center">
              <Briefcase size={20} className={`mr-2 ${COLORS.primary}`} />
              项目定义进度 (事)
            </h2>
            <div className="space-y-6">
              <ProgressCard 
                title="产品/服务定位" 
                progress={100} 
                status="已完成，准备进入战略阶段" 
                colorClass="bg-emerald-500" 
              />
              <ProgressCard 
                title="商业模式草稿" 
                progress={65} 
                status="建模中，等待财务模型验证" 
                colorClass="bg-blue-500" 
              />
              <ProgressCard 
                title="目标用户深度洞察" 
                progress={30} 
                status="调研进行中，用户访谈 3/10" 
                colorClass="bg-yellow-500" 
              />
            </div>
          </GlassCard>

          {/* 创始人及伙伴状态 (人) */}
          <GlassCard className="p-6">
            <h2 className="text-2xl mb-4 flex items-center">
              <User size={20} className={`mr-2 ${COLORS.secondary}`} />
              团队及能力评估 (人)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50/50 rounded-lg">
                <p className="text-gray-700">核心能力覆盖</p>
                <p className={`text-3xl ${COLORS.secondary}`}>80%</p>
                <p className="text-sm text-gray-500">尚缺技术与法律</p>
              </div>
              <div className="p-4 bg-gray-50/50 rounded-lg">
                <p className="text-gray-700">风险偏好对齐</p>
                <p className="text-xl text-gray-800">中高</p>
                <p className="text-sm text-gray-500">建议进行磨合讨论</p>
              </div>
              <div className="p-4 bg-gray-50/50 rounded-lg">
                <p className="text-gray-700">创始人报告更新</p>
                <p className={`text-xl ${COLORS.primary}`}>最新</p>
                <p className="text-sm text-gray-500">上次更新: 2025.11.05</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 右侧边栏 */}
        <div className="lg:col-span-1 space-y-6">
          {/* 关键行动清单 (行) */}
          <GlassCard className="p-6">
            <h2 className="text-2xl mb-4 flex items-center">
              <Zap size={20} className="mr-2 text-yellow-600" />
              关键待办行动 (行)
            </h2>
            <ul className="space-y-3">
              {criticalTasks.map((task, index) => (
                <li key={index} className="flex items-start text-gray-700 text-base">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="flex-grow">{task}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* 融资/财务摘要 (钱) */}
          <GlassCard className="p-6">
            <h2 className="text-2xl mb-4 flex items-center">
              <DollarSign size={20} className="mr-2 text-green-600" />
              财务摘要 (钱)
            </h2>
            <p className="text-gray-700 mb-2">智能财务模型建议：</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              当前启动资金充足，但模型预测在<strong>第 8 个月</strong>将触及盈亏平衡点（BEP），
              请尽快在'钱'模块中完成融资策略，以应对市场波动。
            </p>
            <button className="mt-4 w-full p-2 rounded-lg text-sm transition bg-blue-500 text-white hover:bg-blue-600">
              查看智能财务模型
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
