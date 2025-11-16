import React, { useMemo } from 'react';

interface ContentAreaProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  isChatbotOpen: boolean;
}

/**
 * 主内容区域容器
 * 自动适配侧边栏和聊天面板的状态
 */
export const ContentArea: React.FC<ContentAreaProps> = ({
  children,
  isSidebarOpen,
  isChatbotOpen,
}) => {
  const contentStyle = useMemo(() => {
    let width = 'w-full';
    
    if (isChatbotOpen) {
      width = 'md:w-[calc(100%-360px)] lg:w-[calc(100%-280px-360px)]';
    } else if (isSidebarOpen) {
      width = 'md:w-[calc(100%-280px)]';
    } else {
      width = 'md:w-[calc(100%-60px)]';
    }

    const marginLeft = typeof window !== 'undefined' && window.innerWidth >= 768 
      ? (isSidebarOpen ? 'md:ml-[280px]' : 'md:ml-16')
      : '';

    return `flex-grow ${width} ${marginLeft} relative`;
  }, [isSidebarOpen, isChatbotOpen]);

  return (
    <main className={`${contentStyle} h-screen overflow-y-auto bg-gradient-to-br from-gray-50/50 to-blue-50/30`}>
      {children}
    </main>
  );
};
