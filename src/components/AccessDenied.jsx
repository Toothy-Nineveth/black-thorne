import React from 'react';

const AccessDenied = ({ attempts, onRetry }) => {
  const maxAttempts = 3;
  const remaining = Math.max(0, maxAttempts - attempts);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-red-950 text-red-500 font-mono p-4 relative overflow-hidden alarm-state">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 border-4 border-red-600 p-8 max-w-2xl text-center bg-black bg-opacity-80 shadow-[0_0_50px_rgba(255,0,0,0.5)] crt-flicker">
        
        <div className="flex justify-center mb-6">
          <svg className="w-24 h-24 text-red-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-red-600 glitch-text" data-text="ACCESS DENIED">
          ACCESS DENIED
        </h1>
        
        <div className="border-t-2 border-b-2 border-red-800 py-4 mb-6">
          <p className="text-xl md:text-2xl mb-2">INVALID CREDENTIALS PROVIDED</p>
          <p className="text-red-400">Security protocol epsilon activated.</p>
        </div>

        <div className="mb-8 font-bold text-lg flex justify-between px-8">
          <span>THREAT LEVEL: ALPHA</span>
          <span className={remaining === 0 ? "text-yellow-500 animate-pulse" : ""}>
            ATTEMPTS REMAINING: {remaining}/{maxAttempts}
          </span>
        </div>

        {remaining > 0 ? (
          <button 
            onClick={onRetry}
            className="px-8 py-3 bg-red-900 bg-opacity-40 border-2 border-red-600 text-red-100 hover:bg-red-800 hover:text-white transition-all uppercase tracking-widest font-bold focus:outline-none focus:ring-4 focus:ring-red-500"
          >
            Acknowledge & Retry
          </button>
        ) : (
          <div className="text-yellow-500 border border-yellow-500 p-4 bg-black">
            <p className="font-bold mb-2">MAXIMUM DISSONANCE REACHED</p>
            <p className="text-sm">Automated tracing initiated. Stand by for containment team.</p>
            {/* User can still bypass this via a subtle reload/retry button for usability, though technically "locked out" */}
            <button 
              onClick={onRetry}
              className="mt-4 text-xs underline opacity-50 hover:opacity-100"
            >
              [Override Security Lock]
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-4 text-red-800 text-sm font-bold opacity-70">
        SYS_ERR_401: Cannot Verify Clearance
      </div>
      <div className="absolute bottom-4 right-4 text-red-800 text-sm font-bold opacity-70">
        IP LOGGED AND TRACED
      </div>
    </div>
  );
};

export default AccessDenied;
