// ------------------------ 🔍 KEY OPTIONAL vs VALUE OPTIONAL 🔍 ------------------------
//
// 🎓 As your instructor, let's understand a very important concept in TypeScript
// that often confuses developers: the difference between a key being optional
// and a value being optional.
//
// ▌👨‍🏫 SCENARIO: Imagine you're building a user profile system.
//
// Let's look at two fields:
// 1. `email`: We always want this key to be present in the user object,
//    but it's okay if the user hasn't added an email yet — so its value can be undefined.
// 2. `middleName`: This is completely optional. Some users may not have one,
//    and we don't even need the `middleName` key in that case.
//
// ─────────────────────────────────────────────────────────────
// 🧩 So we create two types to capture this difference:
//
// - `ValueOptional`: The key must always be present, but value can be undefined.
// - `KeyOptional`: The key itself is optional and may be omitted entirely.
//
// Let’s define them with real-world context:

type ValueOptional = {
  email: string | undefined; // Must include the email field, but it's okay to leave it blank
};

const example: ValueOptional = {
  email: undefined, // ✅ Email field exists, but user hasn’t provided a value yet
};

type KeyOptional = {
  middleName?: string; // Optional key: only included when relevant
};

const keyOptional: KeyOptional = {
  // ✅ middleName is omitted because user doesn’t have one
};
