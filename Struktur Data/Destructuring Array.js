/*
Hapus tanda // untuk menjalankan kode!
*/

//================ Destructuring Array =================
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/

//================ Mengambil nilai ke tiga dari Array =================
// const [, , thirdFood ] = favorites;
 
// console.log(thirdFood);
 
/* output:
Nugget
*/

//================ Destructuring Assignment =================
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/

//================ Menukar nilai variabel =================
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

//================ Default Values =================
const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
undefined
*/
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/