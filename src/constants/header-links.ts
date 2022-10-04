import { ROUTES } from './routes';

const CATEGORIES = 'Categories';
const SUPPLIER_ACCOUNTS = 'Supplier Accounts';
const TYPES = 'Types';

export const MASTER_TABS = [CATEGORIES, SUPPLIER_ACCOUNTS, TYPES];

export const ADMIN_LINKS = [
  { title: 'Dashboard', route: ROUTES.home },
  { title: 'Inbox', route: ROUTES.inbox },
  { title: 'Master', route: ROUTES.master, tabs: MASTER_TABS },
  { title: 'Invites', route: ROUTES.invites },
  { title: 'Settings', route: ROUTES.settings },
  { title: 'Help & Support', route: ROUTES.support, isLast: true },
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
