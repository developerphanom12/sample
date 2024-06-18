export enum ROUTES {
  home = '/',
  receiptDetails = 'receipt-details',
  filesUploadPreview = '/inbox/files-upload-preview',
  filesUploadPreviewsales = '/sales-invoices/files-upload-preview',
  login = '/login',
  sign_up = '/sign-up',
  manage = '/manage',
  expenseReport = '/expense-report',
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
  purchaseInvoices = '/purchase-invoices',
  salesInvoices = '/sales-invoices',
  salesInvoiceDetails = '/sales-invoices/details',
  notFound = '*',
}
