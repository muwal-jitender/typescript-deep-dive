// 📘 GENERIC CONSTRUCTOR TYPES & FACTORIES IN TYPESCRIPT
// -------------------------------------------------------

/*
🔍 What Are Generic Constructor Types?
These are function parameters typed as constructors (`new () => T`), meaning you can pass in a class instead of a plain value, and TypeScript will ensure the class can be instantiated and returns the correct type.

Use Case:
You want to create a flexible factory function that can construct any object that follows a specific contract — ideal for use in dependency injection, class factories, or dynamic instance creation.
*/

// ✅ Step 1: Define a base interface or contract
interface Service {
  doWork(): string;
}

// ✅ Step 2: Create concrete classes implementing the contract
class EmailService implements Service {
  doWork(): string {
    return 'Sending email...';
  }
}

class SmsService implements Service {
  doWork(): string {
    return 'Sending SMS...';
  }
}

// ✅ Step 3: Define a factory function that accepts a constructor
function createServiceInstance<T extends Service>(Ctor: new () => T): T {
  return new Ctor();
}

// ✅ Step 4: Use the factory function
const email = createServiceInstance(EmailService);
console.log(email.doWork()); // "Sending email..."

const sms = createServiceInstance(SmsService);
console.log(sms.doWork()); // "Sending SMS..."

// 🧪 Real-World Utility:
// Imagine switching services at runtime — you can inject a constructor dynamically without changing the factory logic.

/*
🔁 VISUAL FLOW:
------------------------------

You Call:         createServiceInstance(EmailService)

             ┌───────────────────────────────┐
             │ Function Signature:           │
             │  createServiceInstance<T>     │
             │  (Ctor: new () => T): T       │
             └───────────────────────────────┘
                              │
                              ▼
             ┌───────────────────────────────┐
             │ new EmailService()            │
             └───────────────────────────────┘
                              │
                              ▼
             ┌───────────────────────────────┐
             │ Returns: EmailService object  │
             └───────────────────────────────┘
                              │
                              ▼
             🔊 Output: "Sending email..."
------------------------------------------- OR ------------------------------------
Caller gives you:  class EmailService
               ⇩
Your function:   createServiceInstance(EmailService)
               ⇩
Type says:       "EmailService is new () => EmailService"
               ⇩
You do:          return new EmailService(); // returns type EmailService


*/

// 🎯 Summary:
// - `new () => T` enforces that you pass a class constructor that returns `T`
// - `T extends SomeInterface` lets you control the shape of allowed types
// - Super useful for dependency injection and flexible factory patterns
