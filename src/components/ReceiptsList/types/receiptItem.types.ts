export interface IReceiptsItemsListProps {
  customId: string;
  total: number | null;
  date: Date;
  status: TStatuses;
  currency: string | null;
  dateFormat: string;
  receiptId: string;
  receiptIndex: number;
}

export interface IReceiptsItemProps extends IReceiptsItemsListProps {
  onItemClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
