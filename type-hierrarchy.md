# TypeScript: `any` vs `unknown` vs `never`

## `any`

`any` accepts literally anything, and TypeScript stops checking that value completely. It's flexible, but it removes type safety and can lead to runtime errors.

```ts
let value: any = "Hello World";
value = 123;
value.toUpperCase(); // no TS error, but it crashes at runtime
```

## `unknown`

`unknown` also accepts any value, but TypeScript won't let you use it until you've checked what it actually is. That makes it the safe version of `any`.

```ts
let value: unknown = "Hello World";

value.length; // Error: value is of type unknown

if (typeof value === "string") {
  console.log(value.toUpperCase()); // fine, TS knows it's a string here
}
```

## `never`

`never` is for values that can never happen. You'll mostly see it as the return type of functions that never finish normally, like ones that always throw or loop forever. It also helps TypeScript spot code that can't be reached.

```ts
const getError = (msg: string): never => {
  throw new Error(msg);
};
```

`getError()` always throws, so it never returns a value. That's why its return type is `never`.

It's also handy for exhaustive checks. If you add a new case later and forget to handle it, TypeScript will complain:

```ts
type Shape = "circle" | "square";

const area = (shape: Shape) => {
  switch (shape) {
    case "circle":
      return "round";
    case "square":
      return "boxy";
    default:
      const _exhaustive: never = shape; // errors if a new Shape is added
      return _exhaustive;
  }
};
```

## Quick comparison

| Type      | What it means                          | When to use it             |
| --------- | -------------------------------------- | -------------------------- |
| `any`     | Anything goes, no type checking        | Avoid if you can           |
| `unknown` | Anything goes, but you must check it   | Untrusted data (API, JSON) |
| `never`   | A value that can't exist               | Exhaustive checks, throws  |

## Why `unknown` over `any`?

Because `unknown` makes you check the value before using it, TypeScript can still protect you. `any` skips all of that and can hide real errors until the app is running.

With `any`, mistakes show up when users hit them. With `unknown`, they show up in your editor while you're still writing the code.