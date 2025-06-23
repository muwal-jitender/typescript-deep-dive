// 🔑 ADVANCED INDEX SIGNATURES IN TYPESCRIPT
// ----------------------------------------------

/*
📘 Index signatures allow you to define the shape of objects
where property names are not known in advance, but their types follow a pattern.
*/

// Example 1: Using `string` as index type
interface ErrorMessages {
  [key: string]: string; // All property values must be strings
}

const errors: ErrorMessages = {
  email: 'Invalid email format',
  username: 'Username is required',
  password: 'Must contain 8+ characters',
};

// ✅ Valid access
console.log(errors['email']); // "Invalid email format"

// ----------------------------------------------------

// Example 2: Mixed known and unknown keys
interface UserRoles {
  admin: boolean;
  [roleName: string]: boolean; // Any role name must map to a boolean
}

const roles: UserRoles = {
  admin: true,
  editor: false,
  contributor: true,
};

// ----------------------------------------------------

// Example 3: Number index signature
interface NumberDictionary {
  [index: number]: string;
}

const months: NumberDictionary = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
};

// ----------------------------------------------------

// Example 4: Constraining values with `unknown`
interface UnknownDataStore {
  [key: string]: unknown;
}

const dataStore: UnknownDataStore = {
  config: { debug: true },
  version: '1.0.0',
  users: ['Alice', 'Bob'],
};

/*
🧠 Why use `unknown`?
- Helps enforce type checking when you consume the values.
- You must narrow the type before using it (type-safe).
*/

const users = dataStore.users;
if (Array.isArray(users)) {
  console.log('Users: ', users.join(', '));
}

// ----------------------------------------------------

// 🧪 Summary:
// - Index signatures let you type objects with dynamic property names
// - Use `string` or `number` as keys
// - Combine known and dynamic keys
// - `unknown` is safer than `any` when values may vary in type
