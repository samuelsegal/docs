## 2 Pillars of Javascript

1. closure
2. prototypal inheritance

## OOP

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphyism

## Functional Programming

1. Seperation of concerns - modular
2. Pure Functions - seperation of data and behavior, all pure functions are immutable
3. Idempotent - operation or function that results in same result no matter how many times it is called fn(fn()) == fn() === fn(fn(fn(fn(fn()))))
4. Imperative - tells machine what to do and how to do it (perfect for computers)

```
for(int i = 0; i < arr.lentgth; i++){}
```

5. Declarative - What to do and what should happen, it does not give instructions (Humans are more declarative then computers)

```
arr.forEach(item=>console.log(item)){console.log(item[i])}
```

6. Immutablilty - Not changing data or state. Instead we make copies of state and return a new state. Nobody gets mutated, more cloned into a new state. This way we do not get lost in following the state of a given object reference.
   To improve performance look into structural sharing.
7. Higher Order Functions - A function that either takes 1 or more functions as arguments or returns a function as a result

```
//Returns a funtion
const hof = () => () => 5;
hof()();

//Takes a function
const hof2 = (fn) => fn(5);
hof2(function(x){return x});
```

8. Closure - Mechanism for containing state. In javascript functions that update variables outside of scope. If the closure mutates the outside variable this closure is an impure function.

```
//closure that also is an impure function
const closure = function(){
    let count = 0;
    return function increment(){
        return ++count;

    }
}
const increment = closure();
increment();
increment();
increment();

//closure that also is a pure function
const closure = function(){
    let count = 0;
    return function getCounter(){
        return count;

    }
}
const c = getCount();

```

9. Currying (Haskell Brooks Curry - mathematician) - "transform a function with multiple arguments into a chain of single-argument functions instead"

```
const mul = (a,b) => a*b;
const curriedMul = (a) => (b) => a*b;
curriedMul(3)(8);
const curriedBy3 = curriedMul(3)
curriedBy3(8);
```

10. Partial Application - Partially apply a function, similar to currying

```
const mul = (a,b,c) => a*b*c;
const partialMultiplyBy3 = mul.bind(null, 3);
partialMultiplyBy3(8,2);
```

### Why be functional?

### References:

-   https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
