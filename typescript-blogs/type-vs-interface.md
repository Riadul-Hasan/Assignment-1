# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript provides both `type` aliases and `interface` declarations to describe the shape of data. They often look similar, but each has capabilities that make it useful in different situations. Understanding their differences helps developers write maintainable and flexible code.

## Detailed Explanation

An `interface` is primarily designed to describe object structures. Interfaces can be extended using `extends`, allowing one interface to inherit properties from another. They also support declaration merging: multiple declarations with the same interface name are automatically combined.

```
interface User {
  id: number;
  name: string;
}
interface Admin extends User {
  permissions: string[];
}
```


A `type` alias can represent more than an object. It can define unions, intersections, primitive aliases, tuples, and function types. Unlike interfaces, type aliases cannot be reopened through declaration merging.


```
type Status = "active" | "inactive";
type UserInfo = {
  id: number;
  name: string;
};
type AdminInfo = UserInfo & {
  permissions: string[];
};
```


Both approaches support describing object shapes and can often be used interchangeably. However, interfaces are especially convenient for object-oriented designs and extendable public contracts. Type aliases are more suitable for complex type expressions, such as combining alternatives with `|` or composing structures with `&`.

## Conclusion

Choose `interface` when defining object contracts that may need extension or declaration merging. Choose `type` when creating unions, intersections, tuples, or other advanced type expressions. Consistent usage and clear intent matter more than treating one as universally better.
