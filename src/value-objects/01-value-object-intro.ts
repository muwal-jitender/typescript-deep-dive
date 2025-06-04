// ─────────────────────────────────────────────────────────────
// 🧱 VALUE OBJECTS IN TYPESCRIPT: Modeling Units with Meaning
// ─────────────────────────────────────────────────────────────
//
// 🎯 GOAL: Learn how to create and work with **Value Objects** in TypeScript.
//
// 🔍 A Value Object is a small object that:
//    - Holds a value that has **semantic meaning** (not just a raw number)
//    - Is **immutable**
//    - Is **equal by value**, not by identity
//    - Helps prevent accidental misuse of plain primitives like `number`
//
// 📦 In this example, we model distances using Miles and Kilometers.
//     Both are represented as value objects with strong typing.
// ─────────────────────────────────────────────────────────────

// ✅ Define two value objects: Mile and Kilometer
type Kilometer = {
  value: number;
  type: 'kilometer';
};

type Mile = {
  value: number;
  type: 'mile';
};

// 🛠️ Convert miles → kilometers using value-based transformation
const convertToKilometers = (miles: Mile): Kilometer => {
  return {
    value: miles.value * 1.60934,
    type: 'kilometer',
  };
};

// 🛠️ Convert kilometers → miles using the inverse formula
const convertToMiles = (kilometers: Kilometer): Mile => {
  return {
    value: kilometers.value / 1.60934,
    type: 'mile',
  };
};

// ─────────────────────────────────────────────────────────────
// ✅ Example usage of value objects
// ─────────────────────────────────────────────────────────────

const miles: Mile = { value: 5, type: 'mile' };
const convertedToKm = convertToKilometers(miles);
console.log('➡️ Converted to kilometers:', convertedToKm);

const kilometers: Kilometer = { value: 8, type: 'kilometer' };
const convertedToMiles = convertToMiles(kilometers);
console.log('➡️ Converted to miles:', convertedToMiles);

// ─────────────────────────────────────────────────────────────
// 📚 Why Use Value Objects?
// ─────────────────────────────────────────────────────────────

/*
✅ Prevents bugs:
  - convertToMiles(8) ❌ Not allowed! We don't know if "8" is in km or miles.

✅ Improves readability:
  - `value: 5, type: 'mile'` is self-explanatory
  - `number` by itself is ambiguous

✅ Ensures correctness:
  - Forces correct conversions and units

✅ Helps scale:
  - You can extend value objects with methods, formatting, validation, etc.

📦 Real-world value objects might include:
  - Money
  - EmailAddress
  - PhoneNumber
  - DateRange
  - GeoLocation
*/

// 🧠 Summary:
// A Value Object makes invisible meaning visible — and protects it with types.
