// ─────────────────────────────────────────────────────────────
// 🧱 DEEP DIVE INTO TYPESCRIPT: MAPPED TYPES
// ─────────────────────────────────────────────────────────────
//
// 📘 PURPOSE: Showcase powerful uses of mapped types
// with helpful examples, real-world patterns, and
// XML-style comments for clarity and documentation.
// ─────────────────────────────────────────────────────────────

/**
 * 🔁 Converts all properties of an object to `boolean`.
 *
 * @example
 * type FeatureFlags = { darkMode: () => void, autoSave: () => void }
 * type Flags = OptionsFlags<FeatureFlags>
 * // Result: { darkMode: boolean, autoSave: boolean }
 */
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

/**
 * 🔁 Removes optional modifiers from all fields.
 *
 * @example
 * type PartialUser = { id: string, name?: string }
 * type User = Concrete<PartialUser>
 * // Result: { id: string, name: string }
 */
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

/**
 * 🔁 Removes the `readonly` modifier from all properties.
 *
 * @example
 * type Locked = { readonly id: string }
 * type Unlocked = CreateMutableType<Locked>
 * // Result: { id: string }
 */
type CreateMutableType<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

/**
 * 🔁 Capitalizes keys and turns them into getter function names.
 *
 * @example
 * type Person = { name: string, age: number }
 * type Lazy = Getters<Person>
 * // Result: { getName: () => string, getAge: () => number }
 */
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

/**
 * 🔁 Removes a specific key (`kind`) from a type.
 *
 * @example
 * type Circle = { kind: 'circle', radius: number }
 * type KindlessCircle = RemoveField<Circle>
 * // Result: { radius: number }
 */
type RemoveField<Type> = {
  [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
};

/**
 * 🔁 Extracts a boolean map indicating which fields contain PII.
 *
 * @example
 * type DB = { name: { type: string, pii: true }, age: { type: number } }
 * type PIIFlags = ExtractPII<DB>
 * // Result: { name: true, age: false }
 */
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

/**
 * 🔁 Converts a union of event types into a config object using their `kind` as keys.
 *
 * @example
 * type E = { kind: 'circle', radius: number } | { kind: 'square', x: number }
 * type Conf = EventConfig<E>
 * // Result: { circle: (event: { kind: 'circle'... }) => void, square: (...) => void }
 */
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E['kind']]: (event: E) => void;
};

/**
 * 🔁 Converts all keys in a type to capitalized form (key-only transformation).
 *
 * @example
 * type Obj = { name: string, age: number }
 * type CapitalizedKeys = CapitalizeKeys<Obj>
 * // Result: "Name" | "Age"
 */
type CapitalizeKeys<T> = Capitalize<keyof T & string>;

// ─────────────────────────────────────────────────────────────
// 🧪 TEST CASES
// Uncomment these to test the mapped types in your TS playground
// ─────────────────────────────────────────────────────────────

// type UserFeatures = { darkMode: () => void; autoSave: () => void };
// type FlagMap = OptionsFlags<UserFeatures>;

// type OptionalUser = { id: string; name?: string };
// type StrictUser = Concrete<OptionalUser>;

// type ReadonlyData = { readonly id: number; readonly name: string };
// type WritableData = CreateMutableType<ReadonlyData>;

// type Person = { name: string; age: number };
// type LazyPerson = Getters<Person>;

// type Event = { kind: 'login'; userId: string } | { kind: 'logout'; userId: string };
// type Config = EventConfig<Event>;
