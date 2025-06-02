// ──────────────────────────────────────────────────────────────
// 🧑‍💼 Real-World Scenario: Submitting a Form (Create User)
// ──────────────────────────────────────────────────────────────

const createUser = (
  username: string,
  password: string,
  options: {
    sendWelcomeEmail: boolean;
    roles: string[];
    // notifyAdmin: boolean; // 🆕 Uncomment this to simulate an update
  },
) => {
  // This function creates a user with the provided credentials and options
};

/*
😎 Goal: Reuse the type of the 'options' parameter elsewhere in your app
Use cases:
  🧾 Creating mock data for tests
  🧾 Validating form inputs
  🧾 Typing Redux payloads
  🧾 Making API requests
  🧾 Building form schemas
*/

// ⛔ WRONG: Manually redefining the type is error-prone and not maintainable
type Options = {
  sendWelcomeEmail: boolean;
  roles: string[];
};

// ✅ RIGHT: Extract the type directly using TypeScript's Parameters utility
type CreateUserOptions = Parameters<typeof createUser>[2];

// ──────────────────────────────────────────────────────────────
// 🛠️ Reusing the extracted type
// ──────────────────────────────────────────────────────────────
const userOptions: CreateUserOptions = {
  sendWelcomeEmail: true,
  roles: ['admin', 'user'],
};

// ✅ Bonus: If the library updates and adds a new required field like `notifyAdmin`,
// TypeScript will immediately highlight the missing property here.
// This keeps your code aligned and bug-free.

/*
🧠 Why this is better:
  🎆 DRY (Don't Repeat Yourself): No manual typing, less chance for mistakes
  🎆 Refactor-safe: Automatically adapts to changes in the source function
  🎆 Strong typing: Compile-time errors help you catch issues early
*/

// ──────────────────────────────────────────────────────────────
// 📊 Summary: How Parameters<T>[n] Works
// ──────────────────────────────────────────────────────────────

/*
| Code                                     | Meaning                                           |
| ----------------------------------------| ------------------------------------------------- |
| typeof createUser                       | The function type itself                          |
| Parameters<typeof fn>                   | Tuple of all parameters `[string, string, {...}]` |
| [2]                                     | Gets the 3rd parameter                            |
| type MyType = Parameters<typeof fn>[2]  | Extracts and reuses the type of that parameter    |
*/
