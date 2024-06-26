export interface ICreateExpense {
    report_for: string;
    date: string;
    report_name: string;
    active_account?: string | null;
  }