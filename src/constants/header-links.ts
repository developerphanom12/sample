import { ROUTES } from './routes';

const CATEGORIES = 'Categories';
const SUPPLIERS = 'Suppliers';
const TYPES = 'Types';

export const MASTER_TABS = [CATEGORIES, SUPPLIERS, TYPES];

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
