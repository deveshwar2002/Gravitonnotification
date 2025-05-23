import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipient, MOCK_RECIPIENTS, WorkflowStage } from '../types/notificationTypes';

interface NotificationContextType {
  recipients: Recipient[];
  addRecipient: (name: string, stages: WorkflowStage[]) => void;
  removeRecipient: (id: string) => void;
  updateRecipientStages: (id: string, stages: WorkflowStage[]) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [recipients, setRecipients] = useState<Recipient[]>(MOCK_RECIPIENTS);

  const addRecipient = (name: string, stages: WorkflowStage[]) => {
    const newRecipient: Recipient = {
      id: Date.now().toString(),
      name,
      role: 'User',
      subscribedStages: stages
    };

    setRecipients([...recipients, newRecipient]);
  };

  const removeRecipient = (id: string) => {
    setRecipients(recipients.filter(recipient => recipient.id !== id));
  };

  const updateRecipientStages = (id: string, stages: WorkflowStage[]) => {
    setRecipients(
      recipients.map(recipient =>
        recipient.id === id
          ? { ...recipient, subscribedStages: stages }
          : recipient
      )
    );
  };

  return (
    <NotificationContext.Provider value={{ recipients, addRecipient, removeRecipient, updateRecipientStages }}>
      {children}
    </NotificationContext.Provider>
  );
};