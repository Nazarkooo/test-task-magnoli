export const APP_CONFIG = {
  MAX_TRANSACTIONS_DISPLAY: 10,
  CURRENCY_SYMBOL: '$',
  DATE_FORMAT: 'en-US',
} as const;

export const ROUTES = {
  HOME: '/',
  TRANSACTION_DETAIL: '/transaction/:id',
} as const;

export const ARIA_LABELS = {
  LOADING: 'Loading transactions',
  TRANSACTION_ITEM: 'View transaction details',
  BACK_BUTTON: 'Go back to transactions list',
} as const;
