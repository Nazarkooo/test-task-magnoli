export type TransactionType = 'credit' | 'payment';
export type TransactionStatus = 'pending' | 'completed' | 'approved';
export type PaymentStatus = 'paid' | 'unpaid' | 'overdue';

export interface Transaction {
  readonly id: number;
  readonly type: TransactionType;
  readonly amount: number;
  readonly merchant: string;
  readonly description: string;
  readonly date: string;
  readonly status: TransactionStatus;
  readonly authorizedUser?: string;
  readonly location: string;
  readonly cardUsed: string;
  readonly percentage: number;
}

export interface TransactionItemProps {
  readonly transaction: Transaction;
  readonly onTransactionClick: (transactionId: number) => void;
}

export interface User {
  readonly cardLimit: number;
  readonly cardBalance: number;
  readonly paymentStatus: PaymentStatus;
}

export interface TestData {
  readonly user: User;
  readonly transactions: readonly Transaction[];
}

export interface DailyPointsConfig {
  readonly firstDayPoints: number;
  readonly secondDayPoints: number;
  readonly previousDayMultiplier: number;
  readonly dayBeforePreviousMultiplier: number;
}

export interface Season {
  readonly name: string;
  readonly start: Date;
}

export interface ErrorBoundaryState {
  readonly hasError: boolean;
  readonly error?: Error;
}
