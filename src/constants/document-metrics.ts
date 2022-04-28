interface IMetrics {
  metric: 'processing' | 'review' | 'completed' | 'decline';
  title: string;
}

export const METRICS: IMetrics[] = [
  {
    metric: 'processing',
    title: 'Processing',
  },
  {
    metric: 'review',
    title: 'Review',
  },
  {
    metric: 'completed',
    title: 'Completed',
  },
  {
    metric: 'decline',
    title: 'Decline',
  },
];
