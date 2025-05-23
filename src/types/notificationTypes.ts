export interface Recipient {
  id: string;
  name: string;
  role: string;
  subscribedStages: WorkflowStage[];
}

export enum WorkflowStage {
  PENDENCY = 'Pendency',
  DEVIATION = 'Deviation',
  MITIGATION = 'Mitigation',
  SANCTION = 'Sanction',
  LOGIN = 'Login',
  IMD = 'IMD',
  ACTIVITY_COMPLETE = 'Activity Complete',
  DISBURSE = 'Disburse',
  SEND_BACK = 'Send Back',
  NOTES = 'Notes',
  RECOMMENDATION = 'Recommendation',
  REJECTED = 'Rejected',
  SKIP = 'Skip',
  APPROVE = "Approve"
}

export const WORKFLOW_STAGES = [
  WorkflowStage.PENDENCY,
  WorkflowStage.DEVIATION,
  WorkflowStage.MITIGATION,
  WorkflowStage.SANCTION,
  WorkflowStage.LOGIN,
  WorkflowStage.IMD,
  WorkflowStage.ACTIVITY_COMPLETE,
  WorkflowStage.DISBURSE,
  WorkflowStage.SEND_BACK,
  WorkflowStage.NOTES,
  WorkflowStage.RECOMMENDATION,
  WorkflowStage.REJECTED,
  WorkflowStage.SKIP,
  WorkflowStage.APPROVE
];

export const MOCK_USERS = [
  'Rahul Sharma',
  'Priya Patel',
  'Amit Kumar',
  'Neha Singh',
  'Vikram Malhotra',
  'Anjali Desai',
  'Rajesh Verma',
  'Meera Kapoor',
  'Suresh Reddy',
  'Deepa Gupta'
];

export const MOCK_RECIPIENTS: Recipient[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Loan Officer',
    subscribedStages: [WorkflowStage.PENDENCY, WorkflowStage.SANCTION]
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Underwriter',
    subscribedStages: [WorkflowStage.DEVIATION, WorkflowStage.MITIGATION]
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'Analyst',
    subscribedStages: [WorkflowStage.LOGIN, WorkflowStage.IMD]
  }
];