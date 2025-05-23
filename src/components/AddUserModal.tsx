import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { WorkflowStage, WORKFLOW_STAGES, MOCK_USERS } from '../types/notificationTypes';
import { useNotification } from '../context/NotificationContext';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedStages, setSelectedStages] = useState<WorkflowStage[]>([]);
  const { addRecipient } = useNotification();

  const handleSubmit = () => {
    if (selectedUser) {
      addRecipient(selectedUser, selectedStages);
      setSelectedUser('');
      setSelectedStages([]);
      onClose();
    }
  };

  const handleStageToggle = (stage: WorkflowStage) => {
    if (selectedStages.includes(stage)) {
      setSelectedStages(selectedStages.filter(s => s !== stage));
    } else {
      setSelectedStages([...selectedStages, stage]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Add User</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select User
            </label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a user...</option>
              {MOCK_USERS.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Workflow Stages
            </label>
            <div className="space-y-2 max-h-[200px] overflow-y-auto border rounded-md p-2">
              {WORKFLOW_STAGES.map((stage) => (
                <div key={stage} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`stage-${stage}`}
                    checked={selectedStages.includes(stage)}
                    onChange={() => handleStageToggle(stage)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`stage-${stage}`} className="ml-2 block text-sm text-gray-700">
                    {stage}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedUser}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={16} className="mr-1" />
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;