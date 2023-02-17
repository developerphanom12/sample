export enum ROUTES {
  home = '/',
  inbox = '/inbox',
  receiptDetails = 'receipt-details',
  filesUploadPreview = '/inbox/files-upload-preview',
  login = '/login',
  sign_up = '/sign-up',
  master = '/master',
  settings = '/settings',
  termsOfService = '/settings/terms-of-service',
  privacyPolicy = '/settings/privacy-policy',
  usersList = '/settings/users-list',
  companiesList = '/settings/companies-list',
  support = '/support',
  preference = '/preference',
  forgotPassword = '/forgot-password',
  resetPassword = '/reset-password/:token',
  signUpNewMember = '/signup-new-member/:token',
  bindSocialAccount = '/bind-social-account/:token',
  chooseCompany = '/choose-company',
  capiumLogin = '/capium-login',
  invites = '/invites',
  callback = '/callback',
  salesInvoices = '/sales-invoices',
  salesInvoiceDetails = '/sales-invoices/details',
  notFound = '*',
}
