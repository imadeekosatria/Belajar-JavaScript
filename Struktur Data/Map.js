/*
Hapus tanda // untuk menjalankan kode!
*/

//================ Map =====================
// const myMap = new Map([
//     ['1', 'a String key'],
//     [1, 'a number key'],
//     [true, true]
// ]);

// console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

//================ Get() => Untuk mengambil nilai berdasarkan key =================
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */
//================ Set() => Menambahkan pasangan key-value baru =================