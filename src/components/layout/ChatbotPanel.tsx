import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { COLORS, GLASS_STYLES } from '../../lib/design-system';

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Co-Fo AI助理对话面板
 * 右侧滑出的聊天界面
 */
export const ChatbotPanel: React.FC<ChatbotPanelProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '你好！我是 Co-Fo AI 助理。有什么可以帮助你的吗？' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([
      ...messages,
      { role: 'user', text: input },
      { role: 'assistant', text: '这是一个示例回复。实际应用中，这里会连接到真实的AI服务。' }
    ]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-screen w-full md:w-[360px] bg-white/90 backdrop-blur-md shadow-2xl z-50 flex flex-col border-l border-gray-200">
      {/* 头部 */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white/60 backdrop-blur-sm">
        <h2 className={`text-xl ${COLORS.primary}`}>Co-Fo AI 助理</h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="关闭对话"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div 
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : `${GLASS_STYLES.light} text-gray-800`
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 输入区域 */}
      <div className="p-4 border-t border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="输入消息..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
          />
          <button 
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
