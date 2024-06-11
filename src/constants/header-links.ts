import { ROUTES } from './routes';

const SUPPLIERS = 'Suppliers';
const SUPPLIER_ACCOUNTS = 'Supplier Accounts';
const CATEGORIES = 'Categories';
const CUSTOMERS = 'Customers';
const CUSTOMER_ACCOUNTS = 'Customer Accounts';
const PAYMENT_METHODS = 'Payment Methods';

export const MASTER_TABS = [SUPPLIERS, SUPPLIER_ACCOUNTS, CATEGORIES, CUSTOMERS, CUSTOMER_ACCOUNTS, PAYMENT_METHODS];

export const ADMIN_LINKS = [
  { title: 'DASHBOARD', route: ROUTES.home },
  { title: 'PURCHASES', route: ROUTES.purchaseInvoices },
  { title: 'SALES', route: ROUTES.salesInvoices },
  { title: 'EXPENSE REPORT', route: ROUTES.expenseReport},
  { title: 'MANAGE', route: ROUTES.manage, tabs: MASTER_TABS },
  { title: 'INVITES', route: ROUTES.invites },
  { title: 'SETTINGS', route: ROUTES.settings, isLast: true },
  // { title: 'HELP & SUPPORT', route: ROUTES.support, isLast: true },
];

export const CUSTOMER_LINKS = [
  { title: 'Dashboard', route: ROUTES.home },
  { title: 'Inbox', route: ROUTES.home },
];

export const HELP_LINK = [
  { title: '', route: ROUTES.support, iconName:'helpIcon' },
];

export const getAvatarLinks = (logout: () => void) => [
  { title: 'Profile', route: ROUTES.settings, iconName: 'profileIcon' },
  {
    title: 'Logout',
    route: ROUTES.login,
    iconName: 'logoutIcon',
    onClick: logout,
  },
];

export const SUPPORT_CENTER_ROUTE = 'https://support.google.com/';
