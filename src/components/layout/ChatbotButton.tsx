import React from 'react';

interface ChatbotButtonProps {
  onClick: () => void;
  logoSrc: string;
}

/**
 * Co-Fo AI助理触发按钮
 * 带有光晕动画效果
 */
export const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick, logoSrc }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full overflow-hidden shadow-2xl z-40
                 cursor-pointer transform hover:scale-110 
                 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group
                 border-2 border-white/80"
      style={{
        animation: 'pulse-glow 3s ease-in-out infinite'
      }}
    >
      <img 
        src={logoSrc}
        alt="Co-Fo" 
        className="w-full h-full object-cover scale-150 transition-transform duration-300 group-hover:scale-[1.65] group-hover:rotate-12"
      />
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3),
                       0 0 20px rgba(147, 51, 234, 0.2);
          }
          50% {
            box-shadow: 0 10px 50px rgba(147, 51, 234, 0.4),
                       0 0 30px rgba(59, 130, 246, 0.3),
                       0 0 15px rgba(234, 179, 8, 0.2);
          }
        }
      `}</style>
    </button>
  );
};
