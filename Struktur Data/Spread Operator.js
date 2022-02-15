const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
 
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

//================ (...) => spread operator =================
console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

//================ Menggabungkan 2 Array dg Spread =================
//================ Tanpa Spread =================
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

//================ Dengan Spread =================
const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

//================ Menggabungkan 2 Object Menggunakan Spread =================
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/