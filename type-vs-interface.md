# Type alias vs Interface

Generally, the TypeScript documentation recommends using `interface`, and using `type` aliases only where you cannot use an interface. `Interfaces` are typically used for object shapes, whereas `type` aliases are more commonly used for literals, unions, tuples, and primitives.

### Here are some differences between Type Alias vs Interface:

### 1. Basic syntax:

Using `type`:

```ts
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Rafi",
    email: "rafi@gmail.com",
};
```

Using `interface`:

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

const user: User = {
    id: 1,
    name: "Rafi",
    email: "rafi@gmail.com",
};
```

### 2. Declaration merging

`Type` aliases don't support declaration merging:

**You cannot declare the same type alias twice.**

```ts
type User = {
    name: string;
};

type User = {
    age: number;
};

// Error: Duplicate identifier 'User'
```

`Interface` supports declaration merging:

**TypeScript automatically combines both declarations.**

```ts
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: "Rafi",
    age: 25,
};
```

### 3. Extending and Combining types:

**Both support combining object structures, but the syntax differs.**

Using `interface` with `extends`:

```ts
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian",
};
```

Using `type` with intersection (`&`):

```ts
type Vehicle = {
    brand: string;
};

type Car = Vehicle & {
    model: string;
};

const car: Car = {
    brand: "Toyota",
    model: "Corolla",
};
```

### 4. Type aliases support union types

**This is an important capability that interfaces don't provide directly.**

For example:

```ts
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";

currentStatus = "success"; // Valid
currentStatus = "failed";  // Error
```

You can also use unions with objects:

```ts
type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    purchaseCount: number;
};

type User = Admin | Customer;
```

**An interface cannot directly represent this kind of union.**

**Although we can use a union type (`|`) inside an interface.**

```ts
type Role = "admin" | "member";

interface User {
    id: string;
    name: string;
    role: Role;
}

const user: User = {
    id:123,
    name:"abc",
    role:"admin",
};
```