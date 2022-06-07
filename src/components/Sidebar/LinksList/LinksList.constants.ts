import { ROUTES } from 'constants/routes';

export const getSettingsLinks = (logout: () => void) => [
  { title: 'My Account', route: ROUTES.settings },
  { title: 'Terms of Service', route: ROUTES.termsOfService },
  { title: 'Privacy Policy', route: ROUTES.privacyPolicy },
  { title: 'Logout', route: ROUTES.login, onClick: logout },
];
