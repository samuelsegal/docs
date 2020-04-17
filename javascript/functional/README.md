## Functional
Similar goals to OOP as far as modularizing. THey both want to seperate code into reusable packages. Functional is different in that it seperates the data from the behavior.
* Pure Functions: All objects are immutable. We avoid shared state.
* Minimize side effects: Do not mutate data, instead RETURN new data. This is how we avoid sharing state. Pure functions have no side effects. However not everything can be pure functinos of course then the program would have no side effects and do nothing.

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
const hof = () => () return 5;
const hof2 = fn => fn(5);
```
