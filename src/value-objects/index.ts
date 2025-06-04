// src/value-objects/index.ts

import { EmailAddress } from './04-value-object-email_address';
import { Money } from './03-value-object-money';

// 💰 Money value object usage
const m1 = new Money({ amount: 100, currency: 'USD' });
const m2 = new Money({ amount: 100, currency: 'USD' });
const m3 = new Money({ amount: 300, currency: 'USD' });

console.log(m1.equals(m2)); // ✅ true
console.log(m1.equals(m3)); // ❌ false
console.log(m1.toString()); // "100 USD"

// 📧 EmailAddress value object usage
const email1 = new EmailAddress({ value: 'john@example.com' });
const email2 = new EmailAddress({ value: 'john@example.com' });
const email3 = new EmailAddress({ value: 'jane@example.com' });

console.log(email1.equals(email2)); // ✅ true
console.log(email1.equals(email3)); // ❌ false
