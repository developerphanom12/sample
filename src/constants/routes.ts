export enum ROUTES {
  home = '/',
  inbox = '/inbox',
  receiptDetails = 'receipt-details',
  filesUploadPreview = 'files-upload-preview',
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
  chooseCompany = '/choose-company',
  capiumLogin = '/capium-login',
  notFound = '*',
}
