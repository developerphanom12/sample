export interface IReceiptsItemsListProps {
  supplier?: string | null;
  total: number | null;
  date: Date;
  status: TStatuses;
  currency: string | null;
  dateFormat: string;
}

export interface IReceiptsItemProps extends IReceiptsItemsListProps {
  onItemClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
