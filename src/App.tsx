import React from 'react';
import { NotificationProvider } from './context/NotificationContext';
import NotificationPanel from './components/NotificationPanel';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <NotificationProvider>
        <NotificationPanel />
      </NotificationProvider>
    </div>
  );
}

export default App;