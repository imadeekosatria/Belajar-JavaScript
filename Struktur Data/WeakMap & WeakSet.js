/*
Hapus tanda // untuk menjalankan kode!
*/
//================ Perbedaan antara Map dan WeakMap =================

//Map
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}
 
let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"
 
jonas = null;                    // Data object "Jonas" dihapus
 
console.log(visitsCountMap);
 
/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

//WeakMap
// let visitsCountMap = new WeakMap(); // Menyimpan daftar user

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas);                // Menambahkan user "Jonas"

// jonas = null;                    // Data object "Jonas" dihapus

// console.log(visitsCountMap);

/* output
WeakMap { <items unknown> }
*/