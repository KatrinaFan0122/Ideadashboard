import React from 'react';
import { Menu, X, LucideIcon } from 'lucide-react';
import { COLORS, GRADIENTS } from '../../lib/design-system';

export interface MenuItem {
  id: string;
  name: string;
  icon: LucideIcon;
  sub: Array<string | SubMenuItem>;
}

export interface SubMenuItem {
  name: string;
  type: 'progress';
  icon: LucideIcon;
  progress: number;
  color: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  menuItems: MenuItem[];
  activeView: string;
  onMenuClick: (view: string) => void;
}

/**
 * 侧边栏导航组件
 * 支持展开/收缩、多级菜单、进度显示
 */
export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  menuItems,
  activeView,
  onMenuClick,
}) => {
  return (
    <aside 
      className={`fixed top-0 left-0 h-screen transition-all duration-300 z-30 ${
        isOpen ? 'w-[280px]' : 'w-16'
      } ${GRADIENTS.sidebar} backdrop-blur-sm shadow-2xl border-r border-white/50`}
    >
      {/* 头部 */}
      <div className="p-4 flex items-center justify-between h-16 border-b border-white/50">
        <h1 
          className={`text-2xl ${COLORS.primary} ${
            isOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-150`}
        >
          Co-Fo
        </h1>
        <button 
          onClick={onToggle}
          className={`p-2 rounded-full hover:bg-white/50 ${COLORS.primary} transition`}
          aria-label={isOpen ? "收起菜单" : "展开菜单"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* 导航菜单 */}
      <nav className="p-3 space-y-5 overflow-y-auto h-[calc(100%-4rem)]">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isModuleActive = activeView === item.name;
          
          return (
            <div 
              key={item.id} 
              className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} ${
                index > 0 ? 'pt-5 border-t border-blue-200/50' : ''
              }`}
            >
              {/* 模块标题按钮 */}
              <button 
                onClick={() => onMenuClick(item.name)}
                className={`w-full text-left px-3 py-2 rounded-lg mb-3 transition-all flex items-center gap-2 ${
                  isModuleActive 
                    ? 'bg-white/90 shadow-lg border-2 border-blue-400' 
                    : 'bg-white/40 hover:bg-white/60 border border-transparent'
                }`}
              >
                <Icon size={18} className={COLORS.primary} />
                <span className="text-gray-800 font-bold">{item.name}</span>
              </button>
              
              {/* 子菜单 */}
              <div className="space-y-1.5 pl-1">
                {item.sub.map(subItem => {
                  const isSubItemObject = typeof subItem === 'object';
                  const subName = isSubItemObject ? subItem.name : subItem;
                  const isActive = activeView === subName;
                  
                  // 带进度条的子项
                  if (isSubItemObject && subItem.type === 'progress') {
                    const SubIcon = subItem.icon;
                    return (
                      <button
                        key={subName}
                        onClick={() => onMenuClick(subName)}
                        className={`w-full text-left p-2.5 rounded-lg transition-all ${
                          isActive 
                            ? 'bg-white/90 shadow-md border border-blue-400' 
                            : 'bg-white/40 hover:bg-white/60 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <SubIcon 
                              size={14} 
                              className={subItem.color.replace('bg-', 'text-')} 
                            />
                            <span className="text-xs text-gray-800">{subName}</span>
                          </div>
                          <span className="text-xs text-gray-500">{subItem.progress}%</span>
                        </div>
                        {/* 进度条 */}
                        <div className="w-full bg-gray-200/70 rounded-full h-1">
                          <div 
                            className={`h-1 rounded-full ${subItem.color} transition-all duration-300`} 
                            style={{ width: `${subItem.progress}%` }}
                          ></div>
                        </div>
                      </button>
                    );
                  }
                  
                  // 普通文本子菜单项
                  return (
                    <button
                      key={subName}
                      onClick={() => onMenuClick(subName)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-white/90 shadow-md text-blue-700 border border-blue-400' 
                          : 'bg-white/30 hover:bg-white/50 text-gray-700'
                      }`}
                    >
                      {subName}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
