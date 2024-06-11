export const TABLE_GRID_MARKUP = `
  minmax(33px, 43px) minmax(65px, 75px) minmax(95px, 105px)
  minmax(115px, 165px) minmax(160px, 170px) minmax(115px, 165px)
  minmax(94px, 106px) minmax(73px, 85px) minmax(73px, 85px)
  minmax(73px, 85px) minmax(83px, 95px)
  minmax(73px, 85px) minmax(100px, 130px);
`;

export const TABLE_ID = {
  date: 'create',
  supplier: 'supplier',
  tax: 'tax',
  net: 'net',
  total: 'total',
  supplier_account: 'supplier_account',
  category: 'category',
};

export const TABLE_COLUMN_NAMES = [
  {
    id: 'receipt_date',
    name: 'Date',
  },
  {
    id: 'supplier',
    name: 'Supplier',
  },
  {
    id: 'supplier_account',
    name: 'Supplier Account',
  },
  {
    id: 'category',
    name: 'Category',
  },
  {
    id: 'vat_code',
    name: 'VAT Rate',
  },
  {
    id: 'currency',
    name: 'CUR',
  },
  {
    id: 'net',
    name: 'Net',
  },
  {
    id: 'tax',
    name: 'Tax',
  },
  {
    id: 'total',
    name: 'Total',
  },
  {
    id: 'payment_status',
    name: 'Paid',
  },
];
