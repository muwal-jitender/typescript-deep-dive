// ─────────────────────────────────────────────────────────────
// 🔍 KEY OPTIONAL vs VALUE OPTIONAL in TypeScript
// ─────────────────────────────────────────────────────────────
//
// 🎓 Welcome back! Today’s lesson clears up a common confusion:
// What’s the difference between an optional *key* and an optional *value*?
//
// 👨‍🏫 SCENARIO: Imagine you're building a user profile object.
//
// Let's focus on two fields:
// 1️⃣ `email`: You always want the key to be present in the object,
//     but it's okay if the actual value is not set yet.
// 2️⃣ `middleName`: Some users might not have one, so the key itself can be omitted.
//
// 🧠 TypeScript gives us two different ways to model these cases:
//
// - `email: string | undefined`  → key must exist, value can be undefined
// - `middleName?: string`        → key is optional, may not be present at all
//

// ─────────────────────────────────────────────────────────────
// ✅ 1. Value Optional – key is always present, but value may be undefined
// ─────────────────────────────────────────────────────────────

type ValueOptional = {
  email: string | undefined;
};

const example: ValueOptional = {
  email: undefined, // ✅ key is present, value is undefined
  // 🔍 Imagine a form where the field is empty but still part of the payload
};

// ─────────────────────────────────────────────────────────────
// ✅ 2. Key Optional – key may be completely missing
// ─────────────────────────────────────────────────────────────

type KeyOptional = {
  middleName?: string;
};

const keyOptional: KeyOptional = {
  // ✅ middleName is omitted — totally fine
};

// You could also include it if available:
const withMiddleName: KeyOptional = {
  middleName: 'Raj',
};

// ─────────────────────────────────────────────────────────────
// 🧠 Real-World Use Cases
// ─────────────────────────────────────────────────────────────

/*
Use `string | undefined` when:
  - You expect the key to *always* be there (e.g., in a form or API contract)
  - But the actual value might not be known or set yet

Use `key?: string` when:
  - The field is *optional* in the domain model
  - You don’t want to send the key at all if it’s not relevant
*/

// ─────────────────────────────────────────────────────────────
// 📊 Summary Table
// ─────────────────────────────────────────────────────────────

/*
| Type Style              | Key Present? | Value Can Be Undefined? | Real-World Analogy                          |
|------------------------|--------------|--------------------------|---------------------------------------------|
| `email: string | undefined` | ✅ Yes       | ✅ Yes                   | Form field left empty but still submitted   |
| `middleName?: string`      | ❌ Optional | ✅ If provided            | Optional field not shown on the form at all |
*/

// 🧪 Tip: Combine both when needed
type FlexibleUser = {
  name: string;
  nickname?: string | undefined; // Key might not be there, and if it is, can be undefined
};
