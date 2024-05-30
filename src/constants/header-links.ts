import { ROUTES } from './routes';

const CATEGORIES = 'Categories';
const SUPPLIER_ACCOUNTS = 'Supplier Accounts';
const TYPES = 'Payment Types';

export const MASTER_TABS = [CATEGORIES, SUPPLIER_ACCOUNTS, TYPES];

export const ADMIN_LINKS = [
  { title: 'DASHBOARD', route: ROUTES.home },
  { title: 'PURCHASES', route: ROUTES.purchases },
  { title: 'MASTER', route: ROUTES.master, tabs: MASTER_TABS },
  { title: 'INVITES', route: ROUTES.invites },
  { title: 'SALES', route: ROUTES.salesInvoices },
  { title: 'SETTINGS', route: ROUTES.settings },
  { title: 'HELP & SUPPORT', route: ROUTES.support, isLast: true },
];

export const CUSTOMER_LINKS = [
  { title: 'Dashboard', route: ROUTES.home },
  { title: 'Inbox', route: ROUTES.home },
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
