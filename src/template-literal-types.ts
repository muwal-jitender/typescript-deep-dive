// ─────────────────────────────────────────────────────────────
// 🎯 TypeScript Feature: Template Literal Types
// 📦 Use Case Example: Structured Error Codes (but not limited to it!)
// ─────────────────────────────────────────────────────────────

/*
🔍 Template Literal Types are a powerful feature in TypeScript that lets you:
  - Combine multiple string literal types into structured patterns
  - Generate string types that follow strict formats
  - Automatically create all valid combinations between multiple domains

💡 It's like string concatenation — but at the **type level**!

Let’s walk through one example: structured error codes.
But remember — this is just *one of many* applications.
*/

export type Feature = 'auth' | 'payments' | 'notifications';

export type ErrorType =
  | 'too-many-requests'
  | 'invalid-credentials'
  | 'user-not-found'
  | 'payment-failed'
  | 'notification-failure'
  | 'unknown-error';

/*
🎯 Here we use template literal types to build structured error codes:
This creates all combinations of `${Feature}:${ErrorType}`.

🧮 Cartesian Product:
  3 Features × 6 ErrorTypes = 18 valid combinations

✅ Examples:
  - 'auth:user-not-found'
  - 'payments:payment-failed'
  - 'notifications:too-many-requests'
*/

export type ErrorCode = `${Feature}:${ErrorType}`;

export const reportError = (errorCode: ErrorCode): void => {
  console.log(`🚨 Error reported: ${errorCode}`);
};

reportError('auth:user-not-found'); // ✅ Valid
reportError('payments:payment-failed'); // ✅ Valid
// reportError('billing:expired')        // ❌ Compile-time error

// ─────────────────────────────────────────────────────────────
// 💡 Other Powerful Use Cases for Template Literal Types
// ─────────────────────────────────────────────────────────────

/*
1️⃣ API Endpoint Paths
You can define your entire API structure using safe, composable paths:

  type Entity = 'user' | 'product' | 'order';
  type Method = 'get' | 'create' | 'update' | 'delete';

  type ApiRoute = `/api/${Entity}/${Method}`;

  const route: ApiRoute = '/api/user/create'; // ✅
  // const wrongRoute: ApiRoute = '/api/customer/create'; // ❌ Not allowed

2️⃣ Event Names
Useful in socket.io or analytics:

  type Module = 'chat' | 'video';
  type Action = 'start' | 'stop';

  type EventName = `${Module}:${Action}`;

3️⃣ Localization Keys
Create keys like `button.save`, `form.username`, etc.:

  type Section = 'button' | 'form';
  type Key = 'save' | 'cancel' | 'username';

  type TranslationKey = `${Section}.${Key}`;

4️⃣ Permissions or Roles
  type Role = 'admin' | 'editor';
  type Scope = 'read' | 'write';

  type Permission = `${Role}:${Scope}`;
*/

// ─────────────────────────────────────────────────────────────
// 📊 Summary: Template Literal Types
// ─────────────────────────────────────────────────────────────

/*
| Concept                   | Description                                      |
|---------------------------|--------------------------------------------------|
| Template Literal Types    | Combine unions to generate structured strings    |
| Cartesian Product         | All combinations of two unions (`A × B`)         |
| Real-World Applications   | Error codes, API routes, event names, permissions|
| Benefits                  | Autocomplete, compile-time validation, DRY types |
*/
