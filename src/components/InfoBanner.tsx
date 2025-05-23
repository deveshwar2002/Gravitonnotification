import React from 'react';
import { Info } from 'lucide-react';

const InfoBanner: React.FC = () => {
  return (
    <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md flex items-start">
      <Info className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
      <p className="text-blue-700 text-sm">
        Users who have worked on this loan application are automatically subscribed. 
        You may add or remove recipients manually below.
      </p>
    </div>
  );
};

export default InfoBanner;