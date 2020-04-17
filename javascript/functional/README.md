## Functional
Similar goals to OOP as far as modularizing. THey both want to seperate code into reusable packages. Functional is different in that it seperates the data from the behavior.
* Pure Functions: All objects are immutable. We avoid shared state.
* Minimize side effects: Do not mutate data, instead RETURN new data. This is how we avoid sharing state. Pure functions have no side effects. However not everything can be pure functinos of course then the program would have no side effects and do nothing.
* A final [example](https://github.com/samuelsegal/docs/blob/master/javascript/functional/whyBeFunctionalFinally.js) of putting functional programming to use inspired by recommended course for advanced js:  
https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13829728#overview

### Idempotence  
A function that always returns the same result, no matter how many times the function is abused even recursively.
```
Math.abs(Math.abs(Math.abs(-50)))
```

### Imperative vs. Declarative

* Imperative - Machine code
```
for (let i = 1; i < 5; i++) {
  console.log(i)
}
```
* Declarative - a higher level language such as javascript
```
[1,2,3,4,5].forEach(i=>console.log(i));
```

### Structural Sharing
When dealing with large objects and immutability, rather than copying whole object to support immutability we only copy the small parts we update so the overall object is not copied into memory. To support immutability efficiently.

### HOF
```
const hof = () => () => 55;
hof();

const hof2 = fn => fn(5);
hof2(function a(x) { return x});
```

### Closure in HOF's - way to privatize variables
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

### Currying 
```
const mul = (a,b) => a*b;
const curriedMul = (a) => (b) => a*b;
curriedMul(3)(8);
const curriedBy3 = curriedMul(3)
curriedBy3(8);
```
### Memoization - used for caching the return value based on the parameter
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

### compose
Make one function out of many other functions. _lodash is an example library that has this feature
```
const compose = (f, g) => data => f(g(data));
const multiplyBy3 = num => num * 3;
const add3 = num => num + 3;
const addAndMultiplyBy3 = compose(
	multiplyBy3,
	add3
);
console.log(addAndMultiplyBy3(5));
```

### pipe - reversed version of compose
```
  
const pipe = (f, g, h) => data => h(g(f(data)));
const multiplyBy3 = num => num * 3;
const add3 = num => num + 3;
const abs = num => Math.abs(num);
const muliplyBy3Add3Absolute = pipe(
	multiplyBy3,
	add3,
	abs
);
console.log(muliplyBy3Add3Absolute(-5));
```

