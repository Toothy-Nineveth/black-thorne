import React, { useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center font-mono text-gray-400">
        <div className="text-center">
          <div className="mb-4 inline-block w-8 h-8 border-4 border-[#d4af37] border-t-transparent animate-spin rounded-full"></div>
          <p className="animate-pulse">DECRYPTING CONNECTION...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <DashboardPage /> : <LoginPage />;
};

const APP_VERSION = 2; // Current client version

function App() {
  useEffect(() => {
    // Check version every 20 seconds
    const checkVersion = async () => {
      try {
        // Append timestamp to bust cache
        const response = await fetch(`/version.json?t=${new Date().getTime()}`);
        if (!response.ok) return;
        
        const data = await response.json();
        // If the server's version is strictly greater than the client's version, hard reload
        if (data.version && data.version > APP_VERSION) {
          console.log('Update detected. Forcing client refresh...');
          window.location.reload(true);
        }
      } catch (err) {
        // Silently ignore network errors (e.g. offline)
      }
    };
    
    checkVersion();
    const interval = setInterval(checkVersion, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App selection:bg-red-900 selection:text-white">
      <AppContent />
    </div>
  );
}

export default App;
