let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

//================ Push -> Memasukan data ke Array =================
myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
*/

//================ Pop -> Menghapus data di Array =================
myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true, 'Programming' ]
*/

//================ Shift -> Mengeluarkan element pertama =========================
//================ Unshift -> Memasukan element di awal Array =================
myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

//================ Delete =====================
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

//================ Splice =====================
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/