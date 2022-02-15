//Let -> variabel yang dapat di update
let lastName;
lastName = "Satria Wiguna";

console.log(lastName);
/*
Output

Satria Wiguna
*/

let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

const z = 100;
console.log(z);
z = 200;
console.log(z)

/* 
Output

TypeError: Assignment to constant variable. 
*/