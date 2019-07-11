const loggy = require('../loggy');

//Primitive - Pass By Value
//all have wrapper objects available which is often done behind the scene suchas [1,2,3].toString()
loggy.log(`typeof [1, 2, 3].toString() ::`);
loggy.clog(loggy.COLOR.FgYellow, typeof [1, 2, 3].toString());
console.log(typeof 5);
console.log(typeof 'ima string');
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol('a symbol'));
//Non-Primitive
console.log(typeof []);
console.log(typeof {});
console.log(typeof function() {});

//clone
let obj = { a: 'a', b: 'b', c: { deep: 'deep obj' }, d: { toodeep: 'too deep' } };
let clone = Object.assign({}, obj);
let restclone = { ...obj };
let superclone = JSON.parse(JSON.stringify(obj));

//shallow clone, deep objects never change reference address\
console.log(obj);
console.log(clone);
console.log(restclone);

//deep clone
obj.c.deep = 'setting deep obj and clones change to?';
obj.d = 2;
console.log(obj);
console.log(clone);
console.log(restclone);

//deep clone
obj.d.toodeep = 'soooo friggggin deep';
console.log(obj);
console.log(obj.d.toodeep);
console.log(clone);
console.log('RestClone:\n ', restclone);
//deep clone
console.log('SuperClone:\n', superclone);
