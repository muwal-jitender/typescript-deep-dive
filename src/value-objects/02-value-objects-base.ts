import isEqual from 'lodash.isequal';

/**
 * 🧱 Base class for implementing Value Objects in Domain-Driven Design.
 *
 * A Value Object is an object that:
 * - Has no identity (compared by value, not by reference)
 * - Is immutable once created
 * - Represents a descriptive aspect of the domain (e.g., Money, EmailAddress)
 *
 * @template T - The shape of the props that define the value object
 */
export abstract class ValueObject<T> {
  protected readonly props: T;

  constructor(props: T) {
    /**
     * ❄️ We freeze the props object to prevent any mutation after creation.
     *
     * This enforces immutability — a key trait of value objects.
     * NOTE: Object.freeze() is shallow — nested objects are NOT deeply frozen.
     * For deep immutability, you'd need a recursive 'deepFreeze' or use a library
     * like 'immer', 'deep-freeze', or TypeScript Readonly<T> types with discipline.
     */
    this.props = Object.freeze(props);
  }

  /**
   * 📏 Checks if this Value Object is equal to another by comparing their props.
   *
   * Equality is based on:
   * - Same constructor (same type of Value Object)
   * - Deep equality of all property values
   *
   * @param otherObject - Another ValueObject instance to compare with
   * @returns boolean - true if both Value Objects are deeply equal
   */
  equals = (otherObject: ValueObject<T>): boolean => {
    if (otherObject == null) return false;

    // 🧠 Ensure both are instances of the exact same class (not just same structure)
    if (otherObject.constructor !== this.constructor) return false;

    // 🔍 Perform deep equality check using lodash.isequal
    return isEqual(this.props, otherObject.props);
  };
}
