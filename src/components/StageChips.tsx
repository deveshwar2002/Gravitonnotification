import React from 'react';
import { WorkflowStage } from '../types/notificationTypes';

interface StageChipsProps {
  stages: WorkflowStage[];
}

const StageChips: React.FC<StageChipsProps> = ({ stages }) => {
  // Function to get color based on stage
  const getStageColor = (stage: WorkflowStage): string => {
    switch(stage) {
      case WorkflowStage.INITIAL_REVIEW:
        return 'bg-purple-100 text-purple-800';
      case WorkflowStage.KYC:
        return 'bg-green-100 text-green-800';
      case WorkflowStage.COMPLIANCE:
        return 'bg-yellow-100 text-yellow-800';
      case WorkflowStage.FINAL_APPROVAL:
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-wrap gap-1">
      {stages.map((stage) => (
        <span 
          key={stage} 
          className={`text-xs px-2 py-1 rounded-full ${getStageColor(stage)}`}
        >
          {stage}
        </span>
      ))}
    </div>
  );
};

export default StageChips;