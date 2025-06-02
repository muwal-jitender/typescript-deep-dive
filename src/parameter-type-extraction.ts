// ────────────────────────────────────────────────────────────────────────
// 🎥 Imagine you're watching a live coding session. Here's the setup:
//
// You're using a 3rd-party library that gives you a function.
// You want to reuse a part of its type (specifically the 3rd parameter).
// ────────────────────────────────────────────────────────────────────────

// 📦 Library code (pretend this is from a package you can't edit)
const functionFromLibrary = (
  a: string,
  b: string,

  // 👇 This third parameter is a config object — but its type is written inline
  extractMePlease: {
    d: boolean;
    e: string[];
  },
) => {
  // This function does something with the parameters
};

// 🔍 Now let’s say you want to reuse the type of that third parameter elsewhere.
// You *could* retype it manually... but that's risky and repetitive.

// ✅ Instead, we use TypeScript's Parameters utility type
// This extracts a function’s parameter types as a tuple: [a, b, extractMePlease]
type Result = Parameters<typeof functionFromLibrary>[2];

// 🧠 Now what exactly did we extract?

/*
  🎯 `Parameters<typeof functionFromLibrary>` gives us:
      [string, string, { d: boolean; e: string[] }]

  ✅ So [2] picks the 3rd item: { d: boolean; e: string[] }

  This is powerful because:
  - We don't have to manually recreate the type
  - It stays in sync if the library changes it later
  - We reduce bugs and maintenance headaches
*/

// 📦 Example usage:
const config: Result = {
  d: true,
  e: ['email', 'sms'],
};

// ⛔ For reference — this is what we *could* have written manually, a wrong approach:
type LibraryConfig = {
  d: boolean;
  e: string[];
};

// This ensures the config object always matches what the function expects,
// even if that function evolves over time.
