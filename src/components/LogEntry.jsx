import React, { useState } from 'react';

const LogEntry = ({ log, initialRevealed = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [revealedRedactions, setRevealedRedactions] = useState([]);

  // Handles clicking on a redaction
  const toggleRedaction = (e, index) => {
    e.stopPropagation(); // don't toggle the expanded log entry
    if (initialRevealed) return; // already revealed
    
    setRevealedRedactions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Helper to chunk text logically by sentences to attach redaction logic
  const renderContent = (content, redactedIndices) => {
    const sentences = content.match(/[^.!?]+[.!?]+/g) || [content];
    
    return sentences.map((sentence, index) => {
      const isRedacted = redactedIndices.includes(index) && !revealedRedactions.includes(index) && !initialRevealed;
      
      if (isRedacted) {
        // Redact mostly alphanumeric characters, leave punctuation
        const redactedText = sentence.replace(/[a-zA-Z0-9]/g, '█');
        return (
          <span 
            key={index} 
            className="redacted-block cursor-pointer mx-1 my-[2px] inline-block leading-tight text-black bg-black"
            onClick={(e) => toggleRedaction(e, index)}
            title="Classified - Click to attempt decryption"
          >
            {redactedText}
          </span>
        );
      }
      return <span key={index} className="transition-opacity duration-300">{sentence} </span>;
    });
  };

  // Assign styling based on clearance level
  const getClassificationColor = (classification) => {
    if (classification.includes('TOP SECRET') || classification.includes('EYES ONLY') || classification.includes('CRITICAL')) {
      return 'text-red-500 border-red-500 bg-[rgba(139,0,0,0.1)]';
    }
    if (classification.includes('CONFIDENTIAL') || classification.includes('RESTRICTED')) {
      return 'text-yellow-500 border-yellow-500 bg-[rgba(255,215,0,0.05)]';
    }
    return 'text-green-500 border-green-500 bg-[rgba(0,128,0,0.05)]';
  };

  const isHighClearance = log.classification.includes('TOP SECRET') || log.classification.includes('EYES ONLY');

  return (
    <div 
      className={`border border-gray-700 bg-black bg-opacity-60 mb-6 cursor-pointer hover:border-gray-500 transition-colors ${expanded ? 'shadow-[0_0_15px_rgba(255,255,255,0.05)]' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header Bar */}
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center p-3 border-b border-gray-800 ${expanded ? getClassificationColor(log.classification) : ''}`}>
        
        <div className="flex items-center gap-3 w-full md:w-auto mb-2 md:mb-0">
          <span className={`px-2 py-1 text-xs font-bold border ${getClassificationColor(log.classification)}`}>
            {log.classification}
          </span>
          <span className="text-gray-400 font-mono tracking-widest text-sm whitespace-nowrap">
            [{log.date}]
          </span>
        </div>

        <div className="text-xs md:text-sm font-bold tracking-widest truncate max-w-full md:max-w-[40%] text-right text-gray-500 flex items-center gap-2">
          {log.keyLog && <span className="text-[#d4af37]" title="Key Operational Asset">★</span>}
          {log.operationCode}
          <span className="opacity-50 text-[10px] ml-2">{expanded ? '▲' : '▼'}</span>
        </div>
      </div>

      {/* Title block */}
      <div className="p-4 bg-gray-900 bg-opacity-40">
        <h3 className={`text-lg font-bold font-mono tracking-wide ${isHighClearance ? 'text-red-400' : 'text-gray-300'}`}>
          {log.title}
        </h3>
      </div>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 relative border-t border-gray-800">
          
          {log.classification === 'DECLASSIFIED' && (
            <div className="classification-stamp top-1/4 left-1/4 z-0">DECLASSIFIED {log.declassifiedDate}</div>
          )}

          <div className="relative z-10 text-gray-300 font-mono text-sm leading-relaxed space-y-4 whitespace-pre-line courier-prime pr-2 selection:bg-red-900 selection:text-white">
            {renderContent(log.content, log.redactedSections || [])}
          </div>
          
          <div className="mt-8 pt-4 border-t border-dashed border-gray-700 text-xs text-gray-500 flex justify-between items-end">
            <div>
              <span className="block mb-1">ID: {log.id}</span>
              {log.declassifiedDate && <span className="block text-green-700 mb-1">DECLASSIFIED: {log.declassifiedDate}</span>}
              <span className="block italic">ARCHIVE MAINTAINED BY DIRECTORATE OF INTELLIGENCE</span>
            </div>
            
            <button 
              className="border border-gray-600 px-3 py-1 hover:bg-gray-800 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); window.print(); }}
              title="Print for physical copy"
            >
              [PRINT RECORD]
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LogEntry;
