/*
Hapus tanda // untuk menjalankan kode!
*/

/*
 Set sederhananya merupakan kumpulan nilai (set of values). 
 Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. 
 Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
 */
//================ Set =================
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }

==> Set otomatis menghapus nilai duplikat. Pada contoh di atas angka {4 & 1} di hapus.
*/

//================ Add() => Untuk menambahkan data ke dalam set =================
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

//================ Delete() => Untuk menghapus nilai =================
numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/