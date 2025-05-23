import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import NotificationTable from './NotificationTable';
import InfoBanner from './InfoBanner';
import AddUserModal from './AddUserModal';

const NotificationPanel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notification Management</h1>
          <p className="text-gray-600 mt-1">
            Manage who gets notified about updates for this loan application.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <UserPlus size={18} className="mr-1" />
          Add User
        </button>
      </div>

      <InfoBanner />
      <NotificationTable />
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default NotificationPanel;