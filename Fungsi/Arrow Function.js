/*
Hapus tanda // untuk menjalankan kode!
*/

//================ Arrow Function =================

// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}

/**
 * Jika hanya memiliki satu Parameter
 * Dapat menghapus tanda kurung ()
 */
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

/* output
Nama saya Leia
 */

/**
 * Jika tidak membutuhkan parameter, tetap gunakan tanda kurung ()
 */
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

/* output
Selamat pagi semuanya!
 */

/**
 * Ketika body function hanya satu baris,
 * kita dapat menghapus tanda kurung kurawal {}
 */

 const sayName = name => console.log(`Nama saya ${name}`);
 sayName("Leia");
 
 const sayHello = () => console.log("Selamat pagi semuanya!");
 sayHello();
 
 /* output
 Nama saya Leia
 Selamat pagi semuanya!
  */

 /**
  * Ketika sebuah fungsi perlu mengembalikan nilai, 
  * kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
  */
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
  
/* output
12
*/