## 2 Pillars of Javascript

1. closure - a function that returns a function having access to variables in its lexical environment.

```
function holdonto(me){
    let ransom = 'ransomed: ' + me;
    return function(){
        console.log(ransom)
    }
}
const holder = holdonto('samo')
holder();
```

-   Closures can simulate private functions in javascript. In the following, the update method is not accessible outside of the pointSystem function. Instead the 3 public methods are made available which in turn utilize the update method.

```
var pointSystem = (function() {
    var privatePoints = 0;
    function update(val) {
        privatePoints += val;
    }
    return {
        increment: function() {
            update(1);
        },
        incrementBy: function(val) {
            update(val);
        },
        decrement: function() {
            update(-1);
        },
        decrementBy: function(val) {
            update(val);
        },
        value: function() {
            return privatePoints;
        },
    };
})();
console.log(pointSystem.value());
pointSystem.incrementBy(3);
console.log(pointSystem.value());
```

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
   "Currying is a way of constructing functions that allows partial application of a function’s arguments."

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
const partialMultiplyBy3And2 = mul.bind(null, 3, 2)
partialMultiplyBy3(8);
```

11. Memoization = Caching. Below is technique used in Dynamic programming alot.

```
function memoizeAdd30(n){
    let chache = {};
    //to handle state internal without introducing global variable we can use closure like the following inner function;
    return function(n){
        if(n in cache){
            return cache[n];
        } else {
            console.log('computing long calculation that should be cached)
            cache[n] = n + 30;
            return cache[n];
        }
    }
}

const executioner = memoizeAdd30();

console.log(executioner(2));
console.log(executioner(2));
console.log(executioner(2));
console.log(executioner(30));
console.log(executioner(30));

```

12. Compose and Pipe - apply a stream of functions to some data.

-   compose - apply functions right to left. See dynamic/composeExample.js
-   pipe compose functions left to right. See dynamic/pipeExample.js

13. Arity - Number of arguments a function takes. The fewer the better.

### Why be functional?

-   Many operations on fixed data
-   stateless
-   pure functions with no side effects
-   we can run code in parallel on seperate processors
-   More declarative (what we want done)
-   good for processing big data, can run on muliple processors
-   data and behavior are kept separate

### Why Be Down with OOP?

-   Few operation on commn data
-   stateful - modifying state
-   side effects are happening, things are getting done
-   Imperative ( How we will do things)
-   good for when you have a lot going. Modeling objects can simplify logic
-   data and behavior bundle into an object

### References:

-   https://www.udemy.com/advanced-javascript-concepts/
-   https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming
-   https://www.freecodecamp.org/news/10-ways-to-write-pipe-compose-in-javascript-f6d54c575616
