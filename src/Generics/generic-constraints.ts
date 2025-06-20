// 📘 GENERIC CONSTRAINTS IN TYPESCRIPT
// --------------------------------------------------

/*
🔍 What is a Generic Constraint?
A generic constraint allows you to tell TypeScript that a generic type must conform to a certain shape.

Problem:
If you try to write a generic function that assumes certain properties (like `.length`), TypeScript will give an error — because it can’t be sure that the input type has those properties.

Solution:
Use an `interface` to define the required shape, then use the `extends` keyword to constrain the generic type to that shape.
*/

// ❌ Example Without Constraint (throws error)
// function loggingIdentity<Type>(arg: Type): Type {
//   console.log(arg.length); // Error: Property 'length' does not exist on type 'Type'.
//   return arg;
// }

// ✅ Step 1: Define a constraint interface
interface Lengthwise {
  length: number;
}

// ✅ Step 2: Apply the constraint with `extends` means the type should also  have the ".length" property
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log('Length is:', arg.length); // ✅ Safe to access length
  return arg;
}

/*
✅ Valid Examples — all have a `.length` property
*/
loggingIdentity('hello'); // ✅ string has length
loggingIdentity([1, 2, 3]); // ✅ array has length
loggingIdentity({ length: 10, value: 3 }); // ✅ custom object with length

/*
❌ Invalid Example — number doesn’t have `.length`
*/
// loggingIdentity(123); // ❌ Error: number doesn't have length

/*
🧪 Real-World Utility Example:
Use case: You want a function that returns the first element and the total length of a collection (array or string).
*/
function getFirstAndLength<T extends { length: number; [index: number]: any }>(list: T): string {
  return `First: ${list[0]}, Length: ${list.length}`;
}

console.log(getFirstAndLength('TypeScript')); // First: T, Length: 10
console.log(getFirstAndLength([10, 20, 30])); // First: 10, Length: 3
// console.log(getFirstAndLength(42));         // ❌ Error

/*
🎯 Summary:
- `extends` lets you require that a type has specific properties.
- Helps you avoid runtime errors by making your code safe and expressive.
- Ideal when writing flexible utility functions that operate on objects of a known shape.
*/
