// ------------------------ TEMPLATE LITERAL TYPES ------------------------
// This module defines a typed error reporting mechanism for different features.

// 1. `Feature` is a union type representing parts of the application
//    where an error might occur (e.g., authentication, payments, notifications).

// 2. `ErrorType` is a union of common error scenarios that might happen
//    in any feature (e.g., too many requests, invalid credentials, etc.).

// 3. `ErrorCode` combines `Feature` and `ErrorType` using template literal types
//    to create structured error codes like "auth:invalid-credentials".
//    This ensures all error codes are predictable and type-safe.

// 4. `reportError` is a function that takes a valid `ErrorCode` and logs it.
//    This is useful for centralized logging or tracking errors during development or in production.

export type Feature = 'auth' | 'payments' | 'notifications';

export type ErrorType =
  | 'too-many-requests'
  | 'invalid-credentials'
  | 'user-not-found'
  | 'payment-failed'
  | 'notification-failure'
  | 'unknown-error';

export type ErrorCode = `${Feature}:${ErrorType}`;

export const reportError = (errorCode: ErrorCode): void => {
  console.log(`Error reported on server: ${errorCode}`);
};
