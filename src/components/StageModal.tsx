import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WorkflowStage, WORKFLOW_STAGES } from '../types/notificationTypes';

interface StageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (stages: WorkflowStage[]) => void;
  currentStages: WorkflowStage[];
}

const StageModal: React.FC<StageModalProps> = ({ isOpen, onClose, onSubmit, currentStages }) => {
  const [selectedStages, setSelectedStages] = useState<WorkflowStage[]>(currentStages);

  const handleStageToggle = (stage: WorkflowStage) => {
    if (selectedStages.includes(stage)) {
      setSelectedStages(selectedStages.filter(s => s !== stage));
    } else {
      setSelectedStages([...selectedStages, stage]);
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedStages);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Manage Stages</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
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

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageModal;