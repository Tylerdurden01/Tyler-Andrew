const me = {
  age: 29
};

console.log(me["age"]);
console.log(me.age); //Use this when you can!

let keyINeed = "age";
console.log(me[keyINeed]);
console.log(me["keyINeed"]); //undefined
