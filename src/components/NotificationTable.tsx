import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { useNotification } from '../context/NotificationContext';
import StageChips from './StageChips';
import StageModal from './StageModal';

const NotificationTable: React.FC = () => {
  const { recipients, removeRecipient, updateRecipientStages } = useNotification();
  const [activeRecipient, setActiveRecipient] = useState<string | null>(null);
  const [isStageModalOpen, setIsStageModalOpen] = useState(false);

  const handleStageUpdate = (stages: WorkflowStage[]) => {
    if (activeRecipient) {
      updateRecipientStages(activeRecipient, stages);
    }
  };

  return (
    <>
      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subscribed Stages
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recipients.map((recipient) => (
              <tr key={recipient.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {recipient.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {recipient.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StageChips stages={recipient.subscribedStages} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setActiveRecipient(recipient.id);
                      setIsStageModalOpen(true);
                    }}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <Settings size={14} className="mr-1" />
                    Manage
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => removeRecipient(recipient.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <StageModal
        isOpen={isStageModalOpen}
        onClose={() => {
          setIsStageModalOpen(false);
          setActiveRecipient(null);
        }}
        onSubmit={handleStageUpdate}
        currentStages={activeRecipient ? recipients.find(r => r.id === activeRecipient)?.subscribedStages || [] : []}
      />
    </>
  );
};

export default NotificationTable;