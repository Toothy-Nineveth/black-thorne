import React, { useState, useEffect, useRef } from 'react';

const TerminalConsole = ({ onCommand }) => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle console with Ctrl+` or just ` (backtick) - common in games
      if (e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim());
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 text-[10px] text-gray-500 p-1 hover:text-[#d4af37] transition-colors z-50 no-print"
      >
        SYS_CONSOLE_V1.0.4
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t-2 border-[#d4af37] p-2 z-50 font-mono shadow-[0_-5px_15px_rgba(212,175,55,0.2)] no-print">
      <div className="max-w-6xl mx-auto flex items-center gap-2">
        <span className="text-[#d4af37] font-bold text-sm select-none">BT_PROMPT: </span>
        <form onSubmit={handleSubmit} className="flex-1">
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent border-none text-white focus:outline-none p-0 text-sm"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-white text-xs px-2"
        >
          [X]
        </button>
      </div>
    </div>
  );
};

export default TerminalConsole;
