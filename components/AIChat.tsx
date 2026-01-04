
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hello! I am GEA Assistant. How can I help you with school admissions or information today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly for initialization as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a helpful assistant for Global Educational Academy in Rawalpindi. 
          The school address is 245 Tufail Rd, Lalkurti. Phone: (051) 5795201. 
          We offer classes from Playgroup to Secondary (Matric). 
          Our values are Discipline, Excellence, Character, and Knowledge. 
          Admissions are open for the current session. 
          The principal is Mrs. Zahida Ahmed.
          Be professional, warm, and encourage parents to visit the campus.`,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact our office.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily unavailable. Please call our office directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#28a745] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
      >
        <MessageSquare className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-in slide-in-from-bottom duration-300">
          <div className="bg-[#003366] p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <span className="font-bold">GEA Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-400">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-[#003366] text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#28a745]" />
                  <span className="text-xs text-gray-400">Assistant is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-[#28a745] outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-[#28a745] text-white p-2 rounded-xl hover:bg-green-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
