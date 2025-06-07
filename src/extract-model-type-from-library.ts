// ─────────────────────────────────────────────────────────────
// 🎯 STRONGLY TYPING THIRD-PARTY LIBRARY CONFIGURATION
// ─────────────────────────────────────────────────────────────
//
// 👇 GOAL: Use TypeScript's `typeof` and `Parameters<>` utilities
//    to extract the list of allowed `modelId` values from a
//    third-party library (`@ai-sdk/google`) and ensure our code
//    uses only valid, **strictly typed**, model IDs.
// ─────────────────────────────────────────────────────────────

import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

// ✅ STEP 1: Extract the first parameter type of the `google()` function.
//    `ModelId` will be a union type of all valid model names.
//
//    For example:
//    type ModelId = 'gemini-1.5-pro' | 'gemini-1.5-flash' | ...
type ModelId = Parameters<typeof google>[0];

// ✅ STEP 2: Define a helper type to filter out invalid usages.
//    Loose string values like `"any-string"` are disallowed.
//
//    This ensures we don't accidentally pass an un-validated string.
//    It narrows type to strict model ID names defined by the SDK.
type LooseToStrict<T> = T extends any ? (string extends T ? never : T) : never;

// ─────────────────────────────────────────────────────────────
// 🧠 WHY THIS MATTERS:
//
// ✅ Helps catch typos early at compile time.
// ✅ Prevents misuse by narrowing types to valid model names.
// ✅ Adapts automatically if the library updates its allowed models.
// ─────────────────────────────────────────────────────────────

class GenerativeAI {
  async text() {
    // ✅ STEP 3: Assign a valid, strongly typed model ID.
    // This line will cause a compile-time error if the model is not valid.
    const model: LooseToStrict<ModelId> = 'gemini-1.5-flash';

    // ✅ STEP 4: Use the strongly typed model in the SDK call.
    const result = await generateText({
      model: google(model),
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
    });

    return result.text;
  }
}

// ✅ Usage example: invoke the class method to generate text
const generativeAI = new GenerativeAI();

(async () => {
  const recipe = await generativeAI.text();
  console.log(recipe);
})();
